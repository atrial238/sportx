function incline () {
	const cards = document.querySelectorAll('.cards__card'),
			sections = document.querySelectorAll('section');
	

	function setWidthSection () {
		const widthWindow = window.innerWidth;
		sections.forEach(section => {
			section.style.setProperty('--widthWindow', widthWindow + 'px');
		})
	}
	function setHeightCard () {
		
		cards.forEach(card  => {
			const cardHeight = card.clientHeight + 2;
			card.style.setProperty('--heightCard', cardHeight + 'px');
		});
		
	}
	
	window.addEventListener('resize', setHeightCard );
	window.addEventListener('resize', setWidthSection );
	setHeightCard ();
	setWidthSection ();
}
export default incline;