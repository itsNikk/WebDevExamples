const coloredText = document.getElementById('coloredText');

coloredText.addEventListener('mouseenter', function () {
    coloredText.style.color = 'red';
});

coloredText.addEventListener('mouseleave', function () {
    coloredText.style.color = 'black';
});