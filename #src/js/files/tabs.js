function tabs () {
	const nav = document.querySelectorAll('.catalog__tab'),
			contents = document.querySelectorAll('.catalog__content');

		nav.forEach((tab, i) => {
			tab.addEventListener('click', (e) => {

				if(e.target) {

					nav.forEach(tab => {
						tab.classList.remove('catalog__tab_active');
					});
	
					contents.forEach(item => {
						item.classList.remove('catalog__content_active');
					});

					tab.classList.add('catalog__tab_active');

					new Promise((resolve) => {

						contents.forEach(item => {
							item.classList.add('fadeOut');
							item.classList.remove('fadeIn');
						});
		
						const idInter = setInterval(() => {
		
							contents.forEach(item => {
		
								if(+getComputedStyle(item).opacity === 0){

									contents.forEach(content => {
										content.style.display = 'none';
									});
		
									clearInterval(idInter);
									resolve(true);
								}
							});
						},10);
					})
					.then(() => {
					
						contents[i].style.display = 'flex';
						contents[i].classList.add('catalog__content_active');
						contents[i].classList.remove('fadeOut');
						contents[i].classList.add('fadeIn');
					});
				}
			});
		});
}
export default tabs;