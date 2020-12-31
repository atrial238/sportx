const modals = (targetSelector, modalSelector, overlaySelector, closeSelector, pageUpSelector) => {

	const trigger = document.querySelectorAll(targetSelector),
			  modal = document.querySelector(modalSelector),
			  overlay = document.querySelector(overlaySelector),
			  close = document.querySelector(closeSelector),
			  scrollWidth = window.innerWidth - document.documentElement.clientWidth,
			  pageUpButton = document.querySelector(pageUpSelector);

	function openModal() {
		overlay.style.display = 'block';
		modal.style.display = 'block';
		document.body.style.overflow = 'hidden';
		document.body.style.marginRight = `${scrollWidth}px`;
		pageUpButton.style.marginRight = `${scrollWidth}px`;
	}

	function closeModal() {
		overlay.style.display = 'none';
		modal.style.display = 'none';
		document.body.style.overflow = '';
		document.body.style.marginRight = '';
		pageUpButton.style.marginRight = '';
	}

	trigger.forEach(item => {
		 item.addEventListener('click', (e) => {
			  e.preventDefault();
			  if(e.target){
				  if(item.classList.contains('btn-order')){
					const title = item.parentElement.parentElement.querySelector('.catalog-item__subtitle').textContent;
					modal.querySelector('.modal__desc').textContent = title;
				  }
				  openModal();
				}
		 });
	});

	close.addEventListener('click', (e) => {
		if(e.target){closeModal();}
	});
	
	overlay.addEventListener('click', (e) => {
		 if(e.target === overlay){ closeModal();}
	});

};
export default modals;