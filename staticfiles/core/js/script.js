window.onload = function() {
    var btn1 = document.getElementById('dropdown1');
    var btn2 = document.getElementById('dropdown2');

    if (btn1 && btn2) {
        var maxWidth = Math.max(btn1.offsetWidth, btn2.offsetWidth) + 10;

        btn1.style.width = maxWidth + 'px';
        btn2.style.width = maxWidth + 'px';
    }
};

// Function to change dropdown text
function changeDropdownText(dropdownId, newText) {
    document.getElementById(dropdownId).innerText = newText;
}

// Get all dropdown links for the pair dropdown
var pairLinks = document.getElementById('pair-dropdown').getElementsByTagName('a');
for (var i = 0; i < pairLinks.length; i++) {
pairLinks[i].addEventListener('click', function(e) {
  e.preventDefault(); // Prevent the default link action
  var newText = 'Trading Pair: ' + this.innerText;
  changeDropdownText('dropdown1', newText);
});
}

// Get all dropdown links for the stream dropdown
var streamLinks = document.getElementById('stream-dropdown').getElementsByTagName('a');
for (var i = 0; i < streamLinks.length; i++) {
streamLinks[i].addEventListener('click', function(e) {
  e.preventDefault(); // Prevent the default link action
  var newText = 'Number of Streams: ' + this.innerText;
  changeDropdownText('dropdown2', newText);
});
}