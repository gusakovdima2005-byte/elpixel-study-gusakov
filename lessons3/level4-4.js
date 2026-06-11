// 1. Сделайте функцию, которая параметром будет принимать число, а возвращать количество его делителей.

const countDivisors = (num) => {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }
  return count;
};

console.log(countDivisors(10));

// 2. Сделайте функцию, которая параметром будет принимать дату, а возвращать знак зодиака, соответствующий этой дате.

const getZodiacSign = (date) => {
  const [day, month] = date.split('.').map(Number);
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return 'Водолей';
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return 'Рыбы';
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return 'Овен';
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return 'Телец';
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    return 'Близнецы';
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    return 'Рак';
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return 'Лев';
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return 'Дева';
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    return 'Весы';
  }
};

console.log(getZodiacSign('15.04'));

// 3. Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей.
const getDivisors = (num) => {
  const divisors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
};

console.log(getDivisors(10));

// 4. Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
console.log(isPrime(7));

// 5. Сделайте функцию, которая параметром будет принимать число и удалять из него четные цифры.

const deleteEven = (num) => {
  const numStr = String(num)
    .split('')
    .filter((num) => num % 2 === 0)
    .join('');
  return numStr;
};

console.log(deleteEven(54721));

// 6. Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.

const randomArr = (n, min, max) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.trunc(Math.random() * (max - min + 1)) + min);
  }
  return arr;
};

console.log(randomArr(5, 1, 100));
