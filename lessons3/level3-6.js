// 1. Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.

const arr = [1, 23, 456, 7890, 12345];
const result = arr.filter((element) => element < 100);
console.log(result);

// 2. Дано число, например, вот такое: let num = 12345;
// Проверьте, что все цифры этого числа больше нуля.
let num = 12345;

const numArr = String(num).split('');
let positiveNum = true;
for (let i = 0; i < numArr.length; i++) {
  if (!(+numArr[i] > 0)) {
    positiveNum = false;
    break;
  }
}

console.log(positiveNum);

// 3. Дан некоторый массив, например, вот такой: [123, 456, 789]
// Слейте все элементы этого массива в один массив, разбив их посимвольно: [1, 2, 3, 4, 5, 6, 7, 8, 9]

const arr2 = [123, 456, 789];

const mergedArr = arr2
  .join('')
  .split('')
  .map((char) => +char);
console.log(mergedArr);

// 4. Дан следующая структура:
/*
let data = [
	{
		1: 11,
		2: 12,
		3: 13,
	},
	{
		1: 21,
		2: 22,
		3: 23,
	},
	{
		1: 24,
		2: 25,
		3: 26,
	},
];
Найдите сумму элементов этой структуры.
*/

let data = [
  {
    1: 11,
    2: 12,
    3: 13,
  },
  {
    1: 21,
    2: 22,
    3: 23,
  },
  {
    1: 24,
    2: 25,
    3: 26,
  },
];
let sum = 0;
for (let i = 0; i < data.length; i++) {
  for (let key in data[i]) {
    sum += data[i][key];
  }
}
console.log(sum);
