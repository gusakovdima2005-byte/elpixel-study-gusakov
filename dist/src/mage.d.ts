import { Hero } from "./hero.js";
export declare class Mage extends Hero {
    private _mana;
    private _maxMana;
    constructor(name: string, maxMana?: number);
    castSpell(cost: number, spellName: string): void;
    levelUp(): void;
}
//# sourceMappingURL=mage.d.ts.map