import { Hero } from "./hero.js";
export class Warrior extends Hero {
    _armor;
    constructor(name, armor) {
        super(name, 100, 1);
        this._armor = armor;
    }
    takeDamage(amount) {
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
//# sourceMappingURL=warrior.js.map