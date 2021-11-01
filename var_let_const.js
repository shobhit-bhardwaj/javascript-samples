//	var is use for function Scoping
//	let is use for Block Scoping

function test() {
	{
		var x = 25;
		let y = 30;
		console.log('var x inside block - ', x);
		console.log('var y inside block - ', y);
	}

	console.log('var x outside block - ', x);
	//	In case of y (let), it will give compilation error.
	//console.log('var y outside block - ', y);
}

test();


//	let is use for Block Scoping
let a = 10;

if (true) {
	let a = 15;
	console.log('a in if condition - ', a);
}
console.log('a outside loop', a);


//	const is use for final constant
const b = 10;
if (true) {
	let b = 15;
	console.log('b in if condition - ', b);
}
console.log('b outside loop', a);

const arr = [1, 2, 3];
arr.push(4);
console.log('Array arr - ', arr);
