var x = window.document.getElementById('area');
x.addEventListener('click', clicker)
x.addEventListener('mouseenter', mouseinside)
x.addEventListener('mouseout', mouseoutside)

function clicker() {
    x.innerText = 'Well done!'
    x.style.background = 'red'
}

function mouseinside() {
    x.innerText = 'Welcome!'
    x.style.borderRadius = '10px'
}

function mouseoutside() {
    x.innerText = 'Goodbye!'
    x.style.background = 'green'
}