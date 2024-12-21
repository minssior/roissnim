const emojis = ['🍉', '🍍', '🍊', '🥝', '🍇'];
const button = document.getElementById('emoji-button');

// 버튼 클릭 시 이모지 여러 개 생성
button.addEventListener('click', () => {
    for (let i = 0; i < 20; i++) {
        createEmojiRandom();
    }
});

// 화면 더블클릭 시 이모지 생성
document.addEventListener('dblclick', (e) => {
    createEmojiAtPosition(e.clientX, e.clientY);
});

// 무작위 위치에 이모지 생성
function createEmojiRandom() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    createEmojiAtPosition(x, y);
}

// 특정 위치에 이모지 생성
function createEmojiAtPosition(x, y) {
    const emoji = document.createElement('span');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.position = 'absolute';
    
    emoji.style.left = `${x}px`;
    emoji.style.top = `${y}px`;

    // 랜덤 크기 설정 (24px ~ 72px)s
    const randomSize = Math.floor(Math.random() * 109) + 24;
    emoji.style.fontSize = `${randomSize}px`;

    emoji.style.transition = 'opacity 2s';
    
    document.body.appendChild(emoji);

    setTimeout(() => {
        emoji.style.opacity = 0;
        setTimeout(() => emoji.remove(), 2000);
    }, 1000);
}


// 화면 더블클릭 시 이모지 생성
document.addEventListener('dblclick', (e) => {
    createEmojiAtPosition(e.pageX, e.pageY); // e.clientX → e.pageX로 변경
});

function showImages() {
    const additionalImages = document.querySelector('.additional-images');
    additionalImages.classList.toggle('hidden');
}


