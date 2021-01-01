window.addEventListener('DOMContentLoaded', function()  {

	var 	mainBody = document.querySelector('body'),
			mainSection = document.querySelector('.main__wrapper'),
			scriptIE = document.createElement('script'),
			fetchPolyfill = document.createElement('script'),
			tinySlider = document.createElement('script'),
			scriptMain = document.createElement('script'),
			// footer = document.querySelector('.footer'),
			// footerMbile = document.querySelector('.footer-mobile'),
			ua = navigator.userAgent,
			is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	
	scriptIE.setAttribute('src', 'js/scriptIE.min.js');
	scriptMain.setAttribute('src', 'js/script.min.js');
	fetchPolyfill.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/fetch/0.8.0/fetch.min.js');
	tinySlider.setAttribute('src', 'js/tiny-slider.js');

	var isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);

	if(isMobile) {
		mainSection.classList.add('main__wrapper_loading');
	}

	if(is_ie){
		mainBody.appendChild(fetchPolyfill);
		fetchPolyfill.onload = function() {
			mainBody.appendChild(scriptIE);
		};
	}else{
		
		if(isMobile) {
			setTimeout(function () {
				mainBody.appendChild(tinySlider);
				tinySlider.onload = function() {
					mainBody.appendChild(scriptMain);
					mainSection.classList.remove('main__wrapper_loading');
				};
			}, 1500);		
		}else{
			mainBody.appendChild(tinySlider);
				tinySlider.onload = function() {
					mainBody.appendChild(scriptMain);
				};
		}
		
	}
});