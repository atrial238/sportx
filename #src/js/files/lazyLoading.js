function lazy () {
	const imgWrapper = document.querySelector('._lazy-loading picture'),
			imgOld = imgWrapper.querySelector('img'),
			sourceOld = imgWrapper.querySelector('source'),
			sourceNew = document.createElement('source'),
			imgNew = document.createElement('img');
	sourceNew.src = 'img/img/main/1.webp';
	imgNew.src = 'img/img/main/1.webp';
	imgNew.alt = 'bicycle';


	window.onload = function () {
		sourceOld.remove();
		imgOld.remove();
		
	};

}
export default lazy;