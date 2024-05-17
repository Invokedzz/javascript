var a = document.getElementById('btnn');
a.addEventListener('click', press);


function press() {
    var n = document.getElementById('txtbr').value;
    var x = document.getElementById('res');
    if (n == 'Brazil') {
        x.innerHTML = `Congrats! You are from Brazil!`;
    }
     else {
         x.innerHTML = `You are a foreigner!`;
    }
}