function accordion (selecorbtn, selecorbtnActive, selectorItem, selectorItemActive, selectorWrapper ) {
	const buttons = document.querySelectorAll(selecorbtn),
			items = document.querySelectorAll(selectorItem),
			itemHeight = document.querySelector(selectorItem).clientHeight,
			itemLiHeight = document.querySelector(selectorWrapper + ' li').clientHeight;

	let enterLess1200 = true,
		enterMore1200 =true,
		addEvent = false;

	function setHeightItemsZero () {

		const li = document.querySelectorAll(selectorWrapper + ' li');
		li.forEach(item => {
			item.style.height = '0px';
		});
	
		items.forEach(item => {
			item.style.height = '0px';
		});
	}
	
	function setHieghtItems (elements) {
		elements.forEach(elem => {
			elem.style.height = itemHeight + 'px';
			elem.parentElement.style.height = itemLiHeight + 'px';
		});
	}
	function setActiveItem (elements) {
		elements.forEach(elem => {
			elem.classList.add(selectorItemActive.replace(/[.]/, ''));
		});
	}

	function removeActiveBtn () {
		buttons.forEach(button => {
			button.classList.remove(selecorbtnActive.replace(/[.]/, ''));
		});
	}
	function removeActiveItem (){
		items.forEach(item => {
			item.classList.remove(selectorItemActive.replace(/[.]/, ''));
		});
	}

	function addEventButtons () {
		addEvent = true;
		if(this.classList.contains(selecorbtnActive.replace(/[.]/, ''))){
			removeActiveBtn ();
			removeActiveItem ();
			setHeightItemsZero();
		}else{
			removeActiveBtn ();
			removeActiveItem ();
			setHeightItemsZero();
			this.classList.add(selecorbtnActive.replace(/[.]/, ''));
			const btnChildren = this.nextElementSibling.querySelectorAll(selectorItem);
			setHieghtItems(btnChildren);
			setActiveItem (btnChildren);
		}
	}

	if(window.innerWidth < 1200) {
		setHeightItemsZero();
		buttons.forEach(button => {
			button.addEventListener('click',  addEventButtons, true);
		});
	}

	window.addEventListener('resize', () => {
		const widthWindow = document.documentElement.clientWidth;
		if(widthWindow < 1200 ) {
			if(enterLess1200){
				enterLess1200 = false;
				enterMore1200 = true;
				removeActiveBtn ();
				removeActiveItem ();
				setHeightItemsZero();
				if(!addEvent){
					buttons.forEach(button => {
						button.addEventListener('click', addEventButtons, true);
					});
				}
			}
		}else{
			if(enterMore1200){
				enterLess1200 = true;
				enterMore1200 = false;
				addEvent = false;
				buttons.forEach(button  => {
					button.removeEventListener('click',  addEventButtons, true);
					const btnChildren = button.nextElementSibling.querySelectorAll(selectorItem);
					setHieghtItems(btnChildren);
			});
			}
			
		}
	});
}
export default accordion;