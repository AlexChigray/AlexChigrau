class Options {
		constructor(height, width, bg, fontSize, textAlign) {
			this.height 			= height;
			this.width 				= width;
			this.bg 							= bg;
			this.fontSize 	= fontSize;
			this.textAlign = textAlign;
		}
		// Создаем элемент
		createDiv() {
			let div 	= document.createElement('div'),
							text = prompt('text', '');
			div.textContent = text;
			document.body.appendChild(div);
			div.style.cssText = `height: ${this.height}px;
																								width: ${this.width}px;
																								background: ${this.bg};
																								font-size: ${this.fontSize}px;
																								text-align: ${this.textAlign}`;																	
		} 
}
// Задаем параметры
const element  = new Options(+prompt('Высота',''),+prompt('Щирина',''), prompt('Фон',''), +prompt('Размер шрифта',''), prompt('TextALign',''));
element.createDiv();
