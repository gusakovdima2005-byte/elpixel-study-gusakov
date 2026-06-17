// Тема 6: Массивы

// 1. С помощью первого способа укажите тип данных в следующем массиве: let arr = [1, 2, 3, 4, 5];

// let arr : number[] = [1, 2, 3, 4, 5];

// 2. С помощью второго способа укажите тип данных в следующем массиве:

// let arr : Array<number> = [1, 2, 3, 4, 5];

// Тема 7: Объекты

// 1. Сделайте объект, содержащий год, месяц и день в соответствующих ключах.

// const date = {
//     year : 2026,
//     month : 'июнь',
//     day :  15
// }

// Тема 11 : Цикл for в TypeScript
// 1. Перепишите следующий код через TypeScript:

// let res = 0;

// for (let i : number = 0; i < 100; i++) {
// 	res += i;
// }

// console.log(res);

// Тема 12 : Цикл for-of в TypeScript
// 1. Перепишите следующий код через TypeScript:

// let arr : number[] = [1, 2, 3, 4, 5];
// let res = 0;

// for (let elem of arr) {
// 	res += elem;
// }

// console.log(res);

// Тема 14 : Функции

// 1. Укажите тип результату и параметрам функции:

// function sum(x : number, y : number) : number {
// 	return x + y;
// }

// 2. Укажите тип результату и параметрам функции:

// function sum(arr: number[]): number {
//   let res = 0;

//   for (let num of arr) {
//     res += num;
//   }

//   return res;
// }

// Тема 15 :  Пустой результат функции в TypeScript

// 1 . Укажите тип возвращаемого значения:

// function func(text: string): void {
//   console.log(text);
// }

// Тема 17 : Тип any в массивах
// 1. Перепишите следующий код через TypeScript:

let arr: any[] = [1, "2", "3", 4, 5];
console.log(arr);

// Тема 18 : Объединение типов
// 1. Сделайте переменную, которая может быть либо числом, либо null.

let value: number | null = 67;
value = null;

// 2. Сделайте переменную, которая может быть либо числом, либо строкой, либо логической.
let val: number | string | boolean = true;
val = 67;
val = "67";

// Тема 19 : Псевдонимы типов в TypeScript

// 1. Создайте новый тип, объединяющий null и undefined.

type nulfined = null | undefined;

// 2. Создайте новый тип, объединяющий логический тип, null и undefined.

type nulfinedbool = null | undefined | boolean;

// Тема 20 : Тип строкового литерала

// 1. Сделайте так, чтобы переменная могла принимать одно из трех значений:
// 'error', 'warning' или 'success'.
let response: "error" | "warning" | "success";

// Тема 21 : Псевдонимы для объединения строк

// 1. Сделайте тип данных, который будет разрешать переменной принимать одно из трех значений:
// 'error', 'warning' или 'success'.

type message = "error" | "warning" | "success";

// Тема 22 : Кортежи

// 1. Сделайте кортеж, который будет хранить номер года и номер месяца.

// let date : [number, number] = [2026, 5]

// 2. Сделайте кортеж, который будет хранить номер года и название месяца.

// let date : [number, string] = [2026, 'январь']

// 3. Сделайте кортеж, который будет хранить номер года, номер месяца и номер дня.

// let date : [number, number, number] = [2026, 6, 15]

// Тема 25 : Необязательные элементы кортежей

// 1. Заполните данными следующий кортеж:

// let date: [number, number?, number?] = [2026];

// Тема 26 : Деструктуризация кортежа

// 1. Дан следующий кортеж: let time: [number, number, number] = [12, 59, 59];
// Разбейте части времени в отдельные переменные.

let time: [number, number, number] = [12, 59, 59];

let [hours, minutes, seconds] = time;

// Тема 27 : Заполнение кортежа

// 1. Заполните данными следующий кортеж: let tpl: [string, string, ...number[]];

// let tpl: [string, string, ...number[]] = ['hello', 'world', 3, 5 ,6 , 7]

// 2.Заполните данными следующий кортеж: let tpl: [number, boolean, ...string[]];

let tpl: [number, boolean, ...string[]] = [67, true, "fa", "fafa"];

// Тема 28 : Перечисления

// 1. Перечисления

