let loginUser = document.getElementById('log'); 
let emailUser = document.getElementById('email');
let passwordUser = document.getElementById('pas');
let buttonRegister = document.getElementById('btn__reg');

buttonRegister.addEventListener('click', clickButtonRegister);

let url = `http://1878-79-175-3-159.ngrok.io`;
let urlReg = `http://1878-79-175-3-159.ngrok.io/users`;
let databaseURL = "https://online-store-b-default-rtdb.firebaseio.com";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyCvGzxmXn7cpfjREOPl6OMBtA8u8CpsJ6o",
authDomain: "online-store-b.firebaseapp.com",
databaseURL: "https://online-store-b-default-rtdb.firebaseio.com",
projectId: "online-store-b",
storageBucket: "online-store-b.appspot.com",
messagingSenderId: "31699122842",
appId: "1:31699122842:web:aea9927c029908b169fd23",
measurementId: "G-VD5B6MYB2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function clickButtonRegister(event) {
    event.preventDefault();
    //     fetch(urlReg, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       login: loginUser.value,  
    //       email: emailUser.value,
    //       password: passwordUser.value,
    //     }),
    //   })
    //   .then((response) => response.json())
    //       .then((data) => console.log(data))
    //       .catch((err) => {
    //         console.log(err);
    //        });
    var email = "myemail@email.com";
    var password = "mypassword";

firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
   console.log(error.code);
   console.log(error.message);
});
};

// fetch(`https://online-store-b-default-rtdb.firebaseio.com`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);


//     }); 