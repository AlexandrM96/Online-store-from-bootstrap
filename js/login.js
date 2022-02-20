let loginUser = document.getElementById('log'); 
let passwordUser = document.getElementById('pas');
let buttonLogin = document.getElementById('btn__login');
let regButton = document.getElementById('btn__reg');


buttonLogin.addEventListener('click', clickButtonLogin);
regButton.addEventListener('click', clickButtonRegistration);

function clickButtonLogin(event) {
    event.preventDefault();
    let login = loginUser.value;
    let password = passwordUser.value;
    console.log(login);
    console.log(password);
};

function clickButtonRegistration(event) {
    event.preventDefault(); 
};