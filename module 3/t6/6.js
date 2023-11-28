const button = document.querySelector('button');

function press() {
    alert('button is clicked');
    button.addEventListener('click', press);
}
button.addEventListener('click',press);
