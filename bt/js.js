let password = document.getElementById("password");
let showEye = document.getElementById("showEye");
let hideEye = document.getElementById("hideEye");

function black() {
  showEye.style.fill = "#000000";
  hideEye.style.fill = "#000000";
}
function white() {
  showEye.style.fill = "#fff";
  hideEye.style.fill = "#fff";
}

function passwordShow() {
  password.type = "text";
  showEye.style.display = "none";
  hideEye.style.display = "inline";
  password.focus();
}
function passwordHide() {
  password.type = "password";
  showEye.style.display = "inline";
  hideEye.style.display = "none";
  password.focus();
}

let password_1 = document.getElementById("password_ab");
let showEye_1 = document.getElementById("showEye_ab");
let hideEye_1 = document.getElementById("hideEye_ab");

function a() {
  password_1.type = "text";
  showEye_1.style.display = "none";
  hideEye_1.style.display = "inline";
  password_1.focus();
}
function b() {
  password_1.type = "password";
  showEye_1.style.display = "inline";
  hideEye_1.style.display = "none";
  password_1.focus();
}
function Validator(options) {
var formElement = document.querySelector(options.form);
 if (formElement) {
    options.rules.forEach(function (rule) {
        var inputElement = formElement.querySelector(rule.selector);
        var errorElement = inputElement.parentElement.querySelector('.form-message')
        if(inputElement) {
            inputElement.onblur = function () {
                var errorMessage = rule.test(inputElement.value)
                if(errorMessage) {
                    errorElement.innerText = errorMessage;
                    inputElement.parentElement.classLis.add('invalid')
                } else {
                    errorElement.innerText = '';
                    inputElement.parentElement.classLis.remove('invalid')
                }
               
            }
        }
    })
 }
}

Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập!'
        }
    };
}
Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function () {

        }
    };
}
