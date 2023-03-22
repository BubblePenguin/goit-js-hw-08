import throttle from "lodash.throttle";

let email = localStorage.getItem("email");
let message = localStorage.getItem("message");

if (email)
  document.querySelector('.feedback-form [name="email"]').value = email;
if (message)
  document.querySelector('.feedback-form [name="message"]').value = message;

document.querySelector(".feedback-form").addEventListener(
  "input",
  throttle((e) => {
    console.log(e.target.name, e.target.value);
    localStorage.setItem(e.target.name, e.target.value);
  }),
  500
);
