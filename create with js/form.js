
// Đối tượng 
function Validator(options) {

    // lấy ra thẻ cha ngoài cùng của input khi có nhiều cấp 
    function getElementParent(el , elParent) {
       while(el.parentElement){
           if(el.parentElement.matches(elParent)) {
            return el.parentElement; 
           }
       }
       el = el.parentElement;
    }

    var selectorRules = {};

    // hàm thực hiện báo lỗi
    function validate(inputElement,rule) {
        var errorElement = getElementParent(inputElement, options.fromSelector).querySelector(options.errorSelector)
        var errorMessage;

        // lấy ra các rules của selector
        var rules = selectorRules[rule.selector];

        // lặp qua từng rules nếu và kiểm tra 
        // nếu có lỗi thì dứng việc kiểm tra
        for(var i = 0 ; i < rules.length ; i++) {
            errorMessage = rules[i](inputElement.value);
            if(errorMessage)
            break;
        }


        if(errorMessage) {
            errorElement.innerText = errorMessage;
            getElementParent(inputElement, options.fromSelector).classList.add('invalid');
        }
        else {
            errorElement.innerText = '';
            getElementParent(inputElement, options.fromSelector).classList.remove('invalid');
        } 

        return !errorMessage;
        
    }
    //lấy element của form
    var formElement = document.querySelector(options.form);
    
        
    if (formElement) {

        formElement.onsubmit = function(e) {
            e.preventDefault();
            
            var isFormValid =true;

            options.rules.forEach( function(rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement,rule);

                if(!isValid){
                    isFormValid = false;
                }
            });

            if(isFormValid) {
                //trường hợp submit với javascript
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInputs).reduce(function (values,input) {
                        values[input.name] = input.value;
                        return  values;
                    },{})
                    options.onSubmit(formValues);
                }
                //trường hợp submit với hành vi mặc định
                else {
                    formElement.submit();
                }
            }
        }


        //lặp qua mỗi rule và xử lý 
        options.rules.forEach( function(rule) {


            //lưu lại các rules cho mỗi input
            if(Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElement = formElement.querySelector(rule.selector);
             if(inputElement) {
                // xử lý khi blur ra ngoài
                inputElement.onblur = function() {
                     validate(inputElement,rule);
                }
                //xử lý khi người dùng nhập vòa input
                inputElement.oninput = function() {
                    var errorElement =getElementParent(inputElement, options.fromSelector).querySelector(options.errorSelector)
                    errorElement.innerTex  = '';
                   getElementParent(inputElement, options.fromSelector).classList.remove('invalid');
                }
            }
        });
    }
}

// Định nghĩa Rules
// trim() dùng để lại bỏ dấu cách 
Validator.isRequired = function(sel) {
    return {
        selector: sel,
        test: function(value) {
            return value ? undefined : 'vui lòng nhập lại!'
        }
    };
}

    Validator.isEmail = function(sel) {
        return {
            selector: sel,
            test: function(value) {
                var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                return regex.test(value) ? undefined : 'Vui lòng nhập lại Email!'
            }
        };
    }
Validator.minLength = function(sel, min) {
    return {
        selector: sel,
        test: function(value) {
            return value.length >= min ? undefined : `vui lòng nhập tối thiểu ${min}  ký tự`;
        }
    };
}

Validator.isConfirmed = function(sel, getConfirmValue) {
    return {
        selector: sel,
        test: function(value) {
            return value === getConfirmValue() ? undefined : "Vui lòng nhập lại!";
        }
    }
}
