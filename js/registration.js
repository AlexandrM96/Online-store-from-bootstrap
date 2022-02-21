let loginUser = document.getElementById('log'); 
let emailUser = document.getElementById('email');
let passwordUser = document.getElementById('pas');
let buttonRegister = document.getElementById('btn__reg');

buttonRegister.addEventListener('click', clickButtonRegister);

let url = `http://1878-79-175-3-159.ngrok.io`;
let urlReg = `/users`;

function clickButtonRegister(event) {
    event.preventDefault();
    let log = loginUser.value;
    let pass = passwordUser.value;
    let mail = emailUser.value;
    console.log(log);
    console.log(pass);
    console.log(mail);

    fetch(url + urlReg)
    .then(res => res.json())
    .then(data => {
        console.log(data);


    }); 
};