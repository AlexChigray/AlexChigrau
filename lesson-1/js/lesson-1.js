var budget, magazineName, typeProduct, employees;
 budget = +prompt('Ваш бюджет?', '');
 magazineName = prompt('Наименование магазина :', '');
 

// Главная инфа
 var mainList = {
 	'буджет на 1 день:D' : Math.round(budget / 30) + ' Рублей',
 	'Наименование магазина' : magazineName,
 		typeProduct : [],
 	'сотрудники' : {
	 	name1: 'Alex',
	 	name2: 'Fedot',
	 	name3: 'Piter'
	 },
 		open: true
 }
	/*mainList.typeProduct[0] = prompt('Какой тип товаров будем продавать?', '');
 mainList.typeProduct[1] = prompt('Какой тип товаров будем продавать?', '');
 mainList.typeProduct[2] = prompt('Какой тип товаров будем продавать?', '');
*/
 for (let i = 0; i < 5; i++) {
 	let a = prompt('Какой тип товаров будем продавать?', '');
 	mainList.typeProduct[i] = a;
 }

 let i = 0;
 // Цикл с предусловием
 /*while (i < 5) {
 	let a = prompt('Какой тип товаров будем продавать?', '');
 	mainList.typeProduct[i] = a;
 	i++;
 }*/

 // цикл с постусловием
 /*do {
 	let a = prompt('Какой тип товаров будем продавать?', '');
 	mainList.typeProduct[i] = a;
 	i++
 }
 while (i < 4) {
 	let a = prompt('Какой тип товаров будем продавать?', '');
 	mainList.typeProduct[i] = a;
 }
*/
 alert(mainList['буджет на 1 день:D']);
console.log(budget);
console.log(magazineName);
console.log(mainList);