function animateBtn () {

	const btn = document.querySelector ('.quote__control-btn img'),
			btnWrapper = document.querySelector('.quote__control-btn');
	

	
	
	btn.addEventListener('click', () => {

			btn.style.transition = 'all .7s ease';

			btn.style.transform = 'rotate(360deg)';

			

			setTimeout(() => {

				btn.style.transition = '';

				btn.style.transform = '';

			}, 700);

	});

	btn.addEventListener('mouseenter', () => {

	

	});

}

export default animateBtn;