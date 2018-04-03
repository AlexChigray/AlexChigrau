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
});