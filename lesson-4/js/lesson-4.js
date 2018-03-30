let budget, 
				magazineName, 
				mainList,
				typeProduct, 
				employees,
				hours = new Date(),
				time = hours.getHours(),
				price,
				shopItems,
				discounter;
			
 // запрашиваем бюджет и наименование магазина
 /*function start() {
 	budget = +prompt('Ваш бюджет?', '');
 	while (isNaN(budget) || budget == '' || budget === null) {
 		budget = +prompt('Ваш бюджет?', '');
 	}
 	magazineName = prompt('Наименование магазина :', '').toUpperCase();
 }
 // start();

// подсчет бюджет в день*/



 

// Главная инфа
 	 mainList = {
 		budget	 : budget,
 		magazineName	 : magazineName,
 		typeProduct : [],
 		employees	 : {},
 		open : true,
 		shopItems: [],
 		discont : true,
 		// Назване магазина
 		titleMagazine : function titleMagazine() {
 			magazineName = prompt('Наименование магазина :', '').toUpperCase();
 			mainList.magazineName = magazineName;
 			console.log(mainList.magazineName);
 		},
 		// Дневной бюджет
 		dayBudget: function dayBudget() {
 			budget = +prompt('Ваш бюджет?', '');
 			while (isNaN(budget) || budget == '' || budget === null) {
 				budget = +prompt('Ваш бюджет?', '');
 			}
		 	let dayBudget =  Math.round(budget / 30);
		 	mainList.budget = dayBudget;
		 	console.log(mainList.budget);
		 },
		 // Добавляем тип товаров
 		choosGoods: function choosGoods() {
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
			 	console.log(mainList.typeProduct);
			 },
			// Добавляем сотрудников
			employeesList: function employeesList() {
		 	for (let i = 0; i < 4; i++) {
		 	employees = prompt('Имя сотрудника :', '');
		 	while((typeof(employees)) !== 'string' || (typeof(employees)) === null || employees == '') {
		 		employees = prompt('Имя сотрудника :', '');
		 	}
		 	mainList.employees[i] = (i + 1) + ' - ' + employees; 
		 	}
		 	console.log(mainList.employees);
		 },
		 // Указываем время работы
		 timeWork: function timeWork() {
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
			 console.log(mainList.open);
			},

			// Добавляем товары
			choosShopItems: function shopItems() {
				let item = prompt('какие товары доавбить?', '');
				while (!isNaN(item) || (typeof(item)) === null || item == '') {
					item = prompt('какие товары доавбить?', '');
				}
				mainList.shopItems = item;
				mainList.shopItems = item.split(',');
				mainList.shopItems.push(prompt('какие товары ещё добавить?', ''));
				mainList.shopItems.sort();
				let buyItem = mainList.shopItems;
				mainList.shopItems.forEach(function(item, i, buyItem) {
					alert('у нас можно купить  товары : ' + (i + 1) + ' : ' + item);
				})
				console.log(mainList.shopItems);
			},
			discounter: function priceCount(price) {
		 	discounter = confirm('Есть сегодня скидки?');
		 	if (discounter) {
		 		mainList.discont = true;
		 		return	price * 0.8;
		 	}
		 	else {
		 		mainList.discont = false;
		 		return price;
		 	}
		 	console.log(mainList.discont);
		 }
 };

 	console.log('магазин включает в себя : '); 
 	for(let key in mainList) {
 		console.log(key + ';');
 	}

 


	


	
// подсчет скидкок

 // priceCount(price);

// список сотрудников
 

// прокручиваем товары


// Проверка времени

 	

//  alert(mainList.budget);
//  alert(mainList.open);


// // сводка инфы о магазе
console.log(mainList);