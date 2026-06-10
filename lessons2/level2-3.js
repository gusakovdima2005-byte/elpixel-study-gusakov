// 1. Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.
const word1 = 'Hello';
const wors2 = 'World';
const result = word1[word1.length - 1] === wors2[0];
console.log(result);

// 2.  Дана некоторая строка. Найдите позицию третьего нуля в строке.
const str = '1020304050';
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === '0') count++;
  if (count === 3) {
    console.log(i);
    break;
  }
}

// 3. Даны числа, разделенные запятыми: '12,34,56' Найдите сумму этих чисел.
const numbersStr = '12,34,56';
const sum = numbersStr.split(',').reduce((acc, num) => acc + Number(num), 0);

console.log(sum);

/*
  Задание 4
    Дана дата в следующем формате: '2025-12-31'
    Преобразуйте эту дату в следующий объект: 
    {
	    year: '2025',
	    month: '12',
	    day: '31',
    }
*/
const dateStr = '2025-12-31';
const [year, month, day] = dateStr.split('-');
const dateObj = { year, month, day };
console.log(dateObj);
