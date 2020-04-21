// FORM
const form = document.querySelector("#contactForm");
form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault(); //prevents the form submit to reload page
  console.log("Someone tried to submit the form");

  //NAME
  const name = document.querySelector("#name");
  const nameError = document.querySelector("#nameError");
  const nameValue = name.value;

  if (checkInputLength(nameValue) === true) {
    nameError.style.display = "none";
    console.log("The name has a value.");
  } else {
    nameError.style.display = "block";
    console.log("The name has no value.");
  }

  //ANSWER
  const answer = document.querySelector("#answer");
  const answerError = document.querySelector("#answerError");
  const answerValue = answer.value;

  if (answerValue.length > 9) {
    answerError.style.display = "none";
    console.log("The answer has more than 10 characters.");
  } else {
    answerError.style.display = "block";
    console.log("The answer has less than 10 characters.");
  }

  //EMAIL
  const email = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");
  const invalidEmailError = document.querySelector("#invalidEmailError");

  const emailValue = email.value;

  if (checkInputLength(emailValue) === true) {
    emailError.style.display = "none";
    console.log("The email has a value.");
  } else {
    emailError.style.display = "block";
    console.log("The email has no value.");
  }

  if (validateEmail(emailValue) === true) {
    invalidEmailError.style.display = "none";
    console.log("The email has a correct value.");
  } else {
    invalidEmailError.style.display = "block";
    console.log("The email has an incorrect value.");
  }

  //ADDRESS
  const address = document.querySelector("#address");
  const addressError = document.querySelector("#addressError");
  const addressValue = address.value;

  if (addressValue.length > 14) {
    addressError.style.display = "none";
    console.log("The address has 15 characters or more.");
  } else {
    addressError.style.display = "block";
    console.log("The address has less than 15 characters.");
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
