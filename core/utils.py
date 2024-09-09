import asyncio
import json
import random
import signal
import sys
import time
import logging
import os
import websockets


def get_session_logger(session_slug):
    logger = logging.getLogger(session_slug)
    if not logger.handlers:
        log_dir = os.path.join(".", 'logs')
        os.makedirs(log_dir, exist_ok=True)
        file_handler = logging.FileHandler(os.path.join(log_dir, f'{session_slug}.log'))
        formatter = logging.Formatter('%(levelname)s %(asctime)s %(module)s %(message)s')
        file_handler.setFormatter(formatter)
        logger.addHandler(file_handler)
        logger.setLevel(logging.DEBUG)
        logger.propagate = False  # Prevent log messages from being propagated to the root logger
    return logger

# Function to connect to WebSocket and get data
async def get_stream_data(uri, callback, stream_name, logger):
    while True:
        try:
            async with websockets.connect(uri) as websocket:
                while True:
                    response = await websocket.recv()
                    data = json.loads(response)
                    await callback(data, stream_name)

        except websockets.ConnectionClosed:
            logger.warning(f"Connection to {stream_name} closed, retrying in 5 seconds...")
            await asyncio.sleep(5)  # Wait before reconnecting
        except Exception as e:
            logger.warning(f"Exception in {stream_name}: {e}")
            await asyncio.sleep(5)  # Wait before reconnecting


# Callback for processing data from each stream
async def on_message(data, stream_name):
    timestamp = time.time()
    stream_data.append({'timestamp': timestamp, 'data': data, 'stream': stream_name})


# Remove old records to keep data up to date
def remove_old_records(combined_data, max_age=2):
    current_time = time.time()
    combined_data[:] = [d for d in combined_data if current_time - d['timestamp'] < max_age]


# Simulate random network issues
async def simulate_network_issue(uri, callback, stream_name, logger):
    while True:
        await get_stream_data(uri, callback, stream_name, logger)
        await asyncio.sleep(random.randint(0, 10))  # Simulate connection disruption
        logger.info(f"Simulating network issue for {stream_name}")
        await asyncio.sleep(random.randint(0, 10))  # Simulate downtime after issue


# Main function to run the streams
async def listen_streams(session_slug, num_streams, trading_pair):
    # Create a logger for this session
    logger = get_session_logger(session_slug)

    global stream_data
    stream_data = []

    # Generate the URIs dynamically based on the trading pair
    uris = [f"wss://fstream.binance.com/ws/{trading_pair}@ticker" for _ in range(num_streams)]

    combined_data = []

    # Create and run tasks for all streams
    tasks = []
    for i in range(num_streams):
        stream_name = f'{session_slug}_stream{i + 1}'
        tasks.append(simulate_network_issue(uris[i], on_message, stream_name, logger))

    for task in tasks:
        asyncio.create_task(task)

    while True:
        # Combine data from all streams and remove old records
        combined_data.extend(stream_data)
        stream_data.clear()
        remove_old_records(combined_data)

        # Sort data by timestamp and select the latest ticker
        if combined_data:
            combined_data.sort(key=lambda x: x['timestamp'])
            latest_data = combined_data[-1]
            logger.info("Latest Data: %s", latest_data)

        await asyncio.sleep(1)  # Iterate every second

def signal_handler(signal, frame, loop):
    for task in asyncio.all_tasks(loop):
        task.cancel()

async def main(session_slug, streams_count, trading_pair):
    logger = get_session_logger(session_slug)
    logger.info("Start logging...")

    loop = asyncio.get_running_loop()

    # Define the signal handler with correct arguments
    def handler(signal, frame):
        signal_handler(signal, frame, loop)

    # Register signal handler
    signal.signal(signal.SIGINT, handler)
    signal.signal(signal.SIGTERM, handler)

    try:
        await listen_streams(session_slug, streams_count, trading_pair)
    except asyncio.CancelledError:
        logger.info("Streams listening task was cancelled")
    finally:
        logger.info("Shutting down...")
        print(f"\nYour log is in logs/{session_slug}.log")

if __name__ == "__main__":
    if len(sys.argv) != 4:
        print(f"Usage: {sys.argv[0]} <session_slug> <streams_count> <trading_pair>")
        sys.exit(1)

    session_slug = sys.argv[1]
    streams_count = int(sys.argv[2])
    trading_pair = sys.argv[3]

    # Execute the main coroutine
    asyncio.run(main(session_slug, streams_count, trading_pair))
