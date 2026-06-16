export class Hero {
    _name = "";
    _health = 0;
    _level = 0;
    constructor(name, health, level) {
        this.name = name;
        this.health = health;
        this.level = level;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.trim().length === 0) {
            console.error("У героя должно быть имя");
        }
        else if (/\d/.test(value)) {
            console.error("В имени нероя не должно содержать числа");
        }
        else {
            this._name = value;
        }
    }
    get health() {
        return this._health;
    }
    set health(value) {
        if (value <= 0) {
            this._health = 0;
        }
        else if (value > 100) {
            console.error("У героя не может быть больше 100хп");
        }
        else {
            this._health = value;
        }
    }
    get level() {
        return this._level;
    }
    set level(value) {
        this._level = value;
    }
    takeDamage(amount) {
        this.health -= amount;
        if (this.health <= 0) {
            console.log(`${this.name} погиб! Отдыхает в таверне`);
        }
    }
    heal(amount) {
        this.health += amount;
        if (this.health === 100) {
            console.log(`Здоровье ${this.name} полностью восстановлено (можно рашить)`);
        }
        else {
            console.log(`${this.name} исцелился на ${amount}. Текущее здоровье: ${this.health}`);
        }
    }
    levelUp() {
        this.level += 1;
        this.health = 100;
        console.log(`${this.name} поднялся до ${this.level} уровня! Здоровье полностью восстановлено`);
    }
}
//# sourceMappingURL=hero.js.map