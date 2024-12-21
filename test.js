const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// 이미지 개수
const totalSlides = document.querySelectorAll('.slider img').length;

// 버튼 클릭 이벤트
nextButton.addEventListener('click', () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // 마지막에서 처음으로
  }
  updateSlider();
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalSlides - 1; // 처음에서 마지막으로
  }
  updateSlider();
});

// 슬라이더 업데이트 함수
function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