enum Week {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

// Тема 32 : Явные ключи перечислений

// 1. Сделайте перечисление Months и задайте в нем номера всем месяцам в году.
// Выведите в консоль первый и пятый месяцы.

enum Months {
  January = 1,
  Fabruary = 2,
  March = 3,
  April = 4,
  May = 5,
  June = 6,
  July = 7,
  August = 8,
  September = 9,
  October = 10,
  November = 11,
  December = 12,
}

let firstMonth: string = Months[1] || "";
let fiveMonth: string = Months[5] || "";

console.log(firstMonth, fiveMonth);

// Тема 34 : Строковые перечисления в TypeScript

// 1. Сделайте перечисление с названиями дней недели.

enum DaysWeek {
  Monday = "понедельник",
  Tuesday = "вторник",
  Wednesday = "среда",
  Thursday = "четверг",
  Friday = "пятница",
  Saturday = "суббота",
  Sunday = "воскресенье",
}

// 2. Сделайте перечисление с названиями месяцев.

enum Month {
  January = "январь",
  Fabruary = "февраль",
  March = "март",
  April = "апрель",
  May = "май",
  June = "июнь",
  July = "июль",
  August = "август",
  September = "сентябрь",
  October = "октябрь",
  November = "ноябрь",
  December = "декабрь",
}

// Тема 36 : Дата

// 1. Сделайте переменную, которая будет содержать объект с датой.

let date: Date = new Date();

// Тема 37 : Регулярки

// 1. Сделайте переменную, которая будет содержать регулярное выражение.

let reg: RegExp = /.+?/;

// Тема 38 : Тип HTMLElement

// 1. Сделайте переменную, которая будет содержать promise.

let promise: Promise<string>;

// 2. Сделайте переменную, которая будет содержать DOM элемент.

let divElem: HTMLDivElement;

// 3. Сделайте переменную, которая будет содержать ссылку на тег ul.
let ul: HTMLUListElement;

// Тема 39 : Коллекции

// 1. Сделайте переменную, которая будет содержать коллекцию Map.
let map: Map<string, string>;

// 2. Сделайте переменную, которая будет содержать коллекцию Set.
let set: Set<string>;

// 3. Сделайте переменную, которая будет содержать коллекцию NodeList.

let divList: NodeList;

// 4. Сделайте переменную, которая будет содержать коллекцию HTMLCollection.
let htmlCol: HTMLCollection;

// Тема 42 : Интерфейсы

// 1. Создайте три объекта, реализующих следующий интерфейс:
// interface Employee {
//   name: string;
//   age: number;
//   salaryday: number;
// }

// const employee1: Employee = { name: "Иван", age: 30, salaryday: 5000 };
// const employee2: Employee = { name: "Мария", age: 28, salaryday: 6000 };
// const employee3: Employee = { name: "Петр", age: 35, salaryday: 4500 };

// 2. Создайте три объекта, реализующих следующий интерфейс:
interface Time {
  hour: number;
  minute: number;
  second: number;
}

const time1: Time = { hour: 10, minute: 30, second: 0 };
const time2: Time = { hour: 14, minute: 45, second: 15 };
const time3: Time = { hour: 23, minute: 59, second: 59 };

// Тема 43 : Массивы в объектах

// 1. Сделайте объект со страной, содержащий название страницы и массив ее городов.
let country: { name: string; cities: string[] } = {
  name: "Беларусь",
  cities: ["Минск", "Гомель", "Брест", "Витебск", "Гродно", "Могилёв"],
};

// Тема 45 : Сложные объекты

// 1. Сделайте интерфейс, описывающий структуру этого объекта.

interface Event {
  name: string;
  time: {
    start: string;
    finish: string;
  };
}

let event: Event = {
  name: "my new event",
  time: {
    start: "2025-11-01",
    finish: "2025-12-31",
  },
};

// 2. Сделайте интерфейс, описывающий структуру этого объекта
// interface Employee {
//   name: string;
//   potision: {
//     name: string;
//     salary: number;
//   };
//   addr: {
//     country: string;
//     city: string;
//   };
// }

// let employee: Employee = {
//   name: "andrew",
//   potision: {
//     name: "programmer",
//     salary: 1000,
//   },
//   addr: {
//     country: "belarus",
//     city: "minsk",
//   },
// };

// Тема 46 : Объекты в объектах

// 1. Сделайте интерфейс, описывающий структуру этого объекта.
//    Вынесите вложенные объекты в отдельные интерфейсы.

interface Position {
  name: string;
  salary: number;
}

interface Address {
  country: string;
  city: string;
}

interface Employee {
  name: string;
  potision: Position;
  addr: Address;
}

// let employee: Employee = {
//   name: "andrew",
//   potision: {
//     name: "programmer",
//     salary: 1000,
//   },
//   addr: {
//     country: "belarus",
//     city: "minsk",
//   },
// };

// 2. Сделайте интерфейс, описывающий структуру этого объекта.
//    Вынесите вложенные объекты в отдельные интерфейсы.

interface Parent {
  name: string;
  age: number;
  parents: null;
}

interface Parents {
  mother: Parent;
  father: Parent;
}

interface User {
  name: string;
  age: number;
  parents: Parents;
}

let user: User = {
  name: "john",
  age: 30,
  parents: {
    mother: { name: "jane", age: 30, parents: null },
    father: { name: "eric", age: 30, parents: null },
  },
};

// Тема 47 : Массивы объектов

// 1. Сделайте массив, элементы которого будут регулярными выражениями.

let regArr: RegExp[] = [/[a-z]+/, /\d{3}/, /^hello/];

// 2. Сделайте массив, элементы которого будут промисами.

let promiseArr: Promise<string>[] = [
  new Promise((res) => setTimeout(() => res("ok"), 100)),
  Promise.resolve("done"),
  Promise.reject(new Error("fail")).catch(() => "error"),
];

// 3. Сделайте интерфейс, описывающий работника.
//    Сделайте массив, состоящий из объектов с этими работниками.

interface Worker {
  name: string;
  position: string;
  salary: number;
}

let workers: Worker[] = [
  { name: "Иван", position: "разработчик", salary: 3000 },
  { name: "Мария", position: "дизайнер", salary: 2500 },
  { name: "Петр", position: "тестировщик", salary: 2000 },
];

// Тема 49 : Необязательные параметры функций

// 1. Сделайте функцию, которая принимать параметрами день, месяц и год, и
//    возвращать день недели, соответствующий этой дате. Пусть все три
//    параметра будут не обязательными. Если какой-то параметр не передан,
//    он должен принять значение, соответствующее текущей дате.

const getDateOfWeek = (day?: number, month?: number, year?: number): string => {
  const d = day ?? new Date().getDate();
  const m = month !== undefined ? month - 1 : new Date().getMonth();
  const y = year ?? new Date().getFullYear();
  const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  return days[new Date(y, m, d).getDay()] || "";
};

// Тема 50 : Значения параметров по умолчанию
// 1. Сделайте функцию, которая будет возводить число в заданную степень.
//    Пусть первым параметром функция принимает число, а вторым - степень.
//    Пусть второй параметр будет необязательным, и по умолчанию функция
//    возводит число во вторую степень.

const pow = (num: number, exp: number = 2): number => {
  return num ** exp;
};

// Тема 51 : Rest параметры функции

// 1. Сделайте функцию, которая параметрами принимает любое количество чисел, а возвращает их сумму.

const sum = (...nums: number[]): number => {
  return nums.reduce((acc, n) => acc + n, 0);
};

// Тема 52 : Тип функций

// 1. Укажите переменной тип функции:

let func: (text: string) => void = function (text: string): void {
  alert(text);
};

// Тема 53 : Свой тип с функцией

// 1. Сделайте функцию данного типа. Пусть функция параметром получает
//    три числа, а своим результатом возвращает сумму этих чисел.

// type Func = (x: number, y: number, z: number) => number;

// let func53: Func = (a, b, c) => a + b + c;

// 2. Объявите тип функции, параметром принимающей число и массив чисел,
//    а результатом возвращающий массив чисел.

type NumArrFunc = (num: number, arr: number[]) => number[];

// Тема 54 : Функции-коллбэки

// 1. Расскажите, каким будет результат выполнения следующего кода:

type Func = (num: number) => number;

function make(arr: number[], func: Func): number[] {
  return arr.map(function (elem: number) {
    return func(elem);
  });
}

let res: number[] = make([1, 2, 3], function (num: number): number {
  return num ** 2;
});

console.log(res); // [1, 4, 9]

// 2. Найдите и исправьте ошибки, допущенные в следующем коде:

type Func54 = (num: number) => number;

function make54(arr: number[], func: Func54): number {
  let sum = 0;

  for (let elem of arr) {
    sum += func(elem);
  }

  return sum;
}

let res54: number = make54([1, 2, 3], function (num: number): number {
  return num ** 2;
});

console.log(res54);

// 55 Тема : Стрелочные функции

// 1. Переделайте следующую функцию на стрелочную:

let func55_1 = (num1: number, num2: number): number => num1 + num2;

// 2. Переделайте следующую функцию на стрелочную:

let func55_2 = (str: string): string[] => str.split("");

// 3. Перепишите следующий JavaScript код на TypeScript вариант:

let arr55: number[] = [1, 2, 3];
let res55: number[] = arr55.map((num: number): number => num ** 2);

// ООП

// Классы ООП

// 1. Объявите класс Employee.

// class Employee {}

// Создание объектов ООП классов

// 1. Создайте два объекта класса Employee.

// let employee1 = new Employee();

// let employee2: Employee = new Employee();

// Свойства ООП класса

// 1. Создайте класс Student со свойствами name и age.

// class Student {
//   name: string = "Dmitriy";
//   age: number = 20;
// }

// Методы классов в ООП

// 1. Создайте класс Student со свойствами name и age. Добавьте методы для получения и изменения этих свойств.

// class Student {
//   name: string = "Dmitriy";
//   age: number = 20;

//   getName(): string {
//     return this.name;
//   }
//   setName(value: string): void {
//     this.name = value;
//   }

//   getAge(): number {
//     return this.age;
//   }
//   setAge(value: number): void {
//     this.age = value;
//   }
// }

// Конструктор класса в ООП

// 1. Создайте класс Employee, в конструктор которого передайте имя, фамилию, возраст и зарплату работника.

// class Employee {
//   firstName: string;
//   lastName: string;
//   age: number;
//   salary: number;

//   constructor(
//     firstName: string,
//     lastName: string,
//     age: number,
//     salary: number,
//   ) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.salary = salary;
//   }
// }

// Наследование ООП классов

// 1. Создайте класс Employee, который наследует от класса User.

// class User {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// class Employee extends User {
//   salary: number;

//   constructor(name: string, salary: number) {
//     super(name);
//     this.salary = salary;
//   }
// }

// Модификатор public

// 1. Сделайте класс User, который будет содержать публичные свойства с именем и годом рождения пользователя.
//    Сделайте публичный метод getAge, который будет получать возраст пользователя по году его рождения.

class User2 {
  public name: string = "Дима";
  public yearOfBirthday: number = 2005;

