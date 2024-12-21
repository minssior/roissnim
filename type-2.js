const container = document.querySelector('.container');

function createFallingImage() {
    const img = document.createElement('img');
    img.src = 'todock.png'; // 이미지 경로
    img.className = 'falling-image';
    
    // 랜덤 위치와 속도 설정
    const startX = Math.random() * window.innerWidth; // 화면 너비에 맞춰 랜덤 위치
    const duration = Math.random() * 2 + 2; // 2~4초 랜덤 시간
    const delay = Math.random() * 1; // 랜덤 딜레이

    img.style.left = `${startX}px`;  // X축 랜덤 설정
    img.style.animationDuration = `${duration}s`;
    img.style.animationDelay = `${delay}s`;

    container.appendChild(img);

    // 애니메이션 끝나면 이미지 제거
    setTimeout(() => {
        img.remove();
    }, (duration + delay) * 1000);
}

// 일정 시간 간격으로 이미지 생성
setInterval(createFallingImage, 300); // 300ms마다 이미지 생성
