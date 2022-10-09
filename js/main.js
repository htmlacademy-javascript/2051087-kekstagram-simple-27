// функция, определяющая случайно генерированное число в диапазоне [min, max)
// const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min); - один из вариантов стрелочного объявения
// isNaN() - функция, определяющая не число. Отдает булевый признак

function getRandomNumber(min = 0, max = 10) {
  if (min < 0 || max < 0 || !isFinite(min) || !isFinite(max) || typeof min === 'string' || typeof max === 'string') {
    throw new Error('NaN');
  }
  if (min >= max) {
    return Math.floor(Math.random() * (min - max + 1) + max);
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}
getRandomNumber(5, 10);

// функция, принимающая строку и максимальное возможное значение строки и возвращающая булевое значение

function isAllowedLength(string, maxValue) {
  return String(string).length <= maxValue;
}
isAllowedLength('keks', 9);

/*
Функция для создания массива из 25 сгенерированных объектов. Каждый объект массива — описание фотографии, опубликованной пользователем.
Структура каждого объекта должна быть следующей:
{
  id: 1, // идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.
  url: 'photos/1.jpg', // адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
  description: 'Кот', // описание фотографии. Описание придумайте самостоятельно.
  likes: 25, // количество лайков, поставленных фотографии. Случайное число от 15 до 200.
  comments: 150 // количество комментариев, оставленных другими пользователями к этой фотографии. Случайное число от 0 до 200.
}
[{...}, {...}, ..., {...}]; // итог. Необходимое количество - 25.
*/

const URLS = [
  'photos/1.jpg',
  'photos/2.jpg',
  'photos/3.jpg',
  'photos/4.jpg',
  'photos/5.jpg',
  'photos/6.jpg',
  'photos/7.jpg',
  'photos/8.jpg',
  'photos/9.jpg',
  'photos/10.jpg',
  'photos/11.jpg',
  'photos/12.jpg',
  'photos/13.jpg',
  'photos/14.jpg',
  'photos/15.jpg',
  'photos/16.jpg',
  'photos/17.jpg',
  'photos/18.jpg',
  'photos/19.jpg',
  'photos/20.jpg',
  'photos/21.jpg',
  'photos/22.jpg',
  'photos/23.jpg',
  'photos/24.jpg',
  'photos/25.jpg',
];
const DESCRIPTIONS = [
  'Кот',
  'Собака',
  'Пират',
  'Дельфин',
  'Ящерица',
  'Слон',
  'Торт',
  'Сигарета',
  'Тело',
  'Бумага',
  'Ручка',
  'Карандаш',
  'Монитор',
  'Клавиатура',
  'Мышь',
  'Геральт',
  'Цири',
  'Очки',
  'Шарф',
  'Куртка',
  'Перчатки',
  'Башня',
  'Работа',
  'Ozon',
  'Аналитик',
];
const SIMILAR_DESCRIPTION_COUNT = 25;
// функция, которая возвращает случайный элемент массива, индекс которого [0, last_index]
function getRandomElement(elements) {
  return elements[getRandomNumber(0, elements.length - 1)];
}
function getPhotoDescription() {
  return {
    id: getRandomNumber(1, 25),
    url: getRandomElement(URLS),
    description: getRandomElement(DESCRIPTIONS),
    likes: getRandomNumber(15, 200),
    comments: getRandomNumber(0, 200)
  };
}
const similarDescriptions = [];
for (let i = 1; i <= SIMILAR_DESCRIPTION_COUNT; i++) {
  const temp = getPhotoDescription();
  temp['id'] = i;
  temp['url'] = `photos/${i}.jpg`;
  similarDescriptions.push(temp);
}


