/*!
* Start Bootstrap - Shop Homepage v5.0.4 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
let url = `https://fakestoreapi.com/products`;

function apiRequest() {
    fetch(url)
.then(res => res.json())
.then(data => {
    console.log(data);
});
};

apiRequest();
