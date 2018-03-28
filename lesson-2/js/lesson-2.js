let budget, 
				magazineName, 
				typeProduct, 
				employees,
				hours = new Date(),
				time = hours.getHours();

 budget = +prompt('Ваш бюджет?', '');
 magazineName = prompt('Наименование магазина :', '');
 

// Главная инфа
 let mainList = {
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
// прокручиваем товары
 for (let i = 0; i < 5; i++) {
 	 	let a = prompt('Какой тип товаров будем продавать?', '');
 	 	mainList.typeProduct[i] = a;
 	 	// проверка ввода
 	 	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !== '' && a.length < 50) {
 	 		console.log('OK');
 	 	}
 	 	else {
 	 		alert('заполните товар корректно ёпрст');
 	 		i--;
 	 	}
 	}
// Проверка времени
 if (time < 0) {
 	console.log('иди проспись');
 }
 else if (time > 8 && time < 20) {
 	console.log('Работаем, солнеце ещё высоко!');
 	// выводим инфу о времени.
 	mainList.open = 'Магазин открыт';
 }
 else if(time < 24 && time > 20) {
 	console.log('уже слоишком поздно')
 	mainList.open = 'Магазин закрыт';
 }
 else 
 	console.log('24 часа в сутках.')

 console.log(time);
 	

 alert(mainList['буджет на 1 день:D']);
 alert(mainList.open);
console.log(budget);
console.log(magazineName);
console.log(mainList);