  public getAge(): number {
    const currentYear = new Date().getFullYear();
    return currentYear - this.yearOfBirthday;
  }
}

// Модификатор private

// 1. Сделайте класс User, содержащий приватные свойства с именем и возрастом. Пусть их начальные значения задаются через конструктор.
// 2. В вашем классе User сделайте публичные методы getName и getAge, позволяющие получить значения соответствующих приватных свойств.
// 3. В вашем классе User сделайте публичные методы setName и setAge, позволяющие изменить значения соответствующих приватных свойств.
class User10 {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public getName(): string {
    return this.name;
  }
  public setName(value: string): void {
    this.name = value;
  }
  public getAge(): number {
    return this.age;
  }

  public setAge(value: number): void {
    this.age = value;
  }
}

// Модификатор protected

// 1. Дан следующий класс:

class User11 {
  protected name: string;
  protected surn: string;

  constructor(name: string, surn: string) {
    this.name = name;
    this.surn = surn;
  }
}
// Унаследуйте от этого класса класс Employee, который добавит защищенное свойство salary, а также геттеры всех свойств, как своих, так и унаследованных.

class Employee11 extends User11 {
  protected salary: number;

  constructor(name: string, surn: string, salary: number) {
    super(name, surn);
    this.salary = salary;
  }

