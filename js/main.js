// функция, определяющая случайно генерированное число в диапазоне [min, max]
// const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min); - один из вариантов стрелочного объявения

function getRandomNumber(min, max) {
  if (min < 0 || max < 0 || isNaN(min) || isNaN(max) || typeof min === 'string' || typeof max === 'string') {
    return 'NaN';
  } else if (min >= max) {
    return `Меняю аргументы местами и в итоге отдаю ${Math.round(Math.random() * (min - max + 1) + max)}`;
  }
  return Math.round(Math.random() * (max - min + 1) + min);
}
getRandomNumber(5, 10);

// функция, принимающая строку и максимальное возможное значение строки и возвращающая булевое значение

function isAllowedLength (string, maxValue) {
  const currentValue = string.length;
  if (currentValue > maxValue) {
    return false;
  }
  return true;
}
isAllowedLength('keks', 9);
