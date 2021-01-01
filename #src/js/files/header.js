const menuOverlay = document.querySelector('.menu__overlay'),
		menu = document.querySelector('.header__menu');
	
function header (){

	const menuClose = document.querySelector('.header__burger-close'),
			menuActive = document.querySelector('.header__burger'),
			widthScroll =  window.innerWidth - document.documentElement.clientWidth;
			
	menuClose.addEventListener('click', () => {
		menuOverlay.classList.remove('menu__overlay_active');
		menu.classList.remove('header__menu_active');
		document.body.classList.remove('_lock');
		document.body.style.paddingRight ='';
	});

	menuActive.addEventListener('click', () => {
		menuOverlay.classList.add('menu__overlay_active');
		menu.classList.add('header__menu_active');
		document.body.classList.add('_lock');
		document.body.style.paddingRight = widthScroll  + 'px';
	});

	window.addEventListener('resize', () => {
		menuOverlay.classList.remove('menu__overlay_active');
		menu.classList.remove('header__menu_active');
		document.body.classList.remove('_lock');
		document.body.style.paddingRight ='';
	});
}
export{header, menuOverlay, menu};