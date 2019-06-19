/* Оживление слайдера */

var slides = document.querySelectorAll('.promo-slider-item');
var dots = document.querySelectorAll('.promo-slider-dot');
var themeClassName = 'promo-theme-';

var addDotClickHandler = function(sliderControl, sliderItem, themeName) {
  sliderControl.addEventListener('click', function(evt) {
    evt.preventDefault;
    console.log()
    for (var i = 0; i < dots.length; i++) {
      dots[i].classList.remove('promo-slider-dot-active');
      slides[i].classList.remove('promo-slider-item-current');
      document.body.classList.remove('promo-theme-1');
      document.body.classList.remove('promo-theme-2');
      document.body.classList.remove('promo-theme-3');
    }

    sliderControl.classList.add('promo-slider-dot-active');
    sliderItem.classList.add('promo-slider-item-current');
    console.log(i);
    document.body.classList.add(themeName);
  });
}

for (var i = 0; i < dots.length; i++) {
  addDotClickHandler(dots[i], slides[i], themeClassName + (i + 1));
}
  

/* Модальное окно: появление */

var linkWriteUs = document.querySelector('.office-addres-button');
var modalWriteUs = document.querySelector('.modal-write-us');
var modalWriteUsForm = document.querySelector('.application-form');
var popupCloseWriteUs = document.querySelector('.modal-write-us .popup-close');
var applicationForm = document.querySelector('.application-form');
var inputName = applicationForm.querySelector('[name="author-name"]');
var inputEmail = applicationForm.querySelector('[name="author-email"]');
var inputMessage = applicationForm.querySelector('[name="author-message"]');
var applicationSubmit = applicationForm.querySelector('.application-form-submit');

var isLocalStorage = true;
var userName = '';
var userEmail = '';

try {
  localStorage.getItem("userName");
} catch (err) {
  isLocalStorage = false;
}

linkWriteUs.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalWriteUs.classList.add('modal-show');

  if (isLocalStorage) {
    userName = localStorage.getItem('userName');
    userEmail = localStorage.getItem('userEmeil');
    if (userName) {
      inputName.value = userName;
      if (userEmail) {
        inputEmail.value = userEmail;
        inputMessage.focus();
      } else {
        inputEmail.focus();
      }
    } else {
      inputName.focus();
    }
  } else {
    inputName.focus();
  }
});


/* Модальное окно: закрытие */

popupCloseWriteUs.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalWriteUs.classList.remove('modal-show');
  modalWriteUsForm.classList.remove('popup-error');
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27 && modalWriteUs.classList.contains('modal-show')) {
    evt.preventDefault();
    modalWriteUs.classList.remove('modal-show');
    modalWriteUsForm.classList.remove('popup-error');
  }
});


/* Невалидная форма */

applicationForm.addEventListener('submit', function(evt) {
  if (!inputName.value || !inputEmail.value || !inputMessage.value) {
    evt.preventDefault();
    modalWriteUsForm.classList.remove('popup-error');
    modalWriteUsForm.offsetWidth = modalWriteUsForm.offsetWidth;
    modalWriteUsForm.classList.add('popup-error');
  }
});
