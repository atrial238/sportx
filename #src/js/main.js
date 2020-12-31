
'use strict';
import ibg from './files/imageToBackground';
import testWebp from './files/isSupportWebp';
import {header} from './files/header';
// import tabs from './files/tabs';
import slider from './files/slider';
// import modals from './files/modal';
// import catalog from './files/catalog';
// import align from './files/alignTitle';
import forms from './files/form';
// import maskForNumberPhone from './files/maskForNumberPhone';
import {smoothScrolling} from './files/scrolling';
import accordion from './files/accordion';
import incline from './files/cardIncline';
import dynamicAdapt from './files/dynamicAdapt';
		
	ibg();
	testWebp();
	header();
	dynamicAdapt(1);
	dynamicAdapt(2);
	incline();
	slider();
	accordion('.item__title', '.item__title_active', '.item__link', '.item__link_active','.footer__column_list');
	// slider();
	// modals('.btn-consultation', '#consultation', '.overlay', '#consultation .modal__close', '.pageup');
	// modals('.btn-order', '#order', '.overlay', '#order .modal__close', '.pageup');
	// catalog();
	// align('.catalog-item__subtitle');
	forms();
	// maskForNumberPhone('[name = phone]');
	smoothScrolling('.link');
	// footer();


	// =======================================For Google Maps======================================================
	
	
	// var isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent),
		// scriptMap = document.createElement('script'),
		// mainBody = document.querySelector('body');
	
	// if(!isMobile){
	// 	scriptMap.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD3QtL2IP05dPUR8aqsAIcooTjiyO8ay3w';
	// 	mainBody.appendChild(scriptMap);
	// 	scriptMap.onload = function(){
	// 		initMap();
	// 	};	
	// }