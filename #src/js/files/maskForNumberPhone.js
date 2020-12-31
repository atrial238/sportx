const maskForNumberPhone  = (selector) => {
    const inpitsPhone = document.querySelectorAll(selector);

    function setCursorPosition (pos, elem) {
        elem.focus();

        if(elem.setSelectionRange){
            elem.setSelectionRange(pos, pos);
        }else if(elem.createTextRange){
            const renge = elem.createTextRange();
            renge.collapse();
            renge.moveStart('character', pos);
            renge.moveEnd('character', pos);
            renge.select();
        }
    }

    function createMask() {
        const matrix = '+7 (___) ___ __ __',
              defaultMatrix = '7';

        let i = 0,
            valueInput = this.value.replace(/\D/g, '');
             
        
        if(defaultMatrix.length >= valueInput.length){
            valueInput = defaultMatrix;
        }
       
        this.value = matrix.replace(/./g, (symbol) => {
               
            if(/[_\d]/.test(symbol) && i < valueInput.length){
                return valueInput.charAt(i++);

            }else if(i >= valueInput.length){
                return '';

            }else{
                return symbol;
            }
        });
     
        if(event.type === 'blur'){
            if(valueInput.length == 1){
                this.value = this.dataset.value;
            }
        }else{
            setCursorPosition(this.value.length, this);
        }
    }
    inpitsPhone.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);
        input.addEventListener('click', createMask);
    });

};
export default maskForNumberPhone;