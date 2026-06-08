/* 
  1.Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
*/
const number = 5;
const result = number < 0 ? `Число ${number} отрицательное` : `Число ${number} не отрицательное`;
console.log(result);

/* 
  2. Дана строка. Выведите в консоль длину этой строки.
*/

const str = 'Hello, world!';
console.log(str.length);

/*
  3. Дана строка. Выведите в консоль последний символ строки.
*/
console.log(str[str.length - 1]);

/*
  4. Дано число. Проверьте, четное оно или нет.
*/

const result2 = number % 2 === 0 ? `Число ${number} чётное` : `Число ${number} не чётное`;
console.log(result2);

/*
  5. Даны два слова. Проверьте, что первые буквы этих слов совпадают.
*/

const str2 = 'Hello';
const result3 = str[0] === str[0] ? true : false;
console.log(result3);
