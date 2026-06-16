import { Hero } from "./hero.js";
export class Mage extends Hero {
    _mana;
    _maxMana;
    constructor(name, maxMana = 100) {
        super(name, 100, 1);
        this._maxMana = maxMana;
        this._mana = maxMana;
    }
    castSpell(cost, spellName) {
        if (this._mana < cost) {
            console.log(`Недостаточно маны для заклинания "${spellName}"`);
            return;
        }
        this._mana -= cost;
        console.log(`${this.name} применил "${spellName}"! Осталось маны: ${this._mana}`);
    }
    levelUp() {
        super.levelUp();
        this._mana = this._maxMana;
        console.log(`Мана полностью восстановлена: ${this._mana}`);
    }
}
//# sourceMappingURL=mage.js.map