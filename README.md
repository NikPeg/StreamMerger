# StreamMerger
StreamMerger is a Python tool that collects and merges real-time ticker data from two Binance Futures WebSocket connections. It ensures robustness against network issues by selecting the most up-to-date events with minimal latency. The merged data is saved into a CSV file, supporting specific trading pairs like BTC/USDT and multiple event types.

# Development
1. Activate your virtual environment:  
`pyenv virtualenv 3.10.12 sm`
`pyenv activate sm`  
2. Install requirements:  
`pip3 install requirements.txt`

## Deployment
1. Install docker: `apt install docker.io`
2. Install docker-compose: curl -L https://github.com/docker/compose/releases/download/1.21.2/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose  
   `chmod +x /usr/local/bin/docker-compose`
3. Go to the main directory: `cd StreamMerger`
4. Start container: `make up`