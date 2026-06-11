// 1. Сделайте функцию, которая параметром будет принимать текст со словами, а возвращать текст, в котором эти слова будут отсортированы в алфавитном порядке.

const sortWords = (text) => {
  return text.split(' ').sort().join(' ');
};
console.log(sortWords('яблоко банан апельсин'));

// 2. Сделайте функцию, которая параметром будет принимать два массива и возвращать массив их общих элементов.

const generalArr = (arr1, arr2) => {
  return [...arr1.filter((element) => arr2.includes(element))];
};

console.log(generalArr([1, 'fdwq', 4, 5], ['fwerfwe', 'fdwq', 5]));

// 3. Сделайте функцию, которая будет возвращать случайное число. Функция не должна возвращать одно и тоже число два раза подряд.

const getRandomNumber = () => {
  let prevNumber = null;
  return () => {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 100) + 1;
    } while (randomNumber === prevNumber);
    prevNumber = randomNumber;
    return randomNumber;
  };
};
const randomNumber= getRandomNumber();
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
// 4. Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент. Смотрите пример:

let arr = [1, 2, 3, 4, 5];
const getNextElement = (arr, element) => {
  const index = arr.indexOf(element);
  if (index === -1 || index === arr.length - 1) {
    return arr[0];
  }
  return arr[index + 1];
};
console.log(getNextElement(arr, 1)); // 2
console.log(getNextElement(arr, 4)); // 5
console.log(getNextElement(arr, 5)); // 1
