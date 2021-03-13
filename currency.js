class Currency {
    constructor(amount, firstCurrency, secondCurrency) {
        this.amount = amount;
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;

    }

    exchange = async function () {

        const url = `https://api.exchangeratesapi.io/latest?base=${this.firstCurrency}`;
        const response = await fetch(url);
        const data = await response.json();
        const rate = data.rates[this.secondCurrency];
        const answer = rate * Number(this.amount);
        return answer;
    };

    changeAmount(newAmount) {
        this.amount = newAmount;
        this.calculate();
    };

    changeFirstCurrency(newFirstCurrency) {
        this.firstCurrency = newFirstCurrency;
        this.calculate();
    }

    changeSecondCurrency(newSecondCurrency) {
        this.secondCurrency = newSecondCurrency;
        this.calculate();
    }

    calculate() {
        this.exchange().then((response) => {
            UI.displayExchange(response);
        })
            .catch(err => console.log(err));
    }
}