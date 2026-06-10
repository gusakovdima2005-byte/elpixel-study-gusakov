// 1. Заполните массив случайными числами из промежутка от 1 до 100.
const arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.trunc(Math.random() * 100) + 1);
}
console.log(arr);

//2. Дано некоторое число: 12345 Выведите в консоль все его символы с конца.
const num = 12345;
const numStr = num.toString();
for (let i = numStr.length - 1; i >= 0; i--) {
  console.log(numStr[i]);
}

/*
  Задание 3. 
    Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
    По очереди выведите в консоль подмассивы из двух элементов нашего массива:
    [1, 2]
    [3, 4]
    [5, 6]
    
*/
const arr2 = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr2.length; i += 2) {
  console.log(arr2.slice(i, i + 2));
}

/* 
  Задание 4
    Даны два массива:
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];
    Слейте эти массивы в новый массив: [1, 2, 3, 4, 5, 6]
*/
const arr1 = [1, 2, 3];
const arr3 = [4, 5, 6];
const mergedArr = [...arr1, ...arr3];
console.log(mergedArr);
