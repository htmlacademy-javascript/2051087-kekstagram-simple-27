// файл, в котором хранятся более сложные решения задач

// 1. В файле main.js на основе написанных по заданию ранее вспомогательных функций напишите необходимые функции для создания массива из 25 сгенерированных объектов.
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

// 2. Нужно запрограммировать мессенджер. Отправка сообщения, удаление сообщения.

// Разметка

/*
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <title>Чат</title>
    <link href="style.css" rel="stylesheet">
  </head>
  <body>
    <section class="chat">
      <h1 class="visually-hidden">Чат</h1>

      <div class="chat-content">

      </div>

      <form class="chat-form" action="https://echo.htmlacademy.ru/courses" method="post">
        <input class="chat-form-input" type="text" aria-label="Ваше сообщение" placeholder="Напишите что-нибудь" required>
        <button class="chat-form-button" type="submit">Отправить</button>
      </form>
    </section>

    <template id="message-template">
      <div class="chat-message" tabindex="0">
        <span class="chat-message-name">Неопознанный енот</span>
        <p class="chat-message-text"></p>
        <button class="chat-message-button" type="button">Удалить</button>
      </div>
    </template>

    <script src="script.js"></script>
  </body>
</html>
*/

// Код

/*
var form = document.querySelector('.chat-form');
var inputText = form.querySelector('.chat-form-input');
var chat = document.querySelector('.chat-content');
var message = chat.children;
var temp = document.querySelector('#message-template').content;
var wrapper = temp.querySelector('.chat-message');
var parag = temp.querySelector('.chat-message-text');


var deleteMessage = function (mess) {
  var deleButton = mess.querySelector('.chat-message-button');
  deleButton.addEventListener('click', function () {
    mess.remove();
  });
};

for (var i = 0; i < message.length; i++) {
  deleteMessage(message[i]);
}

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  var messText = inputText.value;
  var wrapClone = wrapper.cloneNode(true);
  var description = wrapClone.querySelector('.chat-message-text');
  description.textContent = messText;
  chat.appendChild(wrapClone);
  inputText.value = '';

  deleteMessage(wrapClone);
  })
*/
