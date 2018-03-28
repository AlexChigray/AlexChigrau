let budget, 
				magazineName, 
				typeProduct, 
				employees,
				hours = new Date(),
				time = hours.getHours(),
				price,
				discounter;
			
 // запрашиваем бюджет и наименование магазина
 function start() {
 	budget = +prompt('Ваш бюджет?', '');
 	while (isNaN(budget) || budget == '' || budget === null) {
 		budget = +prompt('Ваш бюджет?', '');
 	}
 	magazineName = prompt('Наименование магазина :', '').toUpperCase();
 }
 start();

// подсчет бюджет в день
 function count() {
 	return Math.round(budget / 30);
 }

 

// Главная инфа
 let mainList = {
 	'budget' : count(),
 	'magazineName' : magazineName,
 		typeProduct : [],
 	'employees' : {},
 		open: true,
 		discont: true
 };
	
// подсчет скидкок
function priceCount(price) {
 	discounter = confirm('Есть сегодня скидки?');
 	if (discounter) {
 		mainList.discont = true;
 		return	price * 0.8;
 	}
 	else {
 		mainList.discont = false;
 		return price;
 	}
 }
 priceCount(price);

// список сотрудников
 function employeesList() {
 	for (let i = 0; i < 4; i++) {
 	employees = prompt('Имя сотрудника :', '');
 	while((typeof(employees)) !== 'string' || (typeof(employees)) === null || employees == '') {
 		employees = prompt('Имя сотрудника :', '');
 	}
 	mainList.employees[i] = (i + 1) + ' - ' + employees; 
 	}
 }
 employeesList();

// прокручиваем товары
function choosGoods() {
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
 }
 choosGoods();

// Проверка времени
function timeStart(time) {
 if (time < 0) {
 	console.log('иди проспись');
 }
 else if (time > 8 && time < 20) {
 	console.log('Работаем, солнеце ещё высоко!');
 	// выводим инфу о времени.
 	mainList.open = 'Магазин открыт';
 }
 else if(time < 24 && time > 20) {
 	console.log('уже слоишком поздно');
 	mainList.open = 'Магазин закрыт';
 }
 else 
 	console.log('24 часа в сутках.'); 

 console.log(time);
}
timeStart(time);
 	

 alert(mainList.budget);
 alert(mainList.open);

// сводка инфы о магазе
console.log(mainList);