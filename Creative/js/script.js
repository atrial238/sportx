/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./#src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./#src/js/files/accordion.js":
/*!************************************!*\
  !*** ./#src/js/files/accordion.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (accordion);

/***/ }),

/***/ "./#src/js/files/cardIncline.js":
/*!**************************************!*\
  !*** ./#src/js/files/cardIncline.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (incline);

/***/ }),

/***/ "./#src/js/files/dynamicAdapt.js":
/*!***************************************!*\
  !*** ./#src/js/files/dynamicAdapt.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (dynamicAdapt);

/***/ }),

/***/ "./#src/js/files/form.js":
/*!*******************************!*\
  !*** ./#src/js/files/form.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


function forms () {
	const allforms = document.querySelectorAll('form'),
			allInputs = document.querySelectorAll('input'),
			statusPost = document.createElement('div'),
			informMessageArray = {
			loading: 'загрузка...',
			success: "Мы свяжемся с Вами в ближайшее время",
			failure: 'Что-то пошло не так'
	  };

	function changeInputValue(input){

	let saveValueInput = '';
	
	input.value = input.getAttribute('data-value');

	input.addEventListener('input', () => {
		input.parentElement.classList.remove('_error');
		saveValueInput = input.value;
	});
	
	input.addEventListener('focus', () => {
		input.parentElement.classList.remove('_error');
		input.value =  saveValueInput;
		input.style.color = '#a7a7a7';
	});

	input.addEventListener('blur', () => {
		if(input.value ===  ''){
			input.value = input.getAttribute('data-value');
		}
	});

}

allInputs.forEach(input => changeInputValue(input));

allforms.forEach(form => {

	form.addEventListener('submit', (e) => {

		let required = true;

		const allInputsThisForm = form.querySelectorAll('input');

		allInputsThisForm.forEach(input => {

			if(input.classList.contains('_req')){
				 if(!input.value || input.value == input.getAttribute('data-value') ){

					if(input.getAttribute('name') == 'name'){
						input.style.color = 'red';
						input.value = 'Введите ваше имя';
					}

					if(input.getAttribute('name') == 'phone'){
						input.style.color = 'red';
						input.value = 'Введите номер Вашего телефона';
					}

					input.parentElement.classList.add('_error');
					required = false;
					e.preventDefault();

					
				 }
			}

			if(input.getAttribute('name') == 'email') {
				
				if(input.value != input.getAttribute('data-value')) {
					let inputCorrect = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.value);
					
					if(!inputCorrect) {
						
						input.parentElement.classList.add('_error');
						input.style.color = 'red';
						input.value = 'Введите корректный email';
						required = false;
						e.preventDefault();
					}
				}
			}
		});

		if(required){
			e.preventDefault();

			const postData = async (url, data) => {
						const result = await fetch(url, data);
						return await result.text();
					},
					cleanInput = () => {
						allInputs.forEach(input => changeInputValue(input));
				  };
			
			statusPost.textContent = informMessageArray.loading;
			form.appendChild(statusPost);
			statusPost.classList.add('statusPost');
			statusPost.style.color = 'green';
			statusPost.style.textAlign = 'center';
			statusPost.style.marginTop = '5px';

			const formData = new FormData(form);

			postData('server.php', { 
				 method: 'POST',
				 body: formData
			})
			.then((res) => {
				console.log(res);
				statusPost.textContent = informMessageArray.success;
				statusPost.style.color = 'green';
				
			})
			.catch(() => {
				statusPost.textContent = informMessageArray.failure;
				statusPost.style.color = 'red';
			})
			.finally(() => {
				 	cleanInput();
				 	setTimeout(() => {
						statusPost.remove();
				 	}, 5000);
				});
			}
		});
	});
}
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./#src/js/files/header.js":
/*!*********************************!*\
  !*** ./#src/js/files/header.js ***!
  \*********************************/
