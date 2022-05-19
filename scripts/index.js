const page = document.querySelector('.page');
const templatePopup = document.querySelector('#popup');
const templateCard = document.querySelector('#element');
const cardsListWrapper = document.querySelector('.elements');
const footer = document.querySelector('.footer');
const fullName = document.querySelector('.profile__heading');
const job = document.querySelector('.profile__job-title');

function getEditPopup() {
  const editPopup = templatePopup.content.cloneNode(true);
  const popupEditHeading = editPopup.querySelector('.popup__heading');
  const popupEditName = editPopup.querySelector('.popup__field_type_name');
  const popupEditJob = editPopup.querySelector('.popup__field_type_job');
  const popupEditSubmit = editPopup.querySelector('.popup__submit');
  popupEditHeading.textContent = 'Редактировать профиль';
  popupEditName.value = fullName.textContent;
  popupEditJob.value = job.textContent;
  popupEditName.placeholder = 'Имя';
  popupEditJob.placeholder = 'О себе';
  popupEditSubmit.textContent = 'Сохранить';
  footer.after(editPopup);
};

function getAddPopup() {
  const editPopup = templatePopup.content.cloneNode(true);
  const popupEditHeading = editPopup.querySelector('.popup__heading');
  const popupEditName = editPopup.querySelector('.popup__field_type_name');
  const popupEditJob = editPopup.querySelector('.popup__field_type_job');
  const popupEditSubmit = editPopup.querySelector('.popup__submit');
  popupEditHeading.textContent = 'Новое место';
  popupEditName.placeholder = 'Название';
  popupEditJob.placeholder = 'Ссылка на картинку';
  popupEditSubmit.textContent = 'Создать';
  footer.after(editPopup);
};

function closePopupBtn() {
  const popupToClose = document.querySelector('.popup');
  popupToClose.remove();
};

function submitEditPopup(evt) {
  evt.preventDefault();
  const popupEditName = document.querySelector('.popup__field_type_name');
  const popupEditJob = document.querySelector('.popup__field_type_job');
  fullName.textContent = popupEditName.value;
  job.textContent = popupEditJob.value;
  closePopupBtn();
};

function submitAddUserCard(evt) {
  evt.preventDefault();
  const newCard = templateCard.content.cloneNode(true);
  const newCardTitle = newCard.querySelector('.element__heading');
  const newCardLink = newCard.querySelector('.element__img');
  const popupEditName = document.querySelector('.popup__field_type_name');
  const popupEditJob = document.querySelector('.popup__field_type_job');
  newCardTitle.textContent = popupEditName.value;
  newCardLink.src = popupEditJob.value;
  newCardLink.alt = popupEditName.value;
  cardsListWrapper.prepend(newCard);
  closePopupBtn()
};

function likeActive(evt) {
  const el = evt.target;
  el.classList.toggle('element__like_type_active');
};

page.addEventListener('click', function (evt) {
  const el = evt.target;
  if (el.classList.value === 'profile__edit-button') {
    getEditPopup();
  }
  if (el.classList.value === 'profile__add-button') {
    getAddPopup();
  }
  else if (el.classList.value === 'popup__close') {
    closePopupBtn();
  }
  else if (el.classList.contains('element__like')) {
    likeActive(evt);
  };
});

page.addEventListener('submit', function (evt) {
  const el = evt.target;
  if (el.textContent.includes('Сохранить')) {
    submitEditPopup(evt);
  }
  else if (el.textContent.includes('Создать')) {
    submitAddUserCard(evt);
  }
});

const initialCards = [
  {
    name: 'Охуенно удобно',
    link: 'https://sun9-80.userapi.com/s/v1/ig2/4zanlUXeOMeqcM6biyrKUJHV9m0auv_rZ30SdNEvTdrsJKhlLP5bv5RnkYmrWLYAWJ-DEO4_EWv-KZfmrPruJsX_.jpg?size=1293x2160&quality=95&type=album'
  },
  {
    name: 'Я у мамы морячок',
    link: 'https://sun9-70.userapi.com/s/v1/ig2/mLBwn5fPtOhEi-g8HsgH1Z-Z_Fhw18mTm6s8TjQlZuIiigiCm9oQBrFJab3hTKTAFFI1_UhUTHUVWg4BG3GoadU_.jpg?size=2560x1894&quality=95&type=album'
  },
  {
    name: 'Ммм, Денюжки',
    link: 'https://sun9-46.userapi.com/s/v1/ig2/kxKqTA40qYB_bCIINBh9KPlgbxbTri2T7fly1YUZshrrwyh8el851x-WFtQCYwZBhBtlfq2a-ptmNu4HJUA425ld.jpg?size=2560x1912&quality=95&type=album'
  },
  {
    name: 'БородачЛена',
    link: 'https://sun9-10.userapi.com/s/v1/ig2/ke_lN0B4jBWtTC-_JGk2mIFoSpJejywwrvO823-3cPGsVAZRQfPBn4vJ_LFsr0eG1n8fzJMan3HBUvKlzKXG6Z93.jpg?size=2560x1912&quality=95&type=album'
  },
  {
    name: 'Днюха Лаврюха',
    link: 'https://sun9-59.userapi.com/s/v1/ig2/3rkBAXvFjUmNFxuBIURISleXn2mLSFgjSkB69vBeNaRLygUhDT8lad7AseVxub2m8D_LMdJXTotZM3JoqSC9avYl.jpg?size=2560x1920&quality=95&type=album'
  },
  {
    name: 'Дневальный',
    link: 'https://sun9-50.userapi.com/s/v1/ig2/fZV0x9ZJpmuotAm78ljgC3VN63ODSZEHkrC2ogFSOwk_vZpMb5utwi4AI2qjREesbOG16keljs53InpxHf8YwzCG.jpg?size=1598x2160&quality=95&type=album'
  }
];

const getCard = function (title) {
  const newCard = templateCard.content.cloneNode(true);
  const newCardTitle = newCard.querySelector('.element__heading');
  const newCardLink = newCard.querySelector('.element__img');
  newCardTitle.textContent = title.name;
  newCardLink.src = title.link;
  newCardLink.alt = title.name;
  return newCard;
};

function renderCards(wrapper, title) {
  wrapper.prepend(getCard(title));
};

initialCards.forEach(function (title) {
  renderCards(cardsListWrapper, title);
});



