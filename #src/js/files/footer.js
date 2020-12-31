function footer() {

	const footerWrapper = document.querySelector('.footer__wrapper-mobile'),
			footerClose = document.querySelector('.footer__close-mobile'),
			isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);

	if(isMobile){
		footerClose.style.display = 'none';
		footerWrapper.style.height = 'auto'; 
	}
}
export default footer; 