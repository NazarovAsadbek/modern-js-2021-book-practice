export default class ChapterOne {
    constructor() {
        this.numberOne = 1;
        this.numberTwo = 2;
        this.numberThrree = 3;
    }
    innerText() {
        const elem = document.createElement('h3');
        elem.textContent = this.numberOne + this.numberTwo;
        document.querySelector('body').appendChild(elem)
    }
    init() {
        this.innerText()
    }
}
