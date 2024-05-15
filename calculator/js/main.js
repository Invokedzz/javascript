
var bt = document.getElementById('btn');
bt.addEventListener('click', add);
function add() {
var tn1 = document.getElementById('txtn1');
var tn2 = document.getElementById('txtn2');
var res = document.getElementById('res');
var n1 = Number(tn1.value);
var n2 = Number(tn2.value);
var x = n1 + n2;
res.innerHTML = `The addiction between ${n1} and ${n2} is equal to ${x}`;
}

var br = document.getElementById('btnn');
br.addEventListener('click', sub);

function sub() {
var tn3 = document.getElementById('txtn3');
var tn4 = document.getElementById('txtn4');
var result = document.getElementById('ressub');
var n3 = Number(tn3.value);
var n4 = Number(tn4.value);
var y = n3 - n4;
ressub.innerHTML = `The subtraction between ${n3} and ${n4} is equal to ${y}`;
}

var bs = document.getElementById('btnnn');
bs.addEventListener('click', mult);

function mult() {
var tn5 = document.getElementById('txtn5');
var tn6 = document.getElementById('txtn6');
var multiplication = document.getElementById('resmult');
var n5 = Number(tn5.value);
var n6 = Number(tn6.value);
var z = n5 * n6;
resmult.innerHTML = `The multiplication between ${n5} and ${n6} is equal to ${z}`;
}

var bu = document.getElementById('btnnnn');
bu.addEventListener('click', div);
function div() {
var tn7 = document.getElementById('txtn7');
var tn8 = document.getElementById('txtn8');
var division = document.getElementById('resdiv');
var n7 = Number(tn7.value);
var n8 = Number(tn8.value);
var a = n7 / n8 || n8 / n7;
resdiv.innerHTML = `The result between ${n7} and ${n8} is equal to ${a}`;
}