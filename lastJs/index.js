let assert = require('chai').assert;
// Функция sum должна возвращать тип данных true. Проверить её на это.

function sum(a, b) {
	return a + b > 10;
}
sum(2,2);



describe('sum', () => {
	it('должно возратить true', () => {
		assert.equal(sum(12, 5), true);
	});
});

// Переменная num должна быть равна 5. Проверить на соответствие.

let arr = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
let num = arr[1][1];

describe('num', () => {
	it('переменная num = 5', () => {
		assert.equal(num, 5);
	});
});

// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.

let each = function(startArr, f){return f(startArr)};
let arr_2 = [64, 49, 36, 25, 16];
let myFunc = function(a){
	let newArr = [];
	for (let i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}
console.log(each(arr_2, myFunc));

describe('each', () => {
	it('возращает тип данных Object по результату функции Each', () => {
		assert.typeOf(each, 'object');
	});
	it('Длинна значения Each', () => {
		assert.lengthOf(each, 2);
	});
});
