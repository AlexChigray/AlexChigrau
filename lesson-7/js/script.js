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
});