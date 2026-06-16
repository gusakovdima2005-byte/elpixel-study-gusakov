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

let employee: Employee = {
  name: "andrew",
  potision: {
    name: "programmer",
    salary: 1000,
  },
  addr: {
    country: "belarus",
    city: "minsk",
  },
};

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
