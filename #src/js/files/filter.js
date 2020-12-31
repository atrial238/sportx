function filter() {

	const tabs = document.querySelectorAll('.nav__item'),
			contents  = document.querySelectorAll('.news');
	
	tabs.forEach(tab => {
		tab.addEventListener('click', (e) => {

			tabs.forEach(tab => {
				tab.classList.remove('_active');
			});
			e.target.classList.add('_active');

			new Promise((resolve) => {

				contents.forEach(content => {
					content.classList.add('fadeOut');
					content.classList.remove('fadeIn');
				});

				const idInter = setInterval(() => {

					contents.forEach(content => {

						if(+getComputedStyle(content).opacity === 0){
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
				contents.forEach(content => {
							
					const contentSubtitle = content.querySelector('.news__subtitle');

					if(contentSubtitle.textContent === tab.textContent) {
	
						content.style.display = 'flex';
						content.classList.remove('fadeOut');
						content.classList.add('fadeIn');
						
					}else if(tab.textContent === 'All'){
	
						contents.forEach(content => {
						content.style.display = 'flex';
						content.classList.remove('fadeOut');
						content.classList.add('fadeIn');
						});
					}
				});
			});
		});
	});
}
export default filter;