// 1. Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
const str = 'abcf122';
let pos = -1;
for (let i = 0; i < str.length; i++) {
  if (str[i] >= '0' && str[i] <= '9') {
    pos = i;
    break;
  }
}
console.log(pos);

// 2. Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
const obj = {
  a: 1,
  b: 2,
  c: 3,
};
const keys = Object.keys(obj);
const values = Object.values(obj);

console.log(keys);
console.log(values);

// 3. Дано число. Выведите в консоль количество четных цифр в этом числе.
const num = 1203456;
let count = 0;
const numStr = num.toString();
for (let i = 0; i < numStr.length; i++) {
  if (numStr[i] % 2 === 0) count++;
}
console.log(count);

/* 
  4.Дана некоторая строка: 'abcde' 
    Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее: 'AbCdE'

*/
const str2 = 'abcde';
let result = '';
for (let i = 0; i < str2.length; i += 2) {
  result += str2[i].toLocaleUpperCase() + (str2[i + 1] || '');
}
console.log(result);

/* 
  5. Дана некоторая строка со словами: 'aaa bbb ccc'
    Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее: 'Aaa Bbb Ccc'
*/
const str3 = 'aaa bbb ccc';
const words = str3.split(' ');
const greaterWords = words.map((word) => word[0].toLocaleUpperCase() + word.slice(1)).join(' ');

console.log(greaterWords);
