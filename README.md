# StreamMerger
StreamMerger is a Python tool that collects and merges real-time ticker data from two Binance Futures WebSocket connections. It ensures robustness against network issues by selecting the most up-to-date events with minimal latency. The merged data is saved into a CSV file, supporting specific trading pairs like BTC/USDT and multiple event types.

## Deployment
1. Check if you have docker: `docker --version`  
Install if you haven't: `apt install docker.io`
2. Check if you have docker-compose: `docker-compose --version`
Install it if you haven't:  
`sudo curl -L "https://github.com/docker/compose/releases/download/v2.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose`  
`sudo chmod +x /usr/local/bin/docker-compose`
3. Start a container: `make up`

# Run server locally:
1. Activate your virtual environment:  
`pyenv virtualenv 3.10.12 sm`
`pyenv activate sm`  
2. Install requirements:  
`pip3 install requirements.txt`
3. Use migrations:  
`python3 manage.py migrate`
4. Run server:  
`python3 manage.py runserver`
