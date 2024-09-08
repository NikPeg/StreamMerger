# StreamMerger
StreamMerger is a Python tool that collects and merges real-time ticker data from two Binance Futures WebSocket connections. It ensures robustness against network issues by selecting the most up-to-date events with minimal latency. The merged data is saved into a CSV file, supporting specific trading pairs like BTC/USDT and multiple event types.

# Development
1. Activate your virtual environment:  
`pyenv virtualenv 3.10.12 sm`
`pyenv activate sm`  
2. Install requirements:  
`pip3 install requirements.txt`