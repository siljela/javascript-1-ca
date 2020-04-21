// FORM
const form = document.querySelector("#contactForm");
form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault(); //prevents the form submit to reload page
  console.log("The form was attempted submitted");

  //NAME
  const name = document.querySelector("#name");
  const nameError = document.querySelector("#nameError");
  const nameValue = name.value;

  if (checkInputLength(nameValue) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  //ANSWER
  const answer = document.querySelector("#answer");
  const answerError = document.querySelector("#answerError");
  const answerValue = answer.value;

  if (answerValue.length > 9) {
    answerError.style.display = "none";
    console.log("Its more than 10");
  } else {
    answerError.style.display = "block";
    console.log("Its less than 10");
  }

  //EMAIL
  const email = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");
  const invalidEmailError = document.querySelector("#invalidEmailError");

  const emailValue = email.value;

  if (checkInputLength(emailValue) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (validateEmail(emailValue) === true) {
    invalidEmailError.style.display = "none";
  } else {
    invalidEmailError.style.display = "block";
  }

  //ADDRESS
  const address = document.querySelector("#address");
  const addressError = document.querySelector("#addressError");
  const addressValue = address.value;

  if (addressValue.length > 14) {
    addressError.style.display = "none";
    console.log("Its more than 15");
  } else {
    addressError.style.display = "block";
    console.log("Its less than 15");
  }
}
//THE GENERAL FUNCTION
function checkInputLength(value) {
  const trimmedValue = value.trim();

  if (trimmedValue.length > 0) {
    return true;
  } else {
    return false;
  }
}
//INDIVIDUAL EMAIL VALIDATION
function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
}
