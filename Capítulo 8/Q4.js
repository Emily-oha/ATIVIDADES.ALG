export const soma=(a,b)=>a+b;
export const sub=(a,b)=>a-b;
export const mult=(a,b)=>a*b;
export const div=(a,b)=>a/b;
export const exp=(a,b)=>a**b;

app-esm.js

import { soma, exp } from './math-esm.js';
console.log(soma(5,2));
console.log(exp(3,3));
