let cardName = document.querySelectorAll('.card-title');
let cardImage = document.querySelectorAll('.card-img-top');
let cardPrice = document.querySelectorAll('.card-price');
let url = `https://fakestoreapi.com/products`;

function apiRequest() {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        for(let i = 0; i < data.length; i++) {
            for(let i = 0; i < cardName.length; i++) {
                cardName[i].innerText = data[i].title;
            };
            for(let i = 0; i < cardImage.length; i++) {
                cardImage[i].src = data[i].image;
            };
            for(let i = 0; i < cardPrice.length; i++) {
                cardPrice[i].innerText = `$${data[i].price}`;
            };
        };
    }); 
};
apiRequest();

let buttonBasket = document.getElementById('btn__basket'); // кнопка корзина
let buttonAddToCard = document.querySelectorAll('.mt-auto'); //кнопки добавить в корзину

buttonBasket.addEventListener('click', clickButtonBasket);
buttonAddToCard.forEach(buttonAddToCard => buttonAddToCard.addEventListener('click', clickButtonAddToCard));

function clickButtonBasket() { // работа кнопки корзина 
console.log('нажал на корзину');
};

function clickButtonAddToCard() { // работа кнопки добавить в корзину
    console.log('добавил');
}