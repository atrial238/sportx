import Swiper from 'swiper/bundle';


function mainSlider () {

	const slider = document.querySelector('.main-slider');

	const swiper = new Swiper('.main-slider', {

		navigation: {
			nextEl: '.control__arrow-left',
			prevEl: '.control__arrow-right',
		 },
		//  speed : 1000,
		 autoHeight: false,
		 grabCursor: true,
		 loop: true,
		//  autoplay: {
		// 	delay: 5000,
		//  },
	});

	// slider.addEventListener('mouseenter', ()=> {
	// 	swiper.autoplay.stop();
	// });
	// slider.addEventListener('mouseleave', ()=> {
	// 	swiper.autoplay.start();
	// });
}

function lotsSlider () {


	const slider = tns({
		container: '.lots-slider__wrapper',
		
		loop: true,
		nav: false,
		prevButton: '.control__item-prev',
		nextButton: '.control__item-next',
		responsive: {

			992: {
				items: 3,
				mouseDrag: true,
				gutter: 100,
			},
			768: {
				items: 3,
				mouseDrag: true,
				gutter: 40,
			},
			480: {
				items: 2,
				mouseDrag: true,
				gutter: 20,
			},
			320: {

			}
			
		 }
	
	 });

}

function quoteSlider () {

	const slider = tns({

		container: '.quote__slider',
		mode: 'gallery',
		speed: 700,
		loop: true,
		nav: false,
		prevButton: '.quote__control-btn',
		nextButton: '.quote__control-btn',
		// responsive: {

			
		//  }
	
	 });

}

export {mainSlider, lotsSlider, quoteSlider};
