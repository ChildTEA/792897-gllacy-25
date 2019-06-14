var slideIndex = 1;
showSlides(slideIndex);
var covers = ['style-green', 'slyly-blue', 'style-brown'];

// [
//   {
//     bgColor: "#849d8f",
//     bgImage: 'url("img/promo-icecream-1-bg.png")'
//   },
//   {
//     bgColor: "#8996a6",
//     bgImage: 'url("img/promo-icecream-2-bg.png")'
//   },
//   {
//     bgColor: "#9d8b84",
//     bgImage: 'url("img/promo-icecream-3-bg.png")'
//   }
// ]

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var body = document.querySelector(body);
  var slides = document.querySelectorAll('.promo-slider-item');
  var dots = document.querySelectorAll('.promo-slider-dot');
   
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" promo-slider-dot-active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " promo-slider-dot-active";
}