/*
  1. Дано число. Выведите в консоль первую цифру этого числа.
*/
const num = 12345;
console.log(String(num)[0]);

/*
  2. Дано число. Выведите в консоль последнюю цифру этого числа.
*/
console.log(num % 10);
/* 
  3. Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
*/
const firstDigit = Number(String(num)[0]);
const lastDigit = Number(String(num)[num.toString().length - 1]);
const sum = firstDigit + lastDigit;
console.log(sum);

/* 
  4. Дано число. Выведите количество цифр в этом числе.
*/
console.log(String(num).length);

/* 
  5. Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
*/

const num2 = 67;
const firstDigit2 = Number(String(num2)[0]);

const result = firstDigit === firstDigit2 ? true : false;
console.log(result);