  public getName(): string {
    return this.name;
  }
  public setName(value: string): void {
    this.name = value;
  }

  public getSurn(): string {
    return this.surn;
  }
  public setSurn(value: string): void {
    this.surn = value;
  }
  public getSalary(): number {
    return this.salary;
  }
  public setSalary(value: number): void {
    this.salary = value;
  }
}

// Модификатор readonly

// 1. Задайте классу User свойство age, доступное только для чтения. Создайте объект данного класса и выведите его возраст на экран.

class User12 {
  readonly age: number;
  constructor(age: number) {
    this.age = age;
  }
}

const user12: User12 = new User12(20);
console.log(user12.age);

// Аксессоры в ООП

// 1. Сделайте класс User, содержащий приватные свойства с именем и возрастом. Сделайте аксессоры этих свойств.
// 2. Модифицируйте сеттер возраста так, чтобы можно было задать возраст от 0 до 120. Если же будет указано иное значение, должно выбрасываться исключение.
class User13 {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get age(): number {
    return this._age;
  }

  public set age(age: number) {
    if (!(age >= 0 && age <= 120)) {
      console.error("Возраст от 0 до 120");
    } else {
      this._age = age;
    }
  }
}

// Статические свойства

// 1. В класс Student добавьте статическое свойство specialty. Выведите данное свойство без объявления объекта.
// 2. В класс Student добавьте статическое свойство university. Выведите данное свойство без объявления объекта.
class Student14 {
  public static speciality: string = "ПРО-31";
  public static university: string = "ГГУ";
}

console.log(Student14.speciality);
console.log(Student14.university);

// 3. В класс Calc добавьте методы, которые будут находить сумму квадратов и сумму кубов элементов массивов.
class Calc {
  public static getSum(arr: number[]): number {
    let sum: number = 0;

    for (let elem of arr) {
      sum += elem;
    }

    return sum;
  }

