window.onload = function() {
	let headerBtn 								= document.getElementById('open-btn'), // кнопка открыть магазин
					magazNameValue 			= document.getElementsByClassName('name-value'), // Имя магизна
					budgetValue 						= document.getElementsByClassName('budget-value'), // бюджет магазина
					goodsValue 							= document.getElementsByClassName('goods-value'), // типы товаров
					itemsValue 							= document.getElementsByClassName('items-value'), // наименование товаров
					employersValue			 = document.getElementsByClassName('employers-value'), // сотрудники
					discountValue 				= document.getElementsByClassName('discount-value'), // дисконтная система
					isopenValue 						= document.getElementsByClassName('isopen-value'), // открыто
					goodsItem 								= document.getElementsByClassName('goods-item'), // поля ввдов категории товаров
					formBtn 										= document.getElementsByTagName('button'), // кнопкки формы
					chooseItems						 = document.querySelector('.choose-item'), // Продукты
					timeValue 								= document.querySelector('.time-value'), // время
					countBudgetValue 	= document.querySelector('.count-budget-value'), // расчет дневного бюджета
					hireEmployersItem = document.querySelectorAll('.hire-employers-item'), // Имена сотрудников
					confirmBtn 							= formBtn[1], // кнопка утвердить
					calculateBtn 					= formBtn[2], // кнопка рассчитать
					hireBtn 										= formBtn[3],	// кнопка нанять
					budget, 
					magazineName,
					typeProduct, 
					employees,				
					shopItems,
					discounter;
					
					
// запрашиваем бюджет и наименование магазина
headerBtn.addEventListener('click', () => {
	// Наименование магазина
		magazineName = prompt('Наименование магазина :', '').toUpperCase();
 	magazNameValue[0].textContent = magazineName;
 //  Бюджет магазина
		budget = +prompt('Ваш бюджет?', '');
		while (isNaN(budget) || budget == '' || budget === null) {
			budget = +prompt('Ваш бюджет?', '');
			}
			budgetValue[0].textContent = budget;
	// Дисконт скидки 
			discounter = confirm('Есть скидки сегодня?');
			if(discounter) {
				discountValue[0].style.backgroundColor = 'green';
				discountValue[0].textContent = 'Есть сегодня скидки';
			}	else {
						discountValue[0].style.backgroundColor = 'red';
						discountValue[0].textContent = 'Сегодня скидок нет';
					};
});

// Поле вывода типов товара
confirmBtn.addEventListener('click', () => {			
	for(let i = 0; i < goodsItem.length; i++) {
		let a = goodsItem[i].value;
				if (isNaN(a) && (typeof(a)) !== null && a.length < 50) {
		 	 		mainList.typeProduct[i] = a;
							goodsValue[0].textContent = mainList.typeProduct;
		 	 	}
		 	 	else {
		 	 		alert('заполните товар корректно ёпрст');
		 	 		i--;
		 	 	}
				}
});

// Наименование товаров
chooseItems.addEventListener('change', () => {
	let item = chooseItems.value;
		if(isNaN(item) && (typeof(item)) !== null) {
			mainList.shopItems = item;
			mainList.shopItems = item.split(',');
			mainList.shopItems.sort();
			itemsValue[0].textContent = mainList.shopItems;
		}
});

// имена сотрудников
hireBtn.addEventListener('click', () => {
	for(let i = 0; i < hireEmployersItem.length; i++) {
		console.log(hireEmployersItem[i]);
		let b = hireEmployersItem[i].value;
		if(isNaN(b) && (typeof(b)) !== null) {
			mainList.employees[i] = b;
			employersValue[0].textContent += mainList.employees[i] + ', ';
		}	else {
			console.log('ERROR');
		}
	}
});

// Расчет времени
timeValue.addEventListener('change', () => {
	let time = timeValue.value;
		if (time < 0) {
			mainList.open = false;
		}
		else if (time > 8 && time < 20) {
			mainList.open = true;
		}
		else if(time < 24 && time > 20) {
			mainList.open = false;
		}
		else {
			mainList.open = false;
		}
		if(mainList.open == true) {
			mainList.open = 'Магазин Открыт';
			isopenValue[0].textContent = mainList.open;
			isopenValue[0].style.backgroundColor = 'green';

		} else {
			mainList.open = 'Магазин Закрыт';
			isopenValue[0].textContent = mainList.open;
			isopenValue[0].style.backgroundColor = 'red';
		}
});

// Расчет дневного бюджета
calculateBtn.addEventListener('click', () => {
	countBudgetValue.value = budgetValue[0].textContent / 30;
});



 

// Главная инфа
 	 const mainList = {
 		budget	 : budget,
 		magazineName	 : magazineName,
 		typeProduct : [],
 		employees	 : {},
 		open : true,
 		shopItems: [],
 		discont : true
 	};
};