/*! exports provided: header, menuOverlay, menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "header", function() { return header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuOverlay", function() { return menuOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return menu; });
const menuOverlay = document.querySelector('.menu__overlay'),
		menu = document.querySelector('.header__menu');
	
function header (){

	const menuClose = document.querySelector('.header__burger-close'),
			menuActive = document.querySelector('.header__burger'),
			widthScroll =  window.innerWidth - document.documentElement.clientWidth;
			
	menuClose.addEventListener('click', () => {
		menuOverlay.classList.remove('menu__overlay_active');
		menu.classList.remove('header__menu_active');
		document.body.classList.remove('_lock');
		document.body.style.paddingRight ='';
	});

	menuActive.addEventListener('click', () => {
		menuOverlay.classList.add('menu__overlay_active');
		menu.classList.add('header__menu_active');
		document.body.classList.add('_lock');
		document.body.style.paddingRight = widthScroll  + 'px';
	});

	window.addEventListener('resize', () => {
		menuOverlay.classList.remove('menu__overlay_active');
		menu.classList.remove('header__menu_active');
		document.body.classList.remove('_lock');
		document.body.style.paddingRight ='';
	});
}


/***/ }),

/***/ "./#src/js/files/imageToBackground.js":
/*!********************************************!*\
  !*** ./#src/js/files/imageToBackground.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isIE__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isIE */ "./#src/js/files/isIE.js");


function ibg(){
	const ibg = document.querySelectorAll('.img-bg');
	
	for (var i = 0; i < ibg.length; i++) {

		if(Object(_isIE__WEBPACK_IMPORTED_MODULE_0__["default"])()){

			if(ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {

				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
				ibg[i].querySelector('img').style.width = '0px';
				ibg[i].querySelector('img').style.height = '0px';

			}
		}	
	}
}
/* harmony default export */ __webpack_exports__["default"] = (ibg); 


/***/ }),

/***/ "./#src/js/files/isIE.js":
/*!*******************************!*\
  !*** ./#src/js/files/isIE.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isIE() {
	var ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
/* harmony default export */ __webpack_exports__["default"] = (isIE);

/***/ }),

/***/ "./#src/js/files/isSupportWebp.js":
/*!****************************************!*\
  !*** ./#src/js/files/isSupportWebp.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function testWebp () {
	function test(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	
	test(function (support) {
	
		if (support == true) {
			document.querySelector('body').classList.add('_webp');
		} else {
			document.querySelector('body').classList.add('_no-webp');
		}
	});
}
/* harmony default export */ __webpack_exports__["default"] = (testWebp);

/***/ }),

/***/ "./#src/js/files/scrolling.js":
/*!************************************!*\
  !*** ./#src/js/files/scrolling.js ***!
  \************************************/
