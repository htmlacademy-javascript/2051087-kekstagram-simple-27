import { isEscapeKey } from './util.js';

const imageForm = document.querySelector('.img-upload__form');
const imgUploadInput = imageForm.querySelector('#upload-file');
const imageEditingForm = imageForm.querySelector('.img-upload__overlay');
const closeEditorFormButton = imageForm.querySelector('#upload-cancel');
const decreaseButton = imageEditingForm.querySelector('.scale__control.scale__control--smaller');
const increaseButton = imageEditingForm.querySelector('.scale__control.scale__control--bigger');
const scaleField = imageEditingForm.querySelector('.scale__control.scale__control--value');
const imageScale = imageEditingForm.querySelector('[data-preview-image="image"]');
const pictureEffectButtons = imageEditingForm.querySelectorAll('.effects__radio');

function onPopupEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeImageEditingForm();
  }
}

function openImageEditingForm() {
  imageEditingForm.classList.remove('hidden');
  imageScale.className = '';
  document.querySelector('body').classList.add('modal-open');

  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeImageEditingForm() {
  imageEditingForm.classList.add('hidden');
  imageScale.className = '';
  imgUploadInput.value = '';
  document.querySelector('body').classList.remove('modal-open');

  document.removeEventListener('keydown', onPopupEscKeydown);
}

// imgUploadInput.addEventListener('click', () => {
//   openImageEditingForm();
// });

imgUploadInput.addEventListener('change', () => {
  openImageEditingForm();
});

closeEditorFormButton.addEventListener('click', () => {
  closeImageEditingForm();
});

closeEditorFormButton.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closeImageEditingForm();
  }
});

decreaseButton.addEventListener('click', () => {
  const currentScale = parseInt(scaleField.value, 10);
  const minValue = parseInt(scaleField.min, 10);
  const stepValue = parseInt(scaleField.step, 10);
  if (currentScale > minValue) {
    const newScale = currentScale - stepValue;
    scaleField.value = `${newScale}%`;
    imageScale.style.transform = `scale(${newScale / 100})`;
  }
});

increaseButton.addEventListener('click', () => {
  const currentScale = parseInt(scaleField.value, 10);
  const maxValue = parseInt(scaleField.max, 10);
  const stepValue = parseInt(scaleField.step, 10);
  if (currentScale < maxValue) {
    const newScale = currentScale + stepValue;
    scaleField.value = `${newScale}%`;
    imageScale.style.transform = `scale(${newScale / 100})`;
  }
});

pictureEffectButtons.forEach((radio) => {
  radio.addEventListener('change', () => {
    const elementId = radio.id;
    const classEffect = imageEditingForm.querySelector(`[for=${elementId}]`).querySelector('.effects__preview');
    imageScale.className = '';
    imageScale.classList.add(`${classEffect.classList[1]}`);
  });
});

