/*
  Задание 1
    Дана строка: 'abcde'
    Получите массив букв этой строки.
*/

const str = 'abcde';
const arr = str.split('');
console.log(arr);

/*
  Задание 2
    Дано некоторое число: 12345
    Получите массив цифр этого числа.
*/

const num = 12345;
const arr2 = String(num).split('');
console.log(arr2);

/* 
Задание 3
  Дано некоторое число: 12345
  Переверните его: 54321
*/

const num2 = 12345;
const reversedNum = Number(String(num2).split('').reverse().join(''));
console.log(reversedNum);
/* 
  Задание 4
    Дано некоторое число: 12345
    Найдите сумму цифр этого числа.
*/
const sum = eval(String(num2).split('').join('+'));
console.log(sum);
