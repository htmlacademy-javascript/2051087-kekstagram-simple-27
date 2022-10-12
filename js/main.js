// isNaN() - функция, определяющая не число. Отдает булевый признак

function getRandomPositiveInteger (a, b) {
  // Если переданы отрицительные числа, возвращаем NaN
  if (a < 0 || b < 0) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function isAllowedLength(string, maxValue) {
  return String(string).length <= maxValue;
}
isAllowedLength('keks', 9);

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

function getRandomElement(elements) {
  if (elements.length === 0) {
    return 'Длина массива = 0';
  }
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
}

function getPhotoDescription(index) {
  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: getRandomElement(DESCRIPTIONS),
    likes: getRandomPositiveInteger(ANY_COUNTS.MIN_LIKES, ANY_COUNTS.MAX_LIKES),
    comments: getRandomPositiveInteger(ANY_COUNTS.MIN_COMMENTS_COOUNT, ANY_COUNTS.MAX_COMMENTS_COOUNT)
  };
}

function getDescriptionArray() {
  return Array.from({ length: SIMILAR_DESCRIPTION_COUNT },
    (_, indexArr) => getPhotoDescription(indexArr + 1));
}
getDescriptionArray();
