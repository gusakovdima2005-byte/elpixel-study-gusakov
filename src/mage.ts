import { Hero } from "./hero.js";

export class Mage extends Hero {
  private _mana: number;
  private _maxMana: number;

  constructor(name: string, maxMana: number = 100) {
    super(name, 100, 1);
    this._maxMana = maxMana;
    this._mana = maxMana;
  }
  public castSpell(cost: number, spellName: string): void {
    if (this._mana < cost) {
      console.log(`Недостаточно маны для заклинания "${spellName}"`);
      return;
    }
    this._mana -= cost;
    console.log(
      `${this.name} применил "${spellName}"! Осталось маны: ${this._mana}`,
    );
  }
  public override levelUp(): void {
    super.levelUp();
    this._mana = this._maxMana;
    console.log(`Мана полностью восстановлена: ${this._mana}`);
  }
}
