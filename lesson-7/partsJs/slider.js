function slider() {
	let sliderItem = document.getElementsByClassName('slider-item'),
												prev 						= document.querySelector('.prev'),
												next 						= document.querySelector('.next'),
												slideIndex = 1,
												dotsWrap 		= document.querySelector('.slider-dots'),
												dots 						= document.getElementsByClassName('dot');

												showSlides(slideIndex);

												function showSlides(n) {
													if(n > sliderItem.length) {
														slideIndex = 1;
													}
													if(n < 1) {
														slideIndex = sliderItem.length;
													}
													for(let i = 0; i < sliderItem.length; i++) {
														sliderItem[i].style.display = 'none';
													}
													for(let i = 0; i < dots.length; i++) {
														dots[i].classList.remove('dot-active');
													}
													sliderItem[slideIndex - 1].style.display = 'block';
													dots[slideIndex - 1].classList.add('dot-active');
												}

												function plusSlides(n) {
													showSlides(slideIndex += n);
												}

												function currentSLide(n) {
													showSlides(slideIndex = n);
												}

												prev.addEventListener('click', () => {
													plusSlides(-1);
												});
												next.addEventListener('click', () => {
													plusSlides(1);
												});

												dotsWrap.addEventListener('click', (event) => {
													for(let i = 0; i < dots.length + 1; i++) {
														if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
															currentSLide(i);
														}
													}
												});
}
module.exports = slider;