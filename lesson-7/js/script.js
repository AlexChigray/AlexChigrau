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
				let deadline = '2018-04-05';
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

										if (t.total <= 0) {
											clearInterval(timeInt);
										};
									};


									updateClock();
									let timeInt = setInterval(updateClock, 1000);
				};

				setClock('timer', deadline);

});