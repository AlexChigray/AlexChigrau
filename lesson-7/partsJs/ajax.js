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