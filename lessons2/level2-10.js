// 1. Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.
const str = 'f5432d543dd';
let count = 0;

for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (!(char >= '0' && char <= '9')) {
    count++;
  }
  if (count > 3) {
    break;
  }
}

if (count > 3) {
  console.log('В строке больше трех букв');
} else {
  console.log('В строке не более трех букв');
}

// 2. Дано число. Получите первую четную цифру с конца этого числа.
const num = 123456789;
const numStr = num.toString();

for (let i = numStr.length - 1; i >= 0; i--) {
  if (parseInt(numStr[i]) % 2 === 0) {
    console.log(numStr[i]);
    break;
  }
}

// 3. Дана некоторая строка: 'abcde abcde abcde'
// Замените в ней первый символ каждого слова на '!':
// '!bcde !bcde !bcde'
const str2 = 'abcde abcde abcde';
const result = str2
  .split(' ')
  .map((word) => (word[0] = '!' + word.slice(1)))
  .join(' ');
console.log(result);

// 4. Дан массив с числами: [1, 2, 3, 3, 4, 5]
// Проверьте, что в этом массиве есть два одинаковых элемента подряд.
const arr = [1, 2, 3, 3, 4, 5];
let hasDuplicate = false;
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] === arr[i + 1]) {
    hasDuplicate = true;
    break;
  }
}

console.log(hasDuplicate);
