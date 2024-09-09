window.onload = function() {
        var btn1 = document.getElementById('dropdown1');
        var btn2 = document.getElementById('dropdown2');

        if (btn1 && btn2) {
            var maxWidth = Math.max(btn1.offsetWidth, btn2.offsetWidth) + 10;

            btn1.style.width = maxWidth + 'px';
            btn2.style.width = maxWidth + 'px';
        }
    };

document.addEventListener('DOMContentLoaded', function() {
    const tradingPairsDropdown = document.getElementById('trading-pairs');
    const numberOfStreamsDropdown = document.getElementById('number-of-streams');
    let selectedPair = 'BTC/USDT';
    let selectedStreams = '2';

    // Event listeners for trading pairs
    tradingPairsDropdown.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', function(event) {
            selectedPair = event.target.textContent;
            console.log('Selected Trading Pair:', selectedPair);
            document.getElementById('dropdown1').textContent = 'Trading Pair: ' + selectedPair;
        });
    });

    // Event listeners for number of streams
    numberOfStreamsDropdown.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', function(event) {
            selectedStreams = event.target.textContent;
            console.log('Selected Number of Streams:', selectedStreams);
            document.getElementById('dropdown2').textContent = 'Number of Streams: ' + selectedStreams;
        });
    });

    // Event listener for Listen button
    document.querySelector('.listen-btn').addEventListener('click', function() {
        const baseUrl = window.location.origin;
        const path = '/listen';
        const url = `${baseUrl}${path}?pair=${encodeURIComponent(selectedPair)}&streams=${encodeURIComponent(selectedStreams)}`;
        window.location.href = url;
    });
});