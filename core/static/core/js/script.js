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

   tradingPairsDropdown.querySelectorAll('a').forEach(item => {
       item.addEventListener('click', function(event) {
           console.log('Selected Trading Pair:', event.target.textContent);
           document.getElementById('dropdown1').textContent = "Trading Pair: " + event.target.textContent;
       });
   });

   numberOfStreamsDropdown.querySelectorAll('a').forEach(item => {
       item.addEventListener('click', function(event) {
           console.log('Selected Number of Streams:', event.target.textContent);
           document.getElementById('dropdown2').textContent = "Number of Streams: " + event.target.textContent;
       });
   });
});