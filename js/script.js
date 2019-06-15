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

var linkWriteUs = document.querySelector('.office-addres-button');
var modalWriteUs = document.querySelector('.write-us-overlay');
var popupWriteUs = document.querySelector('.popup-write-us');
var popupCloseWriteUs = document.querySelector('.write-us-overlay .popup-close');

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
  console.log('button pressed!');
  popupWriteUs.classList.add('modal-show');

  if (isLocalStorage) {

  } else {
    inputName.focus();
  }
});

popupCloseWriteUs.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupWriteUs.classList.remove('modal-show');
});

// applicationForm.addEventListener('submit', function(evt) {
//   evt.preventDefault();  // не срабатывает
//   console.log("button pressed!!!");
// });

applicationForm.addEventListener("submit", function (evt) {
  if (!inputName.value || !inputEmail.value || !inputMessage.value) {
    evt.preventDefault();
    // popup.classList.add("modal-error");
  }
  // } else {
  //   if (isStorageSupport) {
  //     localStorage.setItem("login", login.value);
  //   }
  // }
});