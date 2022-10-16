import { getRandomElement, getRandomPositiveInteger } from './util.js';

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

const ANY_COUNTS = {
  MIN_LIKES: 15,
  MAX_LIKES: 200,
  MIN_COMMENTS_COOUNT: 0,
  MAX_COMMENTS_COOUNT: 200
};

const SIMILAR_DESCRIPTION_COUNT = 25;

function getPhotoDescription(index) {
  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: getRandomElement(DESCRIPTIONS),
    likes: getRandomPositiveInteger(ANY_COUNTS.MIN_LIKES, ANY_COUNTS.MAX_LIKES),
    comments: getRandomPositiveInteger(ANY_COUNTS.MIN_COMMENTS_COOUNT, ANY_COUNTS.MAX_COMMENTS_COOUNT)
  };
}

function getDescriptionArray () {
  return Array.from({ length: SIMILAR_DESCRIPTION_COUNT },
    (_, indexArr) => getPhotoDescription(indexArr + 1));
}
// window.getDescriptionArray = getDescriptionArray; - для вызова из консоли

export { getDescriptionArray };
