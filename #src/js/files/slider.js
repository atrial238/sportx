

function slider () {

	let slider = tns({
		container: '.main__slider',
		items: 1,
		slideBy: 1,
		controls: false,
		navPosition: 'bottom',
		lazyload: true,
		// center: true,
		mouseDrag: true,
		// prevButton: '.carousel__btn-prev',
		// nextButton: '.carousel__btn-next',
	 });
}

export default slider;