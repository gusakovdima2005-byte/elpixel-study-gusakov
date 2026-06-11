// 1. Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.

for (let i = 10; i <= 1000; i++) {
  if (Math.trunc((i / 10) % 10) % 2 === 0) console.log(i);
}

// 2. Дан массив. Удалите из него каждый пятый элемент.
const arr = [1, 2, 3, 4, 5, 6, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 4; i < arr.length; i += 4) {
  arr.splice(i, 1);
}
console.log(arr);

//  3. Дана некоторая переменная с числом: let num = 5;
//  Сделайте строку, содержащую столько нулей, сколько указано в переменной.
//  В нашем случае получится такая строка: '00000'

let num = 5;
let zeroStr = '';
for (let i = 0; i < num; i++) {
  zeroStr += '0';
}
console.log(zeroStr);

// 4. Дана некоторая строка со словами: 'aaa bbb ccc eee fff'
// Удалите из этой строки каждое второе слово.
// В нашем случае должно получится следующее: 'aaa ccc fff'

const str = 'aaa bbb ccc eee fff';
const result = str
  .split(' ')
  .filter((word, index) => index % 2 === 0)
  .join(' ');
console.log(result);

/*
  5. Дан массив:
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]
    Найдите сумму элементов этого массива.
*/

const arr2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let sum = 0;
for (let i = 0; i < arr2.length; i++) {
  for (let j = 0; j < arr2[i].length; j++) {
    sum += arr2[i][j];
  }
}
console.log(sum);
