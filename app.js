const inputEmail = document.querySelector("#email");
const text = document.querySelector(".sign-up__text");
const buttonSubmit = document.querySelector(".sign-up__button");
const buttonBack = document.querySelector(".sign-up-message__button")
const message = document.querySelector(".message");
const signUp = document.querySelector(".sign-up");
const spanEmail = document.querySelector(".sign-up-message__description span");
const resetForm = document.querySelector(".sign-up__form");

let inputValue = "";

buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    if (!inputEmail.checkValidity()) {
        text.textContent = "Valid email required";
    } else {
        inputValue = inputEmail.value;
        text.textContent = "";
        message.classList.remove("message");
        signUp.style.display = "none";
        spanEmail.textContent = inputValue;
    }

});


buttonBack.addEventListener("click", () => {
    message.classList.add("message");
    signUp.style.display = "flex";
    resetForm.reset();
})


