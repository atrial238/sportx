function scrollProcess (){
	const scrollBar = document.querySelector('.nav__process span');

	function calcHeightDoc (){
		return Math.max(
					document.body.scrollHeight, document.documentElement.scrollHeight,
					document.body.offsetHeight, document.documentElement.offsetHeight,
					document.body.clientHeight, document.documentElement.clientHeight) -
					document.documentElement.clientHeight;
	}

	function calcWidthDoc () {
		return document.documentElement.clientWidth;
	}	

	calcHeightDoc ();
	calcWidthDoc ();
	
	window.addEventListener('resize', () => {
		calcHeightDoc ();
		calcWidthDoc ();
	});

	window.addEventListener('scroll', () => {
		const	widthScrollBar = window.pageYOffset * (calcWidthDoc () / calcHeightDoc ());
			scrollBar.style.width = `${widthScrollBar}px`;
	});

}


export default scrollProcess;