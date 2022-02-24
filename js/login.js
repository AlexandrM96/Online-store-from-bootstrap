let loginUser = document.getElementById('log'); 
let passwordUser = document.getElementById('pas');
let buttonLogin = document.getElementById('btn__login');
let regButton = document.getElementById('btn__reg');

buttonLogin.addEventListener('click', clickButtonLogin);
regButton.addEventListener('click', clickButtonRegistration);

let url = `http://1878-79-175-3-159.ngrok.io`;
let urlLog = `/auth/login`;

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

function clickButtonLogin(event) {
    event.preventDefault();
    // let log = loginUser.value;
    // let pass = passwordUser.value;
    // console.log(log);
    // console.log(pass);

    // fetch(url + urlLog)
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data);


    // }); 
    var email = "myemail@email.com";
    var password = "mypassword";
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        console.log(error.code);
        console.log(error.message);
});
};

function clickButtonRegistration(event) {
    event.preventDefault();
    document.location.href = "/registration.html" // ссылка на регистрацию
};