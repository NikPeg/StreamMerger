document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const tradingPair = urlParams.get('pair') || 'BTC/USDT';
    const streams = urlParams.get('streams') || '2';

    document.getElementById('dropdown1').textContent = "Trading Pair: " + tradingPair;
    const breakButtonsContainer = document.getElementById('break-buttons');
    const numberOfStreams = parseInt(streams, 10);

    for (let i = 1; i <= numberOfStreams; i++) {
        const button = document.createElement('button');
        button.className = 'choosebtn';
        button.textContent = `Break Stream ${i}`;
        breakButtonsContainer.appendChild(button);
        breakButtonsContainer.appendChild(document.createElement('br'));
    }
});