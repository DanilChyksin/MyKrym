const spanOne = document.querySelector(".more");
const spanTwo = document.querySelector(".more-two");
const spanThree = document.querySelector(".more-three");

const pageBefore = document.querySelector(".page-before");
const pageBeforeTwo = document.querySelector(".page-before-two");
const pageBeforeThree = document.querySelector(".page-before-three");
const application = document.querySelector(".application");
const applicationTwo = document.querySelector(".application-two");
const applicationThree = document.querySelector(".application-three");

const page = document.querySelector(".page");
const closeIcon = document.querySelector(".close-icon");
const closeIconTwo = document.querySelector(".close-icon-two");
const closeIconThree = document.querySelector(".close-icon-three");

application.addEventListener("click", () => {
  pageBefore.classList.toggle("none");
});
applicationTwo.addEventListener("click", () => {
  pageBeforeTwo.classList.toggle("none");
});
applicationThree.addEventListener("click", () => {
  pageBeforeThree.classList.toggle("none");
});
spanOne.addEventListener("click", () => {
  pageBefore.classList.toggle("none");
});
closeIcon.addEventListener("click", () => {
  pageBefore.classList.toggle("none");
});
closeIconTwo.addEventListener("click", () => {
  pageBeforeTwo.classList.toggle("none");
});
closeIconThree.addEventListener("click", () => {
  pageBeforeThree.classList.toggle("none");
});
spanTwo.addEventListener("click", () => {
  pageBeforeTwo.classList.toggle("none");
});
spanThree.addEventListener("click", () => {
  pageBeforeThree.classList.toggle("none");
});

// анимация

const scrollItems = document.querySelectorAll(".scroll-item");
const scrollReview = document.querySelectorAll(".review");
const scrollForm = document.querySelector(".form");
const scrollAnimation = () => {
  let windowCenter = window.innerHeight / 2 + window.scrollY;
  scrollItems.forEach((el) => {
    let scrollOffset = el.offsetTop + el.offsetHeight;
    if (windowCenter >= scrollOffset) {
      el.classList.add("animation");
    } else {
      el.classList.remove("animation");
    }
  });
  scrollReview.forEach((el) => {
    let scrollTop = window.scrollY;
    let scrollOffset = 3400;
    if (scrollTop >= scrollOffset) {
      el.classList.add("animation");
    } else {
      el.classList.remove("animation");
    }
  });
  let scrollTop = window.scrollY;
  let scrollOffset = 2655;
  if (scrollTop >= scrollOffset) {
    scrollForm.classList.add("animation");
  } else {
    scrollForm.classList.remove("animation");
  }
};
scrollAnimation();
document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    scrollAnimation();
  });
});

const slider1 = document.querySelector(".slider1");
const slider2 = document.querySelector(".slider2");
const slider3 = document.querySelector(".slider3");
const prevButton = document.querySelectorAll(".prev-button");
const nextButton = document.querySelectorAll(".next-button");
const slides1 = Array.from(slider1.querySelectorAll("img"));
const slides2 = Array.from(slider2.querySelectorAll("img"));
const slides3 = Array.from(slider3.querySelectorAll("img"));
const slideCount = slides1.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.forEach((el) => el.addEventListener("click", showPreviousSlide));
nextButton.forEach((el) => el.addEventListener("click", showNextSlide));

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides1.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
  slides2.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
  slides3.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

// Инициализация слайдера
updateSlider();
