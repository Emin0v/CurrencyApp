const amountElement = document.getElementById("amount");
const firstSelect = document.getElementById("firstCurrency");
const secondSelect = document.getElementById("secondCurrency");

const ui = new UI(firstSelect,secondSelect);

const currency = new Currency(null, "USD", "TRY");
eventListeners();
function eventListeners() {

    amountElement.addEventListener("input", exchangeCurrency);


    firstSelect.onchange = function () {
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
        ui.changeFirst();
    };

    secondSelect.onchange = function () {
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.changeSecond();
    };
}

function exchangeCurrency() {
    currency.changeAmount(amountElement.value);
}
