function headerMobile () {
	const containerMenu = document.querySelectorAll('.header-bottom-menu'),
			menu = document.querySelectorAll('.header-bottom-menu__list'),
			menuMobile = document.querySelector('.header-menu-mobile'),
			lenguage = document.querySelector('.header-top__leng'),
			containerLenguage = document.querySelector('.header-top');

	function changeMenu() {
		const widthWindow = window.innerWidth;

		if(widthWindow < 767.98) {
			
			menuMobile.insertAdjacentElement('beforeend', lenguage);
			menu.forEach(item => {

				item.style.display = 'block';
				menuMobile.insertAdjacentElement('beforeend', item);
				
				});
		}else{
			containerLenguage.insertAdjacentElement('afterbegin', lenguage);
			menu.forEach(item => {
				item.style.display = 'flex';
				if(item.classList.contains('header-bottom-menu-right__list')){
					containerMenu[1].insertAdjacentElement('beforeend', menu[1]);
				}else{
					containerMenu[0].insertAdjacentElement('beforeend', menu[0]);
				}
			});
		}
	}
			
	window.addEventListener('resize',  changeMenu);
	changeMenu();
}
export default headerMobile;
