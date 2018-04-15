window.addEventListener('DOMContentLoaded', () => {

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

				// Timer
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
// Modal
				let more = document.querySelector('.more'),
								overlay = document.querySelector('.overlay'),
								close = document.querySelector('.popup-close'),
								popup = document.querySelector('.popup'),
								decritptionBtn = document.getElementsByClassName('description-btn');

								more.addEventListener('click', function() {
									this.classList.add('more-splash');
									overlay.classList.remove('fade');
									overlay.classList.add('rotate');
									overlay.style.display = 'block';
									document.body.style.overflow = 'hidden';
								});
								close.addEventListener('click', function() {
									overlay.style.display = '';
									more.classList.remove('more-splash');
									document.body.style.overflow = '';
								});

								for (let i = 0; i < decritptionBtn.length; i++) {
										decritptionBtn[i].addEventListener('click', function() {
										this.classList.add('more-splash');
										overlay.style.display = 'block';
										document.body.style.overflow = 'hidden';
									});
								};
	// form
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
								// slider
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

							// calc
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

});