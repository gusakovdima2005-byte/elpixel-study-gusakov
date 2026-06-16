import { Hero } from "./hero.js";
export class Archer extends Hero {
    _arrowCount;
    constructor(name, arrowCount) {
        super(name, 100, 1);
        this._arrowCount = arrowCount;
    }
    shoot() {
        if (this._arrowCount > 0) {
            this._arrowCount--;
            console.log(`${this.name} сделал выстрел! Осталось стрел: ${this._arrowCount}`);
        }
        else {
            console.log(`У ${this.name} стрел нет, нужна перезарядка!`);
        }
    }
    restockArrows(amount) {
        this._arrowCount += amount;
        console.log(`${this.name} пополнил запас на ${amount} стрел. Всего: ${this._arrowCount}`);
    }
}
//# sourceMappingURL=archer.js.map