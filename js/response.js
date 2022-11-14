import { isEscapeKey } from './util.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');

function showSuccessTemplate() {
  const successFragment = document.createDocumentFragment();
  const successElement = successTemplate.cloneNode(true);
  // successElement.id = 'success-modal';
  successFragment.append(successElement);
  document.body.append(successFragment);
  const closeButton = successElement.querySelector('.success__button');
  const openModal = successElement.querySelector('.success'); // удалить
  closeButton.addEventListener('click', () => {
    successElement.remove();
    document.removeEventListener('keydown', onSuccessEscKeydown);
  });

  document.addEventListener('keydown', onSuccessEscKeydown, { once: true });

  document.addEventListener('click', (evt) => {
    if (!(evt.target).closest('.success').length && !(evt.target).is('.success')) {
      successElement.remove();
    }
  });

  function onSuccessEscKeydown(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      successElement.remove();
    }
  }
}

export { showSuccessTemplate };
