const cardNumber = document.getElementById("number");
const numberInp = document.getElementById("card_number");

const cardName = document.getElementById("name");
const nameInp = document.getElementById("card_name");

const cardMonth = document.getElementById("month");
const monthInp = document.getElementById("card_month");

const cardYear = document.getElementById("year");
const yearInp = document.getElementById("card_year");

const cardCvc = document.getElementById("cvc");
const cvcInp = document.getElementById("card_cvc");

const submitBtn = document.getElementById("submit_btn");

const completed = document.getElementById(".thank");
const gorm = document.querySelector("form");

function setCardNumber(e) {
    cardNumber.innerText = format(e.target.value);
}
function setCardName(e) {
    cardName.innerText = format(e.target.value);
}
function setCardMoth(e) {
    cardMonth.innerText = format(e.target.value);
}
function setCardYear(e) {
    cardYear.innerText = format(e.target.value);
}
function setCardCvc(e) {
    cardCvc.innerText = format(e.target.value);
}

function handleSubmit(e) {
    e.preventDefault();
    if (!numberInp.value) {
        numberInp.classList.add("erro");
        numberInp.parentElement.classList.add("error_message");
    } else {
        numberInp.classList.remove("erro");
        numberInp.parentElement.classList.remove("error_message");
    }
    if (!nameInp.value) {
        nameInp.classList.add("erro");
        nameInp.parentElement.classList.add("error_message");
    } else {
        nameInp.classList.remove("erro");
        nameInp.parentElement.classList.remove("error_message");
    }
    if (!monthInp.value) {
        monthInp.classList.add("erro");
        monthInp.parentElement.classList.add("error_message");
    } else {
        monthInp.classList.remove("erro");
        monthInp.parentElement.classList.remove("error_message")
    }
    if (!yearInp.value) {
        yearInp.classList.add("erro");
        yearInp.parentElement.classList.add("error_message");
    } else {
        yearInp.classList.remove("erro");
        yearInp.parentElement.classList.remove("error_message");
    }
    if (!cvcInp.value) {
        cvcInp.classList.add("erro");
        cvcInp.parentElement.classList.add("error_message");
    } else {
        cvcInp.classList.remove("erro");
        cvcInp.parentElement.classList.remove("error_message");
    }
    if (
        nameInp.value &&
        numberInp.value &&
        monthInp.value  &&
        yearInp.value &&
        cvcInp.value &&
        numberInp.value.length == 16
    ) {
        completed.classList.remove("hidden");
        format.classList.add("hidden");
    }
}

function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g,"$&");
}

numberInp.addEventListener("keyup", setCardNumber);
nameInp.addEventListener("keyup", setCardName);
monthInp.addEventListener("keyup", setCardMoth);
yearInp.addEventListener("keyup", setCardYear);
cvcInp.addEventListener("keyup", setCardCvc);
submitBtn.addEventListener("click",handleSubmit);