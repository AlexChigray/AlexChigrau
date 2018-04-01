let str = 'урок-3-был слишком легким';
let target = '-';
str = str.split('');
str[0] = str[0].toUpperCase();

for(let i = 0; i < str.length; i++) {
	if (str[i] == target) {
		console.log(i);
		str[i] = ' ';
	}
	str.splice(16);
	str.push('oo');
}
str = str.join('');

alert(str);
let result;
arr = [20, 31, 1, 'Человек', 2, 3];
for(let i = 0; i < arr.length; i++) {
	
}
		result_1 = Math.sqrt((arr[0] * arr[0] * arr[0]));// 89
		result_2 = Math.sqrt((arr[1] * arr[1] * arr[1]));//172
		result_3 = Math.sqrt((arr[2] * arr[2] * arr[2]));//3
		// result_4 = Math.sqrt((arr[3] * arr[3] * arr[3]));
		result_5 = Math.sqrt((arr[4] * arr[4] * arr[4]));//5

result = result_1 + result_2 + result_3 + result_5;

console.log(result);







