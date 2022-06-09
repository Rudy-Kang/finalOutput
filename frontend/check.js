/*Declaration of Variables*/


var id = document.querySelector('#id');

var pw1 = document.querySelector('#pswd1');
var pwMsg = document.querySelector('#alertTxt');
var pwImg1 = document.querySelector('#pswd1_img1');

var pw2 = document.querySelector('#pswd2');
var pwImg2 = document.querySelector('#pswd2_img1');
var pwMsgArea = document.querySelector('.int_pass');

var userName = document.querySelector('#name');

var yy = document.querySelector('#yy');
var mm = document.querySelector('#mm');
var dd = document.querySelector('#dd');

var gender = document.querySelector('#gender');

var email = document.querySelector('#email');

var error = document.querySelectorAll('.error_next_box');



/*Connecting to event handler*/


id.addEventListener("focusout", checkId);
pw1.addEventListener("focusout", checkPw);
pw2.addEventListener("focusout", comparePw);
userName.addEventListener("focusout", checkName);
yy.addEventListener("focusout", isBirthCompleted);
mm.addEventListener("focusout", isBirthCompleted);
dd.addEventListener("focusout", isBirthCompleted);
gender.addEventListener("focusout", function() {
    if(gender.value === "Sex") {
        error[5].style.display = "block";
    } else {
        error[5].style.display = "none";
    }
})
email.addEventListener("focusout", isEmailCorrect);





/*callback variables*/


function checkId() {
    var idPattern = /[a-zA-Z0-9_-]{5,20}/;
    if(id.value === "") {
        error[0].innerHTML = "This is a necessary information.";
        error[0].style.display = "block";
    } else if(!idPattern.test(id.value)) {
        error[0].innerHTML = "The id length should be 5~20 and could contain numbers and special letters - and _";
        error[0].style.display = "block";
    } else {
        error[0].innerHTML = "It's a great ID!";
        error[0].style.color = "#08A600";
        error[0].style.display = "block";
    }
}

function checkPw() {
    var pwPattern = /[a-zA-Z0-9~!@#$%^&*()_+|<>?:{}]{8,16}/;
    if(pw1.value === "") {
        error[1].innerHTML = "This is a necessary information.";
        error[1].style.display = "block";
    } else if(!pwPattern.test(pw1.value)) {
        error[1].innerHTML = "The password has to be 8 to 16 characters. Numbers and special characters should be used.";
        pwMsg.innerHTML = "Unusable.";
        pwMsgArea.style.paddingRight = "93px";
        error[1].style.display = "block";
        
        pwMsg.style.display = "block";
        pwImg1.src = "m_icon_not_use.png";
    } else {
        error[1].style.display = "none";
        pwMsg.innerHTML = "Safe";
        pwMsg.style.display = "block";
        pwMsg.style.color = "#03c75a";
        pwImg1.src = "m_icon_safe.png";
    }
}

function comparePw() {
    if(pw2.value === pw1.value && pw2.value != "") {
        pwImg2.src = "m_icon_check_enable.png";
        error[2].style.display = "none";
    } else if(pw2.value !== pw1.value) {
        pwImg2.src = "m_icon_check_disable.png";
        error[2].innerHTML = "The passwords don't match.";
        error[2].style.display = "block";
    } 

    if(pw2.value === "") {
        error[2].innerHTML = "This is a necessary information.";
        error[2].style.display = "block";
    }
}

function checkName() {
    var namePattern = /[a-zA-Z]/;
    if(userName.value === "") {
        error[3].innerHTML = "This is a necessary information.";
        error[3].style.display = "block";
    } else if(!namePattern.test(userName.value) || userName.value.indexOf(" ") > -1) {
        error[3].innerHTML = "Higher and lower case letter are identified. (Please do not use special cases and blanks)";
        error[3].style.display = "block";
    } else {
        error[3].style.display = "none";
    }
}


function isBirthCompleted() {
    var yearPattern = /[0-9]{4}/;

    if(!yearPattern.test(yy.value)) {
        error[4].innerHTML = "Please type your birthyear in full.";
        error[4].style.display = "block";
    } else {
        isMonthSelected();
    }


    function isMonthSelected() {
        if(mm.value === "Month") {
            error[4].innerHTML = "Please pick your birth month.";
        } else {
            isDateCompleted();
        }
    }

    function isDateCompleted() {
        if(dd.value === "") {
            error[4].innerHTML = "Please input your birth date in two digit.";
        } else {
            isBirthRight();
        }
    }
}



function isBirthRight() {
    var datePattern = /\d{1,2}/;
    if(!datePattern.test(dd.value) || Number(dd.value)<1 || Number(dd.value)>31) {
        error[4].innerHTML = "Please recheck your birthdate.";
    } else {
        checkAge();
    }
}

function checkAge() {
    if(Number(yy.value) < 1923) {
        error[4].innerHTML = "Are you sure?";
        error[4].style.display = "block";
    } else if(Number(yy.value) > 2022) {
        error[4].innerHTML = "Oh you are from the future. ^^";
        error[4].style.display = "block";
    } else if(Number(yy.value) > 2010) {
        error[4].innerHTML = "Children below 12 need adult supervision to login.";
        error[4].style.display = "block";
    } else {
        error[4].style.display = "none";
    }
}


function isEmailCorrect() {
    var emailPattern = /[a-z0-9]{2,}@[a-z0-9-]{2,}\.[a-z0-9]{2,}/;

    if(email.value === ""){ 
        error[6].style.display = "none"; 
    } else if(!emailPattern.test(email.value)) {
        error[6].style.display = "block";
    } else {
        error[6].style.display = "none"; 
    }

}