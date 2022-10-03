// функция, определяющая случайно генерированное число в диапазоне [min, max)
// const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min); - один из вариантов стрелочного объявения
// isNaN() - функция, определяющая не число. Отдает булевый признак

function getRandomNumber(min = 0, max = 10) {
  if (min < 0 || max < 0 || !isFinite(min) || !isFinite(max) || typeof min === 'string' || typeof max === 'string') {
    throw new Error('NaN');
  }
  if (min >= max) {
    return `Меняю аргументы местами и в итоге отдаю ${Math.floor(Math.random() * (min - max + 1) + max)}`;
  }
  return `Рандомное значение - ${Math.floor(Math.random() * (max - min + 1) + min)}`;
}
getRandomNumber(5, 10);

// функция, принимающая строку и максимальное возможное значение строки и возвращающая булевое значение

function isAllowedLength(string, maxValue) {
  return String(string).length <= maxValue;
}
isAllowedLength('keks', 9);
