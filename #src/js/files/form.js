

function forms () {
	const allforms = document.querySelectorAll('form'),
			allInputs = document.querySelectorAll('input'),
			statusPost = document.createElement('div'),
			informMessageArray = {
			loading: 'загрузка...',
			success: "Мы свяжемся с Вами в ближайшее время",
			failure: 'Что-то пошло не так'
	  };

	function changeInputValue(input){

	let saveValueInput = '';
	
	input.value = input.getAttribute('data-value');

	input.addEventListener('input', () => {
		input.parentElement.classList.remove('_error');
		saveValueInput = input.value;
	});
	
	input.addEventListener('focus', () => {
		input.parentElement.classList.remove('_error');
		input.value =  saveValueInput;
		input.style.color = '#a7a7a7';
	});

	input.addEventListener('blur', () => {
		if(input.value ===  ''){
			input.value = input.getAttribute('data-value');
		}
	});

}

allInputs.forEach(input => changeInputValue(input));

allforms.forEach(form => {

	form.addEventListener('submit', (e) => {

		let required = true;

		const allInputsThisForm = form.querySelectorAll('input');

		allInputsThisForm.forEach(input => {

			if(input.classList.contains('_req')){
				 if(!input.value || input.value == input.getAttribute('data-value') ){

					if(input.getAttribute('name') == 'name'){
						input.style.color = 'red';
						input.value = 'Введите ваше имя';
					}

					if(input.getAttribute('name') == 'phone'){
						input.style.color = 'red';
						input.value = 'Введите номер Вашего телефона';
					}

					input.parentElement.classList.add('_error');
					required = false;
					e.preventDefault();

					
				 }
			}

			if(input.getAttribute('name') == 'email') {
				
				if(input.value != input.getAttribute('data-value')) {
					let inputCorrect = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.value);
					
					if(!inputCorrect) {
						
						input.parentElement.classList.add('_error');
						input.style.color = 'red';
						input.value = 'Введите корректный email';
						required = false;
						e.preventDefault();
					}
				}
			}
		});

		if(required){
			e.preventDefault();

			const postData = async (url, data) => {
						const result = await fetch(url, data);
						return await result.text();
					},
					cleanInput = () => {
						allInputs.forEach(input => changeInputValue(input));
				  };
			
			statusPost.textContent = informMessageArray.loading;
			form.appendChild(statusPost);
			statusPost.classList.add('statusPost');
			statusPost.style.color = 'green';
			statusPost.style.textAlign = 'center';
			statusPost.style.marginTop = '5px';

			const formData = new FormData(form);

			postData('server.php', { 
				 method: 'POST',
				 body: formData
			})
			.then((res) => {
				console.log(res);
				statusPost.textContent = informMessageArray.success;
				statusPost.style.color = 'green';
				
			})
			.catch(() => {
				statusPost.textContent = informMessageArray.failure;
				statusPost.style.color = 'red';
			})
			.finally(() => {
				 	cleanInput();
				 	setTimeout(() => {
						statusPost.remove();
				 	}, 5000);
				});
			}
		});
	});
}
export default forms;