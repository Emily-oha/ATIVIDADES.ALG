function soma(a,b){return a+b;}
function sub(a,b){return a-b;}
function mult(a,b){return a*b;}
function div(a,b){return a/b;}
function exp(a,b){return a**b;}

module.exports = { soma, sub, mult, div, exp };

app-cjs.js

const m = require('./math-cjs');
console.log(m.soma(2,3));
console.log(m.exp(2,4));
