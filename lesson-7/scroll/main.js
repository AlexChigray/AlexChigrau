let btn = document.querySelector('.click');
let box = document.querySelector('.box');
let a = 0;
btn.addEventListener('click', () => {
	function start() {
	
			a = a + 4;
	
		box.scrollTo(0, a);
	};
	setInterval(start);
	
});
