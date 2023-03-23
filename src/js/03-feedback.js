import throttle from 'lodash.throttle';

let feedback = JSON.parse(localStorage.getItem('feedback-form-state'));
const form = document.querySelector('.feedback-form');

if (feedback) {
  document.querySelector('.feedback-form [name="email"]').value =
    feedback.email;
  document.querySelector('.feedback-form [name="message"]').value =
    feedback.message;
}

form.addEventListener(
  'input',
  throttle(e => {
    const uhm = {};
    const tmp = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (tmp) {
      uhm.email = tmp.email;
      uhm.message = tmp.message;
    } else {
      uhm.email = '';
      uhm.message = '';
    }
    localStorage.clear;

    uhm[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(uhm));
    //console.log(localStorage.getItem('feedback-form-state'));
  }),
  500
);

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(localStorage.getItem('feedback-form-state'));
  localStorage.removeItem('feedback-form-state');
  document.querySelector('.feedback-form [name="email"]').value = '';
  document.querySelector('.feedback-form [name="message"]').value = '';
});
