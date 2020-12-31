function menuActive() {
	const burger = document.querySelector('.burger'),
			menu = document.querySelector('.nav');

			burger.addEventListener('click', () => {
				
				burger.classList.toggle('_active');
				menu.classList.toggle('_active');
				window.document.body.classList.toggle('_lock');
				
			});
}
export default menuActive;