  public static getSumOfSquares(arr: number[]): number {
    let sum: number = 0;

    for (let elem of arr) {
      sum += elem ** 2;
    }

    return sum;
  }

  public static getSumOfCubes(arr: number[]): number {
    let sum: number = 0;

    for (let elem of arr) {
      sum += elem ** 3;
    }

    return sum;
  }
}

//  Абстрактные ООП классы

// 1. Создайте абстрактный класс Figure, представляющий собой геометрическую фигуру. Пусть в нем будут свойства для периметра и площади.
// 2. Сделайте класс Square, наследующий от класса Figure.
// 3. Сделайте класс Rectangle, наследующий от класса Figure
// abstract class Figure {
//   private _perimetr: number;
//   private _square: number;

//   constructor(perimetr: number, square: number) {
//     this._perimetr = perimetr;
//     this._square = square;
//   }
// }

// class Square extends Figure {}

// class Rectangle extends Figure {}

// Абстрактные методы в ООП
// 1. В абстрактном классе Figure сделайте абстрактные методы для получения площади и периметра.
// 2. В классах-потомках Square и Rectangle напишите реализацию этих методов.

abstract class Figure {
  abstract getSquare(): number;
  abstract getPerimetr(): number;
}

class Square extends Figure {
  private side: number;

  constructor(side: number) {
    super();
    this.side = side;
  }

  public getSquare(): number {
    return this.side ** 2;
  }

  public getPerimetr(): number {
    return this.side * 4;
  }
}

class Rectangle extends Figure {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  public getSquare(): number {
    return this.width * this.height;
  }

  public getPerimetr(): number {
    return 2 * (this.width + this.height);
  }
}

// Свойства интерфейсов

// 1. Создайте интерфейс IMath со свойствами num1 и num2.

interface IMath {
  num1: number;
  num2: number;
}
// 2. Реализуйте объект calc созданного выше интерфейса.

const calc: IMath = {
  num1: 10,
  num2: 15,
};

// Методы интерфейсов

// 1. Для интерфейса IUser, реализуйте метод для проверки возраста. Если возраст юзера меньше 18, пусть отобразится сообщение о том, что доступ запрещен.
interface IUser {
  name: string;
  age: number;

  greet(text: string): string;
  checkAge(age: number): string;
}

let user21: IUser = {
  name: "john",
  age: 30,

  greet(text: string): string {
    return text + ", " + this.name;
  },
  checkAge(age: number): string {
    if (age < 18) {
      return "Доступ запрещен";
    } else {
      return "Доступ разрешен";
    }
  },
};

// 2. Создайте интерфейс IMath со свойствами num1 и num2, а также методом getSum, который будет суммировать оба числа.
interface IMath21 {
  num1: number;
  num2: number;