/*! exports provided: smoothScrolling, smoothScrollV2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothScrolling", function() { return smoothScrolling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothScrollV2", function() { return smoothScrollV2; });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./#src/js/files/header.js");


const toggleUpButton = (buttons) => {
	
    buttons.forEach(linkElem => {
        
        if(linkElem.getAttribute('data-up')){
           
            window.addEventListener('scroll', () => {
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
               
                if(scrollTop > 1000){
                    linkElem.classList.add('fadeIn');
                    linkElem.classList.remove('fadeOut');
                }else{
                    linkElem.classList.add('fadeOut');
                    linkElem.classList.remove('fadeIn');
                }
            });
        }
    });
};

const smoothScrolling = (linkSelector) => {
    const linkElements = document.querySelectorAll(linkSelector);
    
    toggleUpButton(linkElements);

    function calcAnchorTop() {

        linkElements.forEach(linkElem  => {
            linkElem.addEventListener('click', function(e) {

					document.body.classList.remove('_lock');
					_header__WEBPACK_IMPORTED_MODULE_0__["menuOverlay"].classList.remove('menu__overlay_active');
					_header__WEBPACK_IMPORTED_MODULE_0__["menu"].classList.remove('header__menu_active');
					
            let linkTop =  document.documentElement.scrollTop || document.body.scrollTop,
                anchorTop = 0,
                anchorElement;
                
            if(this.hash){
                e.preventDefault();
                    
                anchorElement = document.querySelector(this.hash);
                
                while(anchorElement.offsetParent){
                    anchorTop += anchorElement.offsetTop;
                    anchorElement = anchorElement.offsetParent;
                }
                
                anchorTop = Math.round(anchorTop);
            }
                moveScroll(linkTop, anchorTop, this.hash);
            });
        });
    }

    function moveScroll(fromLink, toAnchor, hash) {
        let interval = 1,
            speed = (fromLink > toAnchor) ? -30 : 30,
            prevScrollTop,

            move = setInterval(() => {

                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

                if( prevScrollTop === scrollTop ||
                   (fromLink < toAnchor && scrollTop >= toAnchor) ||
                   (fromLink > toAnchor && scrollTop <= toAnchor) 
                ){
                    clearInterval(move);
                    // history.replaceState(null, document.title, location.href.replace(/#.*$/g, '') + hash);
                    location.hash = hash;
                }else{
                    document.documentElement.scrollTop += speed;
                    document.body.scrollTop += speed;
                    prevScrollTop = scrollTop;
                }

            }, interval);
    }
    calcAnchorTop();  
};

const smoothScrollV2 = (linkSelector) => {
     
    const links = document.querySelectorAll(linkSelector);

    toggleUpButton(links);

    links.forEach(link => {
        link.addEventListener('click', function() {
            const hash = this.hash,
                  distanceToAnchor = document.querySelector(hash).getBoundingClientRect().top,
                  speed = 0.3,
                  scrollTop = document.documentElement.scrollTop;
            
            let start = null;

            requestAnimationFrame(step);
            
            function step(time){
               start = start === null ? time : start;

                let progress = time - start,
                    stepAnimation;

                if(distanceToAnchor < 0){
                    stepAnimation = Math.max(scrollTop - progress/speed, scrollTop + distanceToAnchor);
                }else{
                    stepAnimation = Math.min(scrollTop + progress/speed, scrollTop + distanceToAnchor);
                }

                document.documentElement.scrollTo(0, stepAnimation);

                if(stepAnimation != scrollTop + distanceToAnchor){
                    requestAnimationFrame(step);
                }else{
                    location.hash = hash;
                }
            }
        });
    });
};


/***/ }),

/***/ "./#src/js/files/slider.js":
/*!*********************************!*\
  !*** ./#src/js/files/slider.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


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

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./#src/js/main.js":
/*!*************************!*\
  !*** ./#src/js/main.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _files_imageToBackground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./files/imageToBackground */ "./#src/js/files/imageToBackground.js");
/* harmony import */ var _files_isSupportWebp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./files/isSupportWebp */ "./#src/js/files/isSupportWebp.js");
/* harmony import */ var _files_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./files/header */ "./#src/js/files/header.js");
/* harmony import */ var _files_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./files/slider */ "./#src/js/files/slider.js");
/* harmony import */ var _files_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./files/form */ "./#src/js/files/form.js");
/* harmony import */ var _files_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./files/scrolling */ "./#src/js/files/scrolling.js");
/* harmony import */ var _files_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./files/accordion */ "./#src/js/files/accordion.js");
/* harmony import */ var _files_cardIncline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./files/cardIncline */ "./#src/js/files/cardIncline.js");
/* harmony import */ var _files_dynamicAdapt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./files/dynamicAdapt */ "./#src/js/files/dynamicAdapt.js");












		
	Object(_files_imageToBackground__WEBPACK_IMPORTED_MODULE_0__["default"])();
	Object(_files_isSupportWebp__WEBPACK_IMPORTED_MODULE_1__["default"])();
	Object(_files_header__WEBPACK_IMPORTED_MODULE_2__["header"])();
	Object(_files_dynamicAdapt__WEBPACK_IMPORTED_MODULE_8__["default"])(1);
	Object(_files_dynamicAdapt__WEBPACK_IMPORTED_MODULE_8__["default"])(2);
	Object(_files_cardIncline__WEBPACK_IMPORTED_MODULE_7__["default"])();
	Object(_files_slider__WEBPACK_IMPORTED_MODULE_3__["default"])();
	Object(_files_accordion__WEBPACK_IMPORTED_MODULE_6__["default"])('.item__title', '.item__title_active', '.item__link', '.item__link_active','.footer__column_list');
	Object(_files_form__WEBPACK_IMPORTED_MODULE_4__["default"])();
	Object(_files_scrolling__WEBPACK_IMPORTED_MODULE_5__["smoothScrolling"])('.link');
	

/***/ })

/******/ });
//# sourceMappingURL=script.js.map