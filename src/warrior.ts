import { Hero } from "./hero.js";

export class Warrior extends Hero {
  private _armor: number;

  constructor(name: string, armor: number) {
    super(name, 100, 1);
    this._armor = armor;
  }

  public override takeDamage(amount: number): void {
    const finalDamage = Math.max(0, amount - this._armor);

    const absorbedDamage = amount - finalDamage;

    this.health -= finalDamage;
    console.log(`Броня ${this.name} поглотила ${absorbedDamage} урона`);
    console.log(`${this.name} получил ${finalDamage}. ХП: ${this.health}`);
    if (this.health <= 0) {
      console.log(`${this.name} погиб! Отдыхает в таверне.`);
    }
  }
}
