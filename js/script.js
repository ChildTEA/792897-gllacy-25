// Проверить, есть ли кнопки в тех местах, где должны быть ссылки
// Переделать слайдер так, чтобы лишние слайды не показывались по умолчанию
// Поудалять атрибуты hidden у слайдов


// Вопрос: В лекции рассказывалось о валидации форм при помощи JS. HTML5 required уже по умоланию проверяет валидность форм. Нужно ли подстраховываться JavaScript'ом?


// Slider

// var slideIndex = 0;
// var slides = document.querySelectorAll('.promo-slider-item');
// var dots = document.querySelectorAll('.promo-slider-dot');
// var bodyClassName = 'promo-theme-';

// var showSlides = function (n) {
//   for (var i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none'; 
//   }
//   for (var i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(' promo-slider-dot-active', '');
//   }
//   slides[slideIndex].style.display = 'block'; 
//   dots[slideIndex].className += ' promo-slider-dot-active';
//   document.body.className = bodyClassName + (slideIndex + 1);
// };

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// showSlides(slideIndex);




// ModalWriteUs
// Всё окно с оверлеем
// Только попап


var linkWriteUs = document.querySelector('.office-addres-button');
var modalOverlay = document.querySelector('.modal-overlay')
var popupWriteUs = document.querySelector('.popup-write-us');
var popupCloseWriteUs = document.querySelector('.popup-write-us .popup-close');

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
  modalOverlay.classList.add('modal-show');
  popupWriteUs.classList.add('modal-show');

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


// Modal close

popupCloseWriteUs.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalOverlay.classList.remove('modal-show');
  popupWriteUs.classList.remove('modal-show');
  popupWriteUs.classList.remove('popup-error');
});

modalOverlay.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalOverlay.classList.remove('modal-show');
  popupWriteUs.classList.remove('modal-show');
  popupWriteUs.classList.remove('popup-error');
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27 && popupWriteUs.classList.contains('modal-show')) {
    evt.preventDefault();
    modalOverlay.classList.remove('modal-show');
    popupWriteUs.classList.remove('modal-show');
    popupWriteUs.classList.remove('popup-error');
  }
});


// Невалидная форма

applicationForm.addEventListener('submit', function(evt) {
  if (!inputName.value || !inputEmail.value || inputMessage.value) {
    evt.preventDefault();
    popupWriteUs.classList.remove('popup-error');
    popupWriteUs.offsetWidth = popupWriteUs.offsetWidth;
    popupWriteUs.classList.add('popup-error');
  }
});