import { Hero } from "./hero.js";

export class Archer extends Hero {
  private _arrowCount: number;

  constructor(name: string, arrowCount: number) {
    super(name, 100, 1);
    this._arrowCount = arrowCount;
  }

  public shoot(): void {
    if (this._arrowCount > 0) {
      this._arrowCount--;
      console.log(
        `${this.name} сделал выстрел! Осталось стрел: ${this._arrowCount}`,
      );
    } else {
      console.log(`У ${this.name} стрел нет, нужна перезарядка!`);
    }
  }

  public restockArrows(amount: number): void {
    this._arrowCount += amount;
    console.log(
      `${this.name} пополнил запас на ${amount} стрел. Всего: ${this._arrowCount}`,
    );
  }
}
