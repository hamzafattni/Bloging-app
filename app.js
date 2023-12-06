import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./config.js"

// console.log(auth);

const form = document.querySelector('#form')
const firstName = document.querySelector('#first-names')
const lastName = document.querySelector('#last-names')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const repeatPassword = document.querySelector('#repeat-password')




form.addEventListener('submit', (event) => {
    event.preventDefault()
createUserWithEmailAndPassword(auth, email.value, password.value,)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    email.value = ''
    email.password = ''
    window.location = './login.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
})