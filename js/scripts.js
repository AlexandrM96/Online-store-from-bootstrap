let cardName = document.querySelectorAll('.card-title'); // имя товара
let cardImage = document.querySelectorAll('.card-img-top'); // изображение товара
let cardPrice = document.querySelectorAll('.card-price'); // цена товара
let contStar = document.querySelectorAll('.small'); // блок со звездами рейтинга
let url = `https://fakestoreapi.com/products`;

function apiRequest() { // функция для получения товара
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        for(let i = 0; i < data.length; i++) {
            for(let i = 0; i < cardName.length; i++) { // добавляет имя товара
                cardName[i].innerText = data[i].title;
            };
            for(let i = 0; i < cardImage.length; i++) { // добавляет изображение товара
                cardImage[i].src = data[i].image;
            };
            for(let i = 0; i < cardPrice.length; i++) { // добавляет цену товара
                cardPrice[i].innerText = `$${data[i].price}`;
            };
            for(let j = 0; j < Math.round(data[i].rating.rate); j++) {// добавляет рейтинг товара
               let d = document.createElement('div');
               d.className = 'bi-star-fill';
               contStar[i].append(d);
            };
        };
    }); 
};
apiRequest();

let buttonBasket = document.getElementById('btn__basket'); // кнопка корзина
let buttonAddToCard = document.querySelectorAll('.mt-auto'); //кнопки добавить в корзину
let buttonUser = document.getElementById('btn__enter') //кнопка авторизации

buttonBasket.style.marginLeft = '30px';

buttonUser.addEventListener('click', clickbButtonUser);
buttonBasket.addEventListener('click', clickButtonBasket); //обработчик событий для кнопки корзины
buttonAddToCard.forEach(buttonAddToCard => buttonAddToCard.addEventListener('click', clickButtonAddToCard));//обработчик событий для кнопок добавить в корзину

function clickButtonBasket(event) { // работа кнопки корзина 
event.preventDefault();
document.location.href = "/cart.html" // ссылка на корзину с товаром
};

function clickButtonAddToCard() { // работа кнопки добавить в корзину
    console.log('добавил');
};

function clickbButtonUser(event) { //работа кнопки авторизация
    event.preventDefault();
    document.location.href = "/login.html" // ссылка на корзину с товаром
};