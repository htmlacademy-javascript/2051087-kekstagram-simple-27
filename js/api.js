const getData = (onSuccess, onError) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error(`${response.status} - ${response.statusText}`);
    })
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch(() => onError('Произошла ошибка. Попробуйте повторить позже.'));
};

const sendData = (evt, onSuccess, onError) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body: new FormData(evt.target),
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError('Произошла ошибка. Попробуйте повторить позже.');
      }
    })
    .catch(() => {
      onError('Произошла ошибка. Попробуйте повторить позже.');
    });
};

export { getData, sendData };