
// let arr_ = [];
/*let count = prompt('сколько массивов запилим БРО?', '');
for(let i = 0; i <= count; i++) {
let end	= arr_ + i;
	arr.push(end);
	
}
console.log(arr);*/
/*let a = [];*/
/*let b = [];*/
let arr = [];
let arr_1 = [];
let count = prompt('сколько массивов запилим БРО?', '');
for(let i = 0; i < count; i++) {
 arr.push(arr_1);	
}

for(let i = 0; i < arr.length; i++) {
		arr[i].push(Math.floor(Math.random() * (10 - 1) + 1));
		arr[i].join(';');
}



console.log(arr);
console.log(arr.length);

// arr[i].push(Math.floor(Math.random() * (10 - 1) + 1));