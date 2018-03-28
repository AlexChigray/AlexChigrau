let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let out = document.getElementsByTagName('p');
let date = new Date();
// перебираем p - элемнты 
for (let i = 0; i < out.length; i++) {
	console.log(out[i]);
	console.log(date.getDay());
	// текущий день недели
if ((i + 1) == date.getDay()) {
	out[i].style.fontStyle = 'italic';
	out[i].style.fontSize = 24 + 'px';
}

// сб и вс - болд
	if (i > 4) {
		out[i].style.fontWeight = 'bold';
		out[i].style.fontSize = 24 + 'px';
	}
	// выводим дни недели на страницу через р-элементы
	for (let k = 0; k < week.length; k++) {
		// каждый день недели на новом р-элементе.
		if (i == k) {
			out[i].innerHTML = week[k];
		}		
	}
}
//  2 задача
// массив с числами
let arr = [];
arr.push('12222');
arr.push('3245');
arr.push('378566');
arr.push('708976');
arr.push('0123443');
arr.push('7435');
arr.push('909011');
// перебираем сам массив
for (let m = 0; m < arr.length; m++) {
	let a = arr[m];
	// перебираем сами цифры числах
	for (let n = 0; n < a.length; n++) {
		// фильтр на 1 цифру в числе
		if (a[0] == 3 || a[0] == 7) {
		console.log(a);
		}
	}
}
