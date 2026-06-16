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
let arr = [1, "2", "3", 4, 5];
console.log(arr);
// Тема 18 : Объединение типов
// 1. Сделайте переменную, которая может быть либо числом, либо null.
let value = 67;
value = null;
// 2. Сделайте переменную, которая может быть либо числом, либо строкой, либо логической.
let val = true;
val = 67;
val = "67";
// Тема 20 : Тип строкового литерала
// 1. Сделайте так, чтобы переменная могла принимать одно из трех значений:
// 'error', 'warning' или 'success'.
let response;
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
let time = [12, 59, 59];
let [hours, minutes, seconds] = time;
// Тема 27 : Заполнение кортежа
// 1. Заполните данными следующий кортеж: let tpl: [string, string, ...number[]];
// let tpl: [string, string, ...number[]] = ['hello', 'world', 3, 5 ,6 , 7]
// 2.Заполните данными следующий кортеж: let tpl: [number, boolean, ...string[]];
let tpl = [67, true, "fa", "fafa"];
// Тема 28 : Перечисления
// 1. Перечисления
var Week;
(function (Week) {
    Week[Week["Monday"] = 0] = "Monday";
    Week[Week["Tuesday"] = 1] = "Tuesday";
    Week[Week["Wednesday"] = 2] = "Wednesday";
    Week[Week["Thursday"] = 3] = "Thursday";
    Week[Week["Friday"] = 4] = "Friday";
    Week[Week["Saturday"] = 5] = "Saturday";
    Week[Week["Sunday"] = 6] = "Sunday";
})(Week || (Week = {}));
// Тема 32 : Явные ключи перечислений
// 1. Сделайте перечисление Months и задайте в нем номера всем месяцам в году.
// Выведите в консоль первый и пятый месяцы.
var Months;
(function (Months) {
    Months[Months["January"] = 1] = "January";
    Months[Months["Fabruary"] = 2] = "Fabruary";
    Months[Months["March"] = 3] = "March";
    Months[Months["April"] = 4] = "April";
    Months[Months["May"] = 5] = "May";
    Months[Months["June"] = 6] = "June";
    Months[Months["July"] = 7] = "July";
    Months[Months["August"] = 8] = "August";
    Months[Months["September"] = 9] = "September";
    Months[Months["October"] = 10] = "October";
    Months[Months["November"] = 11] = "November";
    Months[Months["December"] = 12] = "December";
})(Months || (Months = {}));
let firstMonth = Months[1] || "";
let fiveMonth = Months[5] || "";
console.log(firstMonth, fiveMonth);
// Тема 34 : Строковые перечисления в TypeScript
// 1. Сделайте перечисление с названиями дней недели.
var DaysWeek;
(function (DaysWeek) {
    DaysWeek["Monday"] = "\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A";
    DaysWeek["Tuesday"] = "\u0432\u0442\u043E\u0440\u043D\u0438\u043A";
    DaysWeek["Wednesday"] = "\u0441\u0440\u0435\u0434\u0430";
    DaysWeek["Thursday"] = "\u0447\u0435\u0442\u0432\u0435\u0440\u0433";
    DaysWeek["Friday"] = "\u043F\u044F\u0442\u043D\u0438\u0446\u0430";
    DaysWeek["Saturday"] = "\u0441\u0443\u0431\u0431\u043E\u0442\u0430";
    DaysWeek["Sunday"] = "\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435";
})(DaysWeek || (DaysWeek = {}));
// 2. Сделайте перечисление с названиями месяцев.
var Month;
(function (Month) {
    Month["January"] = "\u044F\u043D\u0432\u0430\u0440\u044C";
    Month["Fabruary"] = "\u0444\u0435\u0432\u0440\u0430\u043B\u044C";
    Month["March"] = "\u043C\u0430\u0440\u0442";
    Month["April"] = "\u0430\u043F\u0440\u0435\u043B\u044C";
    Month["May"] = "\u043C\u0430\u0439";
    Month["June"] = "\u0438\u044E\u043D\u044C";
    Month["July"] = "\u0438\u044E\u043B\u044C";
    Month["August"] = "\u0430\u0432\u0433\u0443\u0441\u0442";
    Month["September"] = "\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C";
    Month["October"] = "\u043E\u043A\u0442\u044F\u0431\u0440\u044C";
    Month["November"] = "\u043D\u043E\u044F\u0431\u0440\u044C";
    Month["December"] = "\u0434\u0435\u043A\u0430\u0431\u0440\u044C";
})(Month || (Month = {}));
// Тема 36 : Дата
// 1. Сделайте переменную, которая будет содержать объект с датой.
let date = new Date();
// Тема 37 : Регулярки
// 1. Сделайте переменную, которая будет содержать регулярное выражение.
let reg = /.+?/;
// Тема 38 : Тип HTMLElement
// 1. Сделайте переменную, которая будет содержать promise.
let promise;
// 2. Сделайте переменную, которая будет содержать DOM элемент.
let divElem;
// 3. Сделайте переменную, которая будет содержать ссылку на тег ul.
let ul;
// Тема 39 : Коллекции
// 1. Сделайте переменную, которая будет содержать коллекцию Map.
let map;
// 2. Сделайте переменную, которая будет содержать коллекцию Set.
let set;
// 3. Сделайте переменную, которая будет содержать коллекцию NodeList.
let divList;
// 4. Сделайте переменную, которая будет содержать коллекцию HTMLCollection.
let htmlCol;
const time1 = { hour: 10, minute: 30, second: 0 };
const time2 = { hour: 14, minute: 45, second: 15 };
const time3 = { hour: 23, minute: 59, second: 59 };
// Тема 43 : Массивы в объектах
// 1. Сделайте объект со страной, содержащий название страницы и массив ее городов.
let country = {
    name: "Беларусь",
    cities: ["Минск", "Гомель", "Брест", "Витебск", "Гродно", "Могилёв"],
};
let event = {
    name: "my new event",
    time: {
        start: "2025-11-01",
        finish: "2025-12-31",
    },
};
let employee = {
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
let user = {
    name: "john",
    age: 30,
    parents: {
        mother: { name: "jane", age: 30, parents: null },
        father: { name: "eric", age: 30, parents: null },
    },
};
// Тема 47 : Массивы объектов
// 1. Сделайте массив, элементы которого будут регулярными выражениями.
let regArr = [/[a-z]+/, /\d{3}/, /^hello/];
// 2. Сделайте массив, элементы которого будут промисами.
let promiseArr = [
    new Promise((res) => setTimeout(() => res("ok"), 100)),
    Promise.resolve("done"),
    Promise.reject(new Error("fail")).catch(() => "error"),
];
let workers = [
    { name: "Иван", position: "разработчик", salary: 3000 },
    { name: "Мария", position: "дизайнер", salary: 2500 },
    { name: "Петр", position: "тестировщик", salary: 2000 },
];
// Тема 49 : Необязательные параметры функций
// 1. Сделайте функцию, которая принимать параметрами день, месяц и год, и
//    возвращать день недели, соответствующий этой дате. Пусть все три
//    параметра будут не обязательными. Если какой-то параметр не передан,
//    он должен принять значение, соответствующее текущей дате.
const getDateOfWeek = (day, month, year) => {
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
const pow = (num, exp = 2) => {
    return num ** exp;
};
// Тема 51 : Rest параметры функции
// 1. Сделайте функцию, которая параметрами принимает любое количество чисел, а возвращает их сумму.
const sum = (...nums) => {
    return nums.reduce((acc, n) => acc + n, 0);
};
// Тема 52 : Тип функций
// 1. Укажите переменной тип функции:
let func = function (text) {
    alert(text);
};
function make(arr, func) {
    return arr.map(function (elem) {
        return func(elem);
    });
}
let res = make([1, 2, 3], function (num) {
    return num ** 2;
});
console.log(res); // [1, 4, 9]
function make54(arr, func) {
    let sum = 0;
    for (let elem of arr) {
        sum += func(elem);
    }
    return sum;
}
let res54 = make54([1, 2, 3], function (num) {
    return num ** 2;
});
console.log(res54);
// 55 Тема : Стрелочные функции
// 1. Переделайте следующую функцию на стрелочную:
let func55_1 = (num1, num2) => num1 + num2;
// 2. Переделайте следующую функцию на стрелочную:
let func55_2 = (str) => str.split("");
// 3. Перепишите следующий JavaScript код на TypeScript вариант:
let arr55 = [1, 2, 3];
let res55 = arr55.map((num) => num ** 2);
export {};
//# sourceMappingURL=index.js.map