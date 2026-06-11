// 1. Сделайте функцию, которая будет возвращать сколько дней осталось до ближайшего 29 февраля.
function daysUntilLeapYear() {
  const today = new Date();
  const currentYear = today.getFullYear();
  let leapYear = currentYear;
  while (true) {
    if ((leapYear % 4 === 0 && leapYear % 100 !== 0) || leapYear % 400 === 0) {
      break;
    }
    leapYear++;
  }
  const leapDate = new Date(leapYear, 1, 29);
  const diffTime = leapDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

console.log(daysUntilLeapYear());

// 2. Сделайте функцию, которая будет возвращать дату следующей масленницы, которая празднуется в последнее воскресенье зимы.
const getNextMaslenitsa = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  let maslenitsaDate = new Date(currentYear, 1, 28);
  while (maslenitsaDate.getDay() !== 0) {
    maslenitsaDate.setDate(maslenitsaDate.getDate() - 1);
  }
  return maslenitsaDate;
};

console.log(getNextMaslenitsa());

// 3. Сделайте функцию, которая будет возвращать случайный цвет.
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
console.log(getRandomColor());

// 4. Сделайте функцию, которая параметром будет принимать массив чисел и возвращать массив общих делителей всех чисел из переданного массива.
const getCommonDivisors = (arr) => {
  const getDivisors = (num) => {
    const divisors = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        divisors.push(i);
      }
    }
    return divisors;
  };
  const allDivisors = arr.map(getDivisors);
  const commonDivisors = allDivisors.reduce((acc, divisors) => {
    return acc.filter((div) => divisors.includes(div));
  });
  return commonDivisors;
};
console.log(getCommonDivisors([12, 18, 24]));

// 5. Сделайте функцию, которая параметром будет принимать двухмерный массив чисел и возвращать массив максимальных чисел в каждом подмассиве.
const getMaxInSubarrays = (arr) => {
  return arr.map((subArr) => Math.max(...subArr));
};
console.log(
  getMaxInSubarrays([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
