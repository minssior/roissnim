// .info-1 요소의 너비를 가져와 .empty-box에 적용
window.addEventListener("load", function() {
    const info1 = document.querySelector(".info-1");
    const emptyBox = document.querySelector(".empty-box");

    const info1Width = info1.offsetWidth; // .info-1의 실제 너비 계산
    emptyBox.style.width = `${info1Width}px`; // .empty-box에 동일한 너비 적용
});

