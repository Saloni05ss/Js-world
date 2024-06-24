const button = document.getElementById('colorButton');
button.addEventListener('click', function() {
    button.style.backgroundColor = 'yellow';
    button.style.borderColor = 'maroon';
    button.style.color = 'black';
    button.style.boxShadow = '0 0 50px yellow';
});
