import throttle from 'lodash.throttle';

const refs = {

  form: document.querySelector(".feedback-form"),
  input: document.querySelector("input"),
  textarea: document.querySelector("textarea"),
}

const DATA_FORM_lS_KEY = "feedback-form-state";

let dataForm = {};

refs.form.addEventListener('input', throttle(onValueInput, 500));
refs.form.addEventListener('submit', onSubmit);

try {

  dataForm = JSON.parse(localStorage.getItem("feedback-form-state")) ||
    { 'email': '', 'message': '' };

} catch (error) { }

refs.input.value = dataForm.email;
refs.textarea.value = dataForm.message;

function onValueInput(e) {

  dataForm[e.target.name] = e.target.value;
  localStorage.setItem(DATA_FORM_lS_KEY, JSON.stringify(dataForm));
  checkInputData(e.target);
};

function onSubmit(e) {

  e.preventDefault();

  if (noValid()) return;

  localStorage.removeItem(DATA_FORM_lS_KEY);
  console.log(dataForm);
  resetInputField(e);
}

function noValid() {

  if (!dataForm.email || !dataForm.message) {
    checkInputData(refs.input);
    checkInputData(refs.textarea);
    alert("Please fill in all the fields.");
    return true;
  }

  return;
}

function checkInputData(inputField) {

  if (inputField.value) {

    inputField.classList.remove("invalid");
    inputField.classList.add("valid");

  } else {

    inputField.classList.remove("valid");
    inputField.classList.add("invalid");
  }

};

function resetInputField(e) {

  e.currentTarget.reset();
  refs.input.classList.remove("valid", "invalid");
  refs.textarea.classList.remove("valid", "invalid");
}
