let age 				= document.getElementById('age').value,
 			surname = prompt('Фамилие', ''),	
 			name  		= prompt('Имя', ''); 
function showUser(surname, name) {
									this.surname = surname;
									this.value 		= age;
									this.name 			= name;
         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
 
showUser(surname, name);
