// 1. Дан массив со словами. Получите из этого массива случайное слово, начинающееся на заданную букву.

const words = ['pple', 'banana', 'grape', 'vocado', 'orange'];
const letter = 'a';
const filteredWords = words.filter((word) => word[0] === letter);
const randomWord = filteredWords[Math.floor(Math.random() * filteredWords.length)];
console.log(randomWord || []);

// 2. Пусть у нас есть дата 22.02.2017. В этой дате 4 двойки. Найдите все даты с 4-мя двойками в текущем столетии.
const datesWithFourTwos = [];
for (let year = 2000; year < 2100; year++) {
  for (let month = 1; month <= 12; month++) {
    const day = 22;
    const dateStr = `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`;
    if (dateStr.split('2').length - 1 === 4) {
      datesWithFourTwos.push(dateStr);
    }
  }
}
console.log(datesWithFourTwos);

/*
    3. Дан массив с точками:
    [
      [1, 2], [2, 4], [3, 8], [4, 16], [5, 32]
    ]
    Отрисуйте эти точки на графике.

*/

const points = [
  [1, 2],
  [2, 4],
  [3, 8],
  [4, 16],
  [5, 32],
];

const canvas = document.getElementById('graph');
const ctx = canvas.getContext('2d');

ctx.beginPath();

points.forEach((point, index) => {
  const x = point[0] * 40;
  const y = 300 - point[1] * 6;

  if (index === 0) {
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
  }
});

ctx.stroke();
