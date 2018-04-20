window.addEventListener('DOMContentLoaded', () => {

	let popupBtn 			= document.getElementById('popup-btn'),
					name 							= document.getElementById('name'),
					age 								= document.getElementById('age'),
					sex 								= document.getElementsByName('sex'),
					select 					= document.getElementById('select'),
					bio 								= document.getElementById('bio'),
					ready 						= document.getElementById('ready'),
					mainCards 		= document.querySelector('.main-cards'),
				 overlay 				= document.querySelector('.overlay'),
				 main 							= document.querySelector('.main'),
				 custom 					= document.querySelector('.custom'),
				 // preview				 = document.querySelector('.preview'),
				 prevBtn 				= document.querySelector('.prev'),
				 customInfo 	= document.getElementsByClassName('custom-info')[0],
				 customChar 	= document.getElementsByClassName('custom-char')[0];
				 customStyle = document.getElementsByClassName('custom-style')[0];

custom.removeChild(customStyle);

	popupBtn.addEventListener('click', () => {
		
		let customStyle_1 = document.createElement('div'),
					 customStyleEasy = document.createElement('div'),
					 prev = document.createElement('div'),
					 leftArrow = document.createElement('i'),
					 preview = document.createElement('div'),
					 next = document.createElement('div'),
					 rightArrow = document.createElement('i'),
					 img = document.createElement('img');

					 customStyle_1.classList.add('custom-style');
					 customStyleEasy.classList.add('custom-style-easy');
					 prev.classList.add('prev');
					 leftArrow.classList.add('flaticon-left-arrow');
					 preview.classList.add('preview');
					 next.classList.add('next');
					 rightArrow.classList.add('flaticon-right-arrow');

			custom.appendChild(customStyle_1);
			customStyle_1.appendChild(customStyleEasy);
			customStyleEasy.appendChild(prev);
			prev.appendChild(leftArrow);
			customStyleEasy.appendChild(preview);
			customStyleEasy.appendChild(next);
			next.appendChild(rightArrow);

			preview.style.background = 'none';
			preview.style.textAlign = 'center';

			for(let i = 0; i < 5; i++) {
				img.style.width = 150 + 'px';
				preview.appendChild(img);

				img.setAttribute('src', '../img/man-' + (i+1) + '.png' );
				
			}

		overlay.style.display = 'none';
		main.style.display = 'none';
		custom.style.display = 'flex';
		customInfo.style.display = 'block';
		customChar.style.display = 'block';
		customStyle_1.style.display = 'block';

	

	/*for(let i = 0; i < sex.length; i++) {
		if(sex[i].type == 'radio' && sex[i].checked) {
			if(sex[i].value == 'Мужской') {
				preview.style.background = 'none';
				preview.style.cssText = "background: url(../img/man-3.png);\
																													background-size: 60%;\
																													background-position: center;\
																													background-repeat: no-repeat;\
																													";																			
			}
		}
	}*/



	});

	ready.addEventListener('click', () => {

		let candidatChar = document.createElement('div'),
						candidateBlock = document.createElement('div'),
						photo = document.createElement('div'),
						result = document.createElement('div'),
						resultCount = document.createElement('div'),
						progress = document.createElement('div'),
						progressBar = document.createElement('div'),
						nameChar = document.createElement('div'),
						ageChar = document.createElement('div'),
						sexChar = document.createElement('div'),
						viewsChar = document.createElement('div'),
						bioChar = document.createElement('div');
						sexText = document.createElement('p');
						viewsText = document.createElement('p');
						bioText = document.createElement('p');

		candidatChar.classList.add('main-cards-item');
		candidateBlock.classList.add('candidate-block');
		photo.classList.add('photo');
		photo.classList.add('photo-3');
		result.classList.add('result');
		resultCount.classList.add('result-count');
		progress.classList.add('progress');
		progressBar.classList.add('progress-bar');
		progressBar.classList.add('progress-bar-3');
		nameChar.classList.add('name');
		ageChar.classList.add('age');
		sexChar.classList.add('sex');
		viewsChar.classList.add('views');
		bioChar.classList.add('bio');

		mainCards.appendChild(candidatChar);
		candidatChar.appendChild(candidateBlock);
		candidateBlock.appendChild(photo);
		candidateBlock.appendChild(result);
		result.appendChild(resultCount);
		result.appendChild(progress);
		progress.appendChild(progressBar);
		progress.appendChild(progressBar);
		candidatChar.appendChild(nameChar);
		candidatChar.appendChild(ageChar);
		candidatChar.appendChild(sexChar);
		candidatChar.appendChild(viewsChar);
		candidatChar.appendChild(bioChar);

		resultCount.innerHTML = '0%';
		progressBar.style.height = 0;

		function setName() {
			if(typeof(name.value) === 'string' && name.value !== null && name.value !== '') {
				nameChar.textContent = name.value;
			} else {
				alert('Введите корректно данные в поле ФИО');
			}
		};
		function setAge() {
			if(!isNaN(age.value) && age.value !== null && age.value !== '') {
				ageChar.textContent = `${age.value} лет`
			} else {
				alert('Введите корректно данные в поле Возраст');
			}
		};
		function setSex() {
			if(sex.value !== null && sex.value !== '') {
				for(let i = 0; i < sex.length; i++) {
					if(sex[i].type == 'radio' && sex[i].checked) {
						sexChar.textContent = sex[i].value;
						sexText.textContent = 'Пол :';
						candidatChar.insertBefore(sexText, sexChar);
					}
				}
			} 
		};
		function setViews() {
			if(select.value !== null && select.value !== '') {
				viewsChar.textContent = select.value;
				viewsText.textContent = 'Полит. взгляды :';
						candidatChar.insertBefore(viewsText, viewsChar);
			}
		};
		function setBio() {
			
				bioChar.textContent = bio.value;
				bioText.textContent = 'Биография';
				candidatChar.insertBefore(bioText, bioChar);
		};

		setName();
		setAge();
		setSex();
		setViews();
		setBio();

		main.style.display = 'block';
		custom.style.display = 'none';

	});

});

