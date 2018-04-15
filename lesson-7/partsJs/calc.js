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