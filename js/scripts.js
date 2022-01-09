const button = document.querySelector(".toggle__label");
const prices = document.getElementsByClassName("card__price");

button.addEventListener("mouseup", function () {
    for (let i = 0; i < prices.length; i++) {
        let price = prices[i];
        let clase = price.classList;
        clase.toggle('card__price--annually');
    }
});