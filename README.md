# StreamMerger
StreamMerger is a Python web application that collects and merges real-time ticker data from two Binance Futures WebSocket connections. It ensures robustness against network issues by selecting the most up-to-date events with minimal latency. The merged data is saved into a CSV file, supporting specific trading pairs like BTC/USDT and multiple event types.
# Check it online
You can use this app online: https://internal-apt-piranha.ngrok-free.app/  
Or clone the repository and use it locally.

## Deployment
1. Check if you have docker:  
`docker --version`  
Install if you haven't:  
`apt install docker.io`
2. Check if you have docker-compose:  
`docker-compose --version`  
Install it if you haven't:  
`sudo curl -L "https://github.com/docker/compose/releases/download/v2.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose`  
`sudo chmod +x /usr/local/bin/docker-compose`
3. Start a docker container:  
`make up`
4. You can open your app in browser:  
http://127.0.0.1:8080/

## Development
1. Activate your virtual environment:  
`pyenv virtualenv 3.10.12 sm`
`pyenv activate sm`  
2. Install requirements:  
`pip3 install requirements.txt`
3. Use migrations:  
`python3 manage.py migrate`
4. Run server:  
`python3 manage.py runserver`
5. You can open your app:  
http://127.0.0.1:8080/

## Management commands