/* 
  1. Заполните массив целыми числами от 1 до 10.
*/

const arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(i + 1);
}
console.log(arr);
/*
  2. Заполните массив четными числами из промежутка от 1 до 100.
*/

const arr2 = [];
for (let i = 2; i <= 100; i += 2) {
  arr2.push(i);
}
console.log(arr2);

/*
  Задание 3
    Дан массив с дробями: [1.456, 2.125, 3.32, 4.1, 5.34]
    Округлите эти дроби до одного знака в дробной части.
*/

const arr3 = [1.456, 2.125, 3.32, 4.1, 5.34];
const roundedArr = arr3.map((number) => +number.toFixed(1));
console.log(roundedArr);
