document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const tradingPair = urlParams.get('pair') || 'BTC/USDT';
    const streams = urlParams.get('streams') || '2';
    const session = urlParams.get('session') || 'meme';

    document.getElementById('dropdown1').textContent = "Trading Pair: " + tradingPair;
    const breakButtonsContainer = document.getElementById('break-buttons');
    const numberOfStreams = parseInt(streams, 10);

    for (let i = 1; i <= numberOfStreams; i++) {
        const button = document.createElement('button');
        button.className = 'choosebtn';
        button.onclick = () => sendBreakRequest(session, i);
        button.textContent = `Break Stream ${i}`;
        breakButtonsContainer.appendChild(button);
        breakButtonsContainer.appendChild(document.createElement('br'));
    }

    document.querySelector('.listen-btn').addEventListener('click', function() {
        const baseUrl = window.location.origin;
        const path = '/result';
        const url = `${baseUrl}${path}?session=${session}`;
        window.location.href = url;
    });
});

// Function to send the POST request
function sendBreakRequest(session, streamIndex) {
    fetch(`/break?session=${session}&stream=${streamIndex}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'session': session, 'stream': streamIndex })
    })
    .then(response => console.log(response));
}