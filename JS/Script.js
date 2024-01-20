(function() {
  'use strict';

  document.getElementById('emailForm').addEventListener('submit', function (evt) {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(emailInput.value)) {
      emailError.textContent = 'Please check your email.';
      evt.preventDefault();
      emailInput.focus();
    } else {
      emailError.textContent = '';
    }
  })

}());