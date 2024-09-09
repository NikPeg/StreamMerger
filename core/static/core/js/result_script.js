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
    // Event listener for Listen button
    document.querySelector('.listen-btn').addEventListener('click', function() {
        const baseUrl = window.location.origin;
        const url = `${baseUrl}`;
        window.location.href = url;
    });
});