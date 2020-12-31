function dynamicAdapt (numbr) {

	const	setArr = document.querySelector(`[data-move${numbr}]`).dataset[`move${numbr}`].split(', '),
			moveableElem = document.querySelector(`[data-move${numbr}]`),
			moveToElemChildren = document.querySelector(`.${setArr[0]}`).children,
			anchorSibling = moveableElem.previousElementSibling,
			anchorParent = moveableElem.parentElement;

	let widthWindowUser = document.documentElement.clientWidth;

	function move () {
	
		widthWindowUser = document.documentElement.clientWidth;
		
		if(widthWindowUser < setArr[2]) {

			if(moveToElemChildren.length < 1) {

				document.querySelector(`.${setArr[0]}`).appendChild(moveableElem);

			}else{
			
				moveToElemChildren[setArr[1] - 2].after(moveableElem);
			}
			
		}else if(anchorSibling){
			
			anchorSibling.after(moveableElem); 

		}else if(anchorParent) {

			anchorParent.prepend(moveableElem);

		}
	}

		window.addEventListener('resize', () => move());
		move ();
}
export default dynamicAdapt;