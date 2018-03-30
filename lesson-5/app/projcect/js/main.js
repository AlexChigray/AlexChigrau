window.onload = function() {
	let headerBtn = document.getElementById('open-btn'), // кнопка открыть магазин
					magazNameValue = document.getElementsByClassName('name-value'), // Имя магизна
					budgetValue = document.getElementsByClassName('budget-value'), // бюджет магазина
					goodsValue = document.getElementsByClassName('goods-value'), // типы товаров
					itemsValue = document.getElementsByClassName('items-value'), // наименование товаров
					employersValue = document.getElementsByClassName('employers-value'), // сотрудники
					discountValue = document.getElementsByClassName('discount-value'), // дисконтная система
					isopenValue = document.getElementsByClassName('isopen-value'), // открыто
					goodsItem = document.getElementsByClassName('goods-item'), // поля ввдов категории товаров
					formBtn = document.getElementsByTagName('button'), // кнопкки формы
					chooseItems = document.querySelector('.choose-item'), // Продукты
					timeValue = document.querySelector('.time-value'), // время
					countBudgetValue = document.querySelector('.count-budget-value'), // расчет дневного бюджета
					hireEmployersItem = document.querySelectorAll('.hire-employers-item'); // Имена сотрудников

					// поля ввдов категории товаров
					for(let i = 0; i < goodsItem.length; i++) {
						console.log(goodsItem[i]);
					}
					// имена сотрудников
					for(let i = 0; i < hireEmployersItem.length; i++) {
						console.log(hireEmployersItem[i]);
					}
					let confirm = formBtn[1], // кнопка утвердить
									calculate = formBtn[2], // кнопка рассчитать
									hire = formBtn[3];	// кнопка нанять
					

	console.log(headerBtn);
	console.log(magazNameValue[0]);
	console.log(budgetValue[0]);
	console.log(goodsValue[0]);
	console.log(itemsValue[0]);
	console.log(employersValue[0]);
	console.log(discountValue[0]);
	console.log(isopenValue[0]);
	console.log(confirm, calculate, hire);
	console.log(chooseItems);
	console.log(timeValue);
	console.log(countBudgetValue);

};