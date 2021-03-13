class UI {

    constructor(firstSelect, secondSelect) {
        this.firstSelect = firstSelect;
        this.secondSelect = secondSelect;

        this.outputFirst = document.getElementById("outputFirst");
        this.outputSecond = document.getElementById("outputSecond");
        this.outputResult = document.getElementById("outputResult");
    }

    changeFirst() {
        this.outputFirst.innerHTML = this.firstSelect.options[this.firstSelect.selectedIndex].textContent;
    }

    changeSecond() {
        this.outputSecond.innerHTML = this.secondSelect.options[this.secondSelect.selectedIndex].textContent;
    }

    static displayExchange(result) {
        outputResult.value = result;
    }
}