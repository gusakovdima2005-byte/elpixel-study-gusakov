import type { ICharacter } from "./ICharacter.js";
export declare abstract class Hero implements ICharacter {
    private _name;
    private _health;
    private _level;
    constructor(name: string, health: number, level: number);
    get name(): string;
    set name(value: string);
    get health(): number;
    set health(value: number);
    get level(): number;
    set level(value: number);
    takeDamage(amount: number): void;
    heal(amount: number): void;
    levelUp(): void;
}
//# sourceMappingURL=hero.d.ts.map