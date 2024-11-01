export function openModal(modalElement) {
    modalElement.classList.add('popup_is-opened');
    document.addEventListener('keydown', handleEscClose);
    modalElement.addEventListener('mousedown', handleOverlayClose);
  }
  
  export function hideModal(modalElement) {
    modalElement.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', handleEscClose);
    modalElement.removeEventListener('mousedown', handleOverlayClose);
  }
  
  function handleEscClose(evt) {
    if (evt.key === 'Escape') {
      const openedModal = document.querySelector('.popup_is-opened');
      if (openedModal) {
        hideModal(openedModal);
      }
    }
  }
  //функция закрытия окна на оверлей
  
  function handleOverlayClose(evt) {
    if (evt.target === evt.currentTarget) {
      hideModal(evt.target);
    }
  }