  getSum(): number;
}

const calc21: IMath21 = {
  num1: 10,
  num2: 15,
  getSum(): number {
    return this.num1 + this.num2;
  },
};

console.log(calc21.getSum());

// Опциональные свойства интерфейса

// 1. Сделайте интерфейс IDate для объекта, хранящего дату: год, месяц и день. Пусть все свойства объекта будут необязательными.

interface IDate {
  year?: number;
  month?: string;
  day?: number;
}

let date22: IDate = {};

// Свойства только для чтения в интерфейсе

// 1. Создайте интерфейс IUser, в котором свойство salary будет доступным только для чтения.

interface IUser23 {
  name: string;
  readonly salary: number;
}

let user23: IUser23 = {
  name: "Дима",
  salary: 100,
};

// Интерфейс для функции

// 1. Создайте интерфейс для функции, параметром принимающей две строки и возвращающей эти строки, сложенные через пробел.

interface IConcat {
  (str1: string, str2: string): string;
}

const concat: IConcat = (str1, str2) => `${str1} ${str2}`;
console.log(concat("Привет", "мир"));

// 2. Создайте интерфейс для функции, параметром принимающей число и возвращающей массив делителей этого числа.

interface IGetDivisors {
  (num: number): number[];
}

const getDivisors: IGetDivisors = (num) => {
  const divisors: number[] = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
};
console.log(getDivisors(12));

// 3. Создайте интерфейс для функции, параметром принимающей строку и возвращающей массив слов из этой строки.

interface IGetWords {
  (str: string): string[];
}

const getWords: IGetWords = (str) => str.split(" ");
console.log(getWords("Hello world from TypeScript"));

// Индексируемый тип для массивов

// 1. Создайте интерфейс, описывающий массив со значениями в виде чисел.

interface INumberArray {
  [index: number]: number;
}

const numsArray: INumberArray = [1, 2, 3, 4, 5];
console.log(numsArray);

// Индексируемый тип для объектов

// 1. Создайте интерфейс, описывающий объект с ключами в виде чисел, а значениями в виде строк.

interface IStringDict {
  [key: number]: string;
}

const dict: IStringDict = {
  0: "ноль",
  1: "один",
  2: "два",
};
console.log(dict);

// Интерфейсы для ООП классов

// 1. Создайте интерфейс IMath со свойствами num1 и num2 и методом getDiv, который будет делить первое число на второе.

interface IMathClass {
  num1: number;
  num2: number;
  getDiv(): number;
}

// 2.Сделайте класс Math, который реализует интерфейс IMath.

class MathClass implements IMathClass {
  public num1: number;
  public num2: number;

  constructor(num1: number, num2: number) {
    this.num1 = num1;
    this.num2 = num2;
  }

  public getDiv(): number {
    return this.num1 / this.num2;
  }
}

const mathObj = new MathClass(10, 2);
console.log(mathObj.getDiv());

// Расширение интерфейсов в ООП

// 1. Создайте интерфейс IProgrammer со свойствами salary и language. Пусть данный интерфейс наследует IUser со свойствами name, birthday.

interface IUserExt {
  name: string;
  birthday: string;
}

interface IProgrammer extends IUserExt {
  salary: number;
  language: string;
}

// 2. Сделайте класс Employee, который реализует IProgrammer.

class EmployeeExt implements IProgrammer {
  public name: string;
  public birthday: string;
  public salary: number;
  public language: string;

  constructor(
    name: string,
    birthday: string,
    salary: number,
    language: string,
  ) {
    this.name = name;
    this.birthday = birthday;
    this.salary = salary;
    this.language = language;
  }
}

const emp: EmployeeExt = new EmployeeExt(
  "Дима",
  "2005-11-10",
  3000,
  "TypeScript",
);
console.log(emp);

// Типовые переменные

// 1. Сделайте функцию, которая параметром принимает или два числа, или две строки. Своим результатом функция должна возвращать сумму параметров.

function getSumParams<T extends number | string>(val1: T, val2: T): T {
  if (typeof val1 === "number" && typeof val2 === "number") {
    return (val1 + val2) as unknown as T;
  }
  if (typeof val1 === "string" && typeof val2 === "string") {
    return (val1 + val2) as unknown as T;
  }
  throw new Error("Неподдерживаемый тип");
}

// Обобщенные типовые переменные

// 1. Напишите функцию для перебора и вывода всех элементов массива обобщенного типа в консоль.

function printAllElements<T>(arr: T[]): void {
  for (let elem of arr) {
    console.log(elem);
  }
}

printAllElements([1, 2, 3, 4, 5]);
printAllElements(["a", "b", "c"]);

// Функцию обобщенного типа

// 1. Напишите функцию для определения длины массива обобщенного типа в вариантах, описанных в данном уроке.

function getLength<T>(arr: T[]): number {
  return arr.length;
}

let func1: <T>(arr: T[]) => number = getLength;

let func2: <U>(arr: U[]) => number = getLength;

let func3: { <U>(arr: U[]): number } = getLength;

// Ограничения обобщений

// 1 . На основе примера, рассмотренного в уроке, задайте функцию для нахождения длины числового массива.

function logArrayLength<T extends { nums: number[] }>(data: T): void {
  console.log(data.nums.length);
}
