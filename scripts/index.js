// @todo: Темплейт карточки

const cardTemplate = document.querySelector('#card-template');
const cardTemplateContent = cardTemplate.content;

// @todo: DOM узлы

const cardPlace = document.querySelector('.places__list');


// @todo: Функция создания карточки

function createCard(item, deleteCard) {
  const cardTitle = item.name;
  const cardLink = item.link;
  const cardTemplateClone = cardTemplateContent.cloneNode(true);

  cardTemplateClone.querySelector('.card__title').textContent = cardTitle;
  cardTemplateClone.querySelector('.card__image').setAttribute('src', cardLink);
  cardTemplateClone.querySelector('.card__image').setAttribute('alt', `Фотография - ${cardTitle}`);
  const cardItem = cardTemplateClone.querySelector('.places__item');

  const deleteButton = cardTemplateClone.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', () => deleteCard(cardItem));
  return cardTemplateClone;
}

// @todo: Функция удаления карточки

function deleteCard(cardElement) {
    cardElement.remove();
}

// @todo: Вывести карточки на страницу

initialCards.forEach((card) => {
  cardPlace.append(createCard(card, deleteCard));
})