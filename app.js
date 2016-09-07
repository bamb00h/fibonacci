// http://www.nnn.ed.nico/contents/guides/99
'use strict';
const memo = new Map();
memo.set(0, 0)
memo.set(1, 1)
function fib(n){
	if (memo.has(n)){
		return memo.get(n);
	} 
	const value = fib(n-1) + fib(n-2);
	memo.set(n, value);
	return value;
}

const length = 1000;
for (let i = 0; i < length; i++){
	console.log( fib(i));
}
// time node app.js
/**
 * real    0m3.633s
 * user    0m3.618s
 * sys     0m0.000s
 * 足し算がされる回数
 */