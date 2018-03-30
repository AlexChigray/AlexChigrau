window.onload = function() {
	let navBtn = document.getElementsByClassName('menu-item'),
					column = document.getElementsByClassName('column'),
					menu = document.querySelector('.menu'),
					li = document.createElement('li'),
					title = document.getElementById('title'),
					prompt_2 = document.getElementById('prompt'),
					advertising = document.querySelector('.adv'),
					newTitle = document.createElement('div');
	navBtn[1].textContent = 'Второй пункт';
	navBtn[2].textContent = 'Третий пункт';
	navBtn[3].textContent = 'Четвертый пункт';
	// 
	li.classList.add('menu-item');
	li.textContent = 'Пятый пункт';
	menu.appendChild(li);
	// 
	document.body.style.background = 'URL(img/apple_true.jpg)';
	// 
	newTitle.classList.add('title');
	newTitle.textContent = 'Мы продаем только подлинную технику Apple'
	column[1].replaceChild(newTitle, title);
	// 
	column[1].removeChild(advertising);
	// 
	let ask = prompt('Как вы относитесь к технике Apple?', '');
	prompt_2.textContent = 'Наши клиент считают, что техника Apple' + ' : ' + ask;
	console.log(title);
	console.log(advertising);
	console.log(column[1]);
	console.log(newTitle);
	console.log(menu);
	console.log(li);
};