// 1. Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива.

const getRandomElement = (arr) => {
  return arr[Math.trunc(Math.random() * arr.length)];
};
console.log(getRandomElement([1, 2, 3, 4, 5]));

// 2. Сделайте функцию, которая параметром будет принимать массив и возвращать массив из N случайных элементов этого массива.

const getRandomElements = (arr, n) => {
  const randomElements = [];
  for (let i = 0; i < n; i++) {
    randomElements.push(getRandomElement(arr));
  }
  return randomElements;
};

console.log(getRandomElements([1, 2, 3, 4, 5], 3));

// 3. Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива так, чтобы одинаковые элементы не возвращались два раза подряд.
const getRandomElementNoRepeat = (arr) => {
  let prevElement = null;
  return () => {
    let randomElement;
    do {
      randomElement = getRandomElement(arr);
    } while (randomElement === prevElement);
    prevElement = randomElement;
    return randomElement;
  };
};

const getRandomNoRepeat = getRandomElementNoRepeat([1, 2, 3, 4, 5]);
console.log(getRandomNoRepeat());
console.log(getRandomNoRepeat());

// 4. Сделайте функцию, которая будет возвращать массив простых чисел из заданного промежутка.

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getPrimesInRange = (min, max) => {
  const primes = [];
  for (let i = min; i <= max; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
};
console.log(getPrimesInRange(1, 23));

// 5. Сделайте функцию, которая параметрами будет принимать любое количество чисел, а возвращать их сумму.

const getSumNumbers = (...numbers) => {
  return [...numbers].reduce((acc, num) => acc + num, 0);
};
console.log(getSumNumbers(1, 2, 3, 6, 8, 5, 3));

// 6. Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы в массиве не было подряд двух одинаковых чисел.
const getUniqueRandomNumbersNoRepeat = (n, min, max) => {
  const uniqueNumbers = [];
  let prevNum = null;
  return () => {
    while (uniqueNumbers.length < n) {
      const randomNum = Math.trunc(Math.random() * (max - min + 1)) + min;
      if (randomNum !== prevNum) {
        uniqueNumbers.push(randomNum);
        prevNum = randomNum;
      }
    }
    return uniqueNumbers;
  };
};

const getUniqueNoRepeat = getUniqueRandomNumbersNoRepeat(5, 1, 10);
console.log(getUniqueNoRepeat());

// 7. Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы числа не повторялись.
const getUniqueRandomNumbers = (n, min, max) => {
  const uniqueNumbers = [];
  while (uniqueNumbers.length < n) {
    const randomNum = Math.trunc(Math.random() * (max - min + 1)) + min;
    if (!uniqueNumbers.includes(randomNum)) {
      uniqueNumbers.push(randomNum);
    }
  }
  return uniqueNumbers;
};

console.log(getUniqueRandomNumbers(5, 1, 10));
