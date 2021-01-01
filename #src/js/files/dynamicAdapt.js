function dynamicAdapt (numbr) {
	 (function (arr) {
		arr.forEach(function (item) {
		  if (item.hasOwnProperty('after')) {
			 return;
		  }
		  Object.defineProperty(item, 'after', {
			 configurable: true,
			 enumerable: true,
			 writable: true,
			 value: function after() {
				var argArr = Array.prototype.slice.call(arguments),
				  docFrag = document.createDocumentFragment();
	 
				argArr.forEach(function (argItem) {
				  var isNode = argItem instanceof Node;
				  docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
				});
	 
				this.parentNode.insertBefore(docFrag, this.nextSibling);
			 }
		  });
		});
	 })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);


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