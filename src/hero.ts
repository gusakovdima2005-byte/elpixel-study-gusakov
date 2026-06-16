import type { ICharacter } from "./ICharacter.js";

export abstract class Hero implements ICharacter {
  private _name: string = "";
  private _health = 0;
  private _level = 0;

  constructor(name: string, health: number, level: number) {
    this.name = name;
    this.health = health;
    this.level = level;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.trim().length === 0) {
      console.error("У героя должно быть имя");
    } else if (/\d/.test(value)) {
      console.error("В имени нероя не должно содержать числа");
    } else {
      this._name = value;
    }
  }

  get health(): number {
    return this._health;
  }

  set health(value: number) {
    if (value <= 0) {
      this._health = 0;
    } else if (value > 100) {
      console.error("У героя не может быть больше 100хп");
    } else {
      this._health = value;
    }
  }

  get level(): number {
    return this._level;
  }
  set level(value: number) {
    this._level = value;
  }

  public takeDamage(amount: number): void {
    this.health -= amount;
    if (this.health <= 0) {
      console.log(`${this.name} погиб! Отдыхает в таверне`);
    }
  }

  public heal(amount: number): void {
    this.health += amount;
    if (this.health === 100) {
      console.log(
        `Здоровье ${this.name} полностью восстановлено (можно рашить)`,
      );
    } else {
      console.log(
        `${this.name} исцелился на ${amount}. Текущее здоровье: ${this.health}`,
      );
    }
  }
  public levelUp(): void {
    this.level += 1;
    this.health = 100;
    console.log(
      `${this.name} поднялся до ${this.level} уровня! Здоровье полностью восстановлено`,
    );
  }
}
