function align (elemSelector) {

	function getMaxOfArray(numArray) {
		return Math.max.apply(null, numArray);
	 }

	 function setHeighttitle () {

		const elem = document.querySelectorAll(elemSelector);

		let titleHeightArr = [];

		elem.forEach(title => {
			titleHeightArr.push(title.clientHeight);
		});

		const maxHeightTitle = getMaxOfArray(titleHeightArr);

		if(document.documentElement.clientWidth > 571) {
			elem.forEach(title => {
				title.style.height = maxHeightTitle + 'px';
			});
		}else {
			elem.forEach(title => {
				title.style.height = 'auto';
			});
		}
	 }

	window.addEventListener('resize', () => setHeighttitle ());

	setHeighttitle ();
}
export default align;