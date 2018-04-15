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