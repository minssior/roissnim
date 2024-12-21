window.onload = function() {
    // 각 요소를 무작위 위치로 설정하는 함수
    function randomizePosition(element) {
        const maxX = window.innerWidth - element.offsetWidth;
        const maxY = window.innerHeight - element.offsetHeight;
        
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        element.style.left = `${randomX}px`;
        element.style.top = `${randomY}px`;
    }

    // gif-1과 gif-2 요소 선택
    const gif1 = document.querySelector('.gif-1');
    const gif2 = document.querySelector('.gif-2');
    
    // 위치 무작위화 실행
    randomizePosition(gif1);
    randomizePosition(gif2);
};
