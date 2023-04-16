const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const bannerImg = document.querySelector('.banner-img');
const bannerTagline = document.querySelector('#banner p');
const dots = document.querySelectorAll('.dot');
const arrow_rigth = document.querySelector('.arrow_right');
const arrow_left = document.querySelector('.arrow_left');

let currentSlide = 0;
let intervalId;

function showSlide(slideIndex) {
  bannerImg.src = "./assets/images/slideshow/" + slides[slideIndex].image;
  bannerTagline.innerHTML = slides[slideIndex].tagLine;
  bannerImg.classList.add('active');
  bannerTagline.classList.add('active');
  dots[currentSlide].classList.remove('dot_selected');
  dots[slideIndex].classList.add('dot_selected');
  currentSlide = slideIndex;
}

function nextSlide() {
  let nextSlideIndex = currentSlide + 1;
  if (nextSlideIndex >= slides.length) {
	nextSlideIndex = 0;
  }
  console.log("Right" + nextSlideIndex)
  showSlide(nextSlideIndex);
}

function previousSlide(){
	let previousSlideIndex = currentSlide -1;
	if(previousSlideIndex < 0 ){
		previousSlideIndex = slides.length -1;
	}
	console.log("Left" + previousSlideIndex)
	showSlide(previousSlideIndex);
  }

function startCarousel() {
  intervalId = setInterval(nextSlide, 5000);
}

function stopCarousel() {
  clearInterval(intervalId);
}

// add event click at dot, clear intervall and start a new one
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
	showSlide(index);
	stopCarousel();
	startCarousel();
  });
});

arrow_rigth.addEventListener('click', () => {
	nextSlide();
	console.log("hi R")
  });
arrow_left.addEventListener('click', () => {
	previousSlide();
	console.log("hi L")
});

showSlide(currentSlide);
startCarousel();



//code test



