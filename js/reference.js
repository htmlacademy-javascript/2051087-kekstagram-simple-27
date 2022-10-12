// файл, в котором хранятся более сложные решения задач

//В файле main.js на основе написанных по заданию ранее вспомогательных функций напишите необходимые функции для создания массива из 25 сгенерированных объектов.
//Каждый объект массива — описание фотографии, опубликованной пользователем.

/*

function getRandomPositiveInteger(a, b) {
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

const getRandomElement = (elements) => {
  if (elements.length === 0) {
      return 'Длина массива = 0';
  }
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
}

const createMessage = () => {
  Array.from({ length: getRandomPositiveInteger(1,2) }, () => getRandomElement(DESCRIPTIONS)).join(' ');
}

const createComments = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomPositiveInteger(1,6)}.svg`,
  message: createMessage(),
  name: getRandomElement(DESCRIPTIONS)
});

const createObj = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likese: getRandomPositiveInteger(ANY_COUNTS.MIN_LIKES, ANY_COUNTS.MAX_LIKES),
  comments: Array.from({ length: getRandomPositiveInteger(0, 20) }, (_, commentIndex) => createComments(commentIndex + 1)),
});

const arrayOfObjects = () => Array.from({length: SIMILAR_DESCRIPTION_COUNT}, (_, currentIndex) => createObj(currentIndex + 1));

arrayOfObjects();

*/
