window.addEventListener('DOMContentLoaded', () => {

	let popupBtn = document.getElementById('popup-btn'),
					name = document.getElementById('name'),
					age = document.getElementById('age'),
					sex = document.getElementsByClassName('sex'),
					select = document.getElementById('select'),
					bio = document.getElementById('bio'),
					ready = document.getElementById('ready');
					let overlay = document.querySelector('.overlay');
		let main = document.querySelector('.main');
		let custom = document.querySelector('.custom');
		let customInfo = document.getElementsByClassName('custom-info')[0];
		let customChar = document.getElementsByClassName('custom-char')[0];
		let customStyle = document.getElementsByClassName('custom-style')[0];


	popupBtn.addEventListener('click', () => {
		

		overlay.style.display = 'none';
		main.style.display = 'none';
		custom.style.display = 'flex';
		customInfo.style.display = 'block';
		customChar.style.display = 'block';
		customStyle.style.display = 'block';
	});

	let candidate = {
		name: name,
		age: age,
		sex: sex,
		select: select,
		bio: bio,
		nameCandidate: function nameCandidate() {
			if(isNaN(name) && name !== '' && name !== null) {
			name = name.value;
			candidate.name = name;
			} else {
						console.log('перепишете name');
			}
			console.log(candidate.name);
		},
		ageCandidate: function ageCandidate() {
			if(typeof(age) !== 'string' && age !== '' && age !== null) {
			age = age.value;
			candidate.age = age;
			} else {
				console.log('перепишете age');
			}
			console.log(candidate.age);
		}
	};
	candidate.nameCandidate();
	candidate.ageCandidate();

	console.log(candidate);


	ready.addEventListener('click', () => {
		console.log(candidate);
		console.log(name);
	});

});

