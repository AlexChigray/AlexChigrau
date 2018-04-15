(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', () => {

let tab = require('../partsJs/tab.js'),
					slider = require('../partsJs/slider.js'),
					ajax = require('../partsJs/ajax.js'),
					calc = require('../partsJs/calc.js'),
					timer = require('../partsJs/timer.js');
					tab();
					timer();
					slider();
					ajax();
					calc();

});
},{"../partsJs/ajax.js":2,"../partsJs/calc.js":3,"../partsJs/slider.js":4,"../partsJs/tab.js":5,"../partsJs/timer.js":6}],2:[function(require,module,exports){
function ajax() {
	let message = new Object();
									message.loading = 'Loading ...',
									message.success = 'Good, please wait, I call you!',
									message.fail = 'Error, please repeat';

					let form = document.querySelector('.main-form'),
									input = form.getElementsByTagName('input'),
									statusMessage = document.createElement('div'),
									form_1 = document.getElementById('form');

									form.addEventListener('submit', function(event) {
										event.preventDefault();
										form.appendChild(statusMessage);

										// AJAX
										let request = new XMLHttpRequest();
										request.open("POST", 'server.php');
										request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
										let formData = new FormData(form);
										request.send(formData);
										request.onreadystatechange = function() {
											if(request.readyState < 4) {
												statusMessage.innerHTML = message.loading;
											} else if(request.readyState === 4) {
														if(request.status == 200 && request.status < 300) {
												statusMessage.innerHTML = message.success;
												}
											} else {
												statusMessage.innerHTML = message.fail;
											}
										};
										for(let i = 0; i < input.length; i++) {
											input[i].value = '';
										}
								});	

								form_1.addEventListener('submit', function(event) {
										event.preventDefault();
										form_1.appendChild(statusMessage);

										// AJAX
										let request = new XMLHttpRequest();
										request.open("POST", 'server.php');
										request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
										let formData = new FormData(form);
										request.send(formData);
										request.onreadystatechange = function() {
											if(request.readyState < 4) {
												statusMessage.innerHTML = message.loading;
											} else if(request.readyState === 4) {
														if(request.status == 200 && request.status < 300) {
												statusMessage.innerHTML = message.success;
												}
											} else {
												statusMessage.innerHTML = message.fail;
											}
										};
										for(let i = 0; i < input.length; i++) {
											input[i].value = '';
										}
								});	
}
module.exports = ajax;
},{}],3:[function(require,module,exports){
function calc() {
	let persons = document.getElementsByClassName('counter-block-input')[0],
								 				days    = document.getElementsByClassName('counter-block-input')[1],
								 				place   = document.getElementById('select'),
								 				totalValue  = document.getElementById('total'),
								 				personsSum = 0,
								 				daysSum = 0,
								 				total = 0;

								 				totalValue.innerHTML = 0;
								 				persons.addEventListener('change', () => {
								 					personsSum = persons.value;
								 					daysSum = days.value;
								 					total = (personsSum * 200) + (daysSum * 650);
								 				
								 					if(days.value == '') {
								 						total = 0;
								 					} else {
								 						totalValue.innerHTML = total
								 					}
								 				});

								 					days.addEventListener('change', () => {
								 					daysSum = days.value;
								 					personsSum = persons.value;
								 					total = (personsSum * 200) + (daysSum * 650);
								 					
								 					if(persons.value == '') {
								 						total = 0;
								 					} else {
								 						totalValue.innerHTML = total
								 					}
								 					
								 				});
								 					place.addEventListener('change', () => {
								 						if(daysSum.value == '' || persons.value == '') {
								 							totalValue.innerHTML = 0;
								 						} else {
								 							let a = total;
								 							totalValue.innerHTML = a * place.options[place.selectedIndex].value;
								 						}
								 					});
}
module.exports = calc;
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
function tab() {
	let info 						= document.querySelector('.info-header'),
					tab 							= document.getElementsByClassName('info-header-tab'),
					tabContent = document.getElementsByClassName('info-tabcontent'); 

					function hideTabContent(a) {
					for(let i = 0; i < tabContent.length; i++) {
						tabContent[i].classList.remove('show');
						tabContent[i].classList.add('hide');
					}
				};

				hideTabContent(1);

				function showTabContent(b) {
					if(tabContent[b].classList.contains('hide')) {
						hideTabContent(0);
						tabContent[b].classList.remove('hide');
						tabContent[b].classList.add('show');
					}
				};

				showTabContent(0);

				info.addEventListener('click', (event) => {
					if(event.target.className == 'info-header-tab') {
						for (let i = 0; i < tab.length; i++) {
							if (event.target == tab[i]) {
								showTabContent(i);
								break;
							}
						}
					}
				});
}
module.exports = tab;
},{}],6:[function(require,module,exports){
function timer() {
		let deadline = '2018-04-10';
				function getTimerRemaining(endtime) {
					let t = Date.parse(endtime) - Date.parse(new Date()),
									seconds = Math.floor((t / 1000) % 60),
									minutes = Math.floor((t / 1000 / 60) % 60),
									hours 		= Math.floor((t / (100 * 60 * 60)) % 60);
									return {
										'total'  : t,
										'hours'  : hours,
										'minutes': minutes,
										'seconds': seconds
									};
				};

				function setClock(id, endtime) {
					let timer 		= document.getElementById(id),
									hours 		= timer.querySelector('.hours'),	
									minutes = timer.querySelector('.minutes'),
									seconds = timer.querySelector('.seconds');

									function updateClock() {
										let	t = getTimerRemaining(endtime);
										hours.innerHTML = t.hours;
										minutes.innerHTML = t.minutes;
										seconds.innerHTML = t.seconds;
									};


									updateClock();
									let timeInt = setInterval(updateClock, 1000);
				};

				setClock('timer', deadline);
}
module.exports = timer;
},{}]},{},[1]);
