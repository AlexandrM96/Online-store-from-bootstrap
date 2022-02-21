let loginUser = document.getElementById('log'); 
let passwordUser = document.getElementById('pas');
let buttonLogin = document.getElementById('btn__login');
let regButton = document.getElementById('btn__reg');

buttonLogin.addEventListener('click', clickButtonLogin);
regButton.addEventListener('click', clickButtonRegistration);

let url = `http://1878-79-175-3-159.ngrok.io`;
let urlLog = `/auth/login`;

function clickButtonLogin(event) {
    event.preventDefault();
    let log = loginUser.value;
    let pass = passwordUser.value;
    console.log(log);
    console.log(pass);

    fetch(url + urlLog)
    .then(res => res.json())
    .then(data => {
        console.log(data);


    }); 
};

function clickButtonRegistration(event) {
    event.preventDefault();
    document.location.href = "/registration.html" // ссылка на регистрацию
};