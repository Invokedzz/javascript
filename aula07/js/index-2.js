var a = document.getElementById('btnn');
a.addEventListener('click', press);

function press() {
    var n = document.getElementById('txtbr');
    var x = document.getElementById('res');
    if (n != 'Brazil') {
        x.innerHTML = `You are a foreigner!`;
    } else {
        x.innerHTML = `Congrats! You"re from Brazil!`;
    }
}