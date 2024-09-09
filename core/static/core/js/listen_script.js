document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const tradingPair = urlParams.get('pair') || 'BTC/USDT';
    const streams = urlParams.get('streams') || '2';

    document.getElementById('dropdown1').textContent = "Trading Pair: " + tradingPair;
});