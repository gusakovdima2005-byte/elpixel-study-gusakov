/* 
  1.Дана некоторая строка: 'a bc def ghij'
  Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. 
  В нашем случае должно получится следующее: 'A BC DEF ghij'

*/
const str = 'a bc def ghij';
const result = str
  .split(' ')
  .map((word) => (word.length <= 3 ? word.toLocaleUpperCase() : word))
  .join(' ');
console.log(result);

// 2. Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.
const char = 'A';
if (char === char.toLocaleUpperCase()) {
  console.log('Символ в верхнем регистре');
} else {
  console.log('Символ в нижнем регистре');
}
// 3. Дано некоторое число, например, такое: 123789
// Удалите из этого числа все нечетные цифры.
// В нашем случае получится такой результат: 28

const num = 123789;
const numStr = num.toString();
const result2 = numStr
  .split('')
  .filter((num) => num % 2 === 0)
  .join('');
console.log(result2);
