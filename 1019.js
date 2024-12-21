
function showElements() {
    const elements = document.getElementById("elements");
    elements.classList.toggle("show");
}

document.getElementById("showbutton").addEventListener("click", function() {
    const elements = document.querySelectorAll(".hidden-elements");
    elements.forEach(el => {
        if (el.classList.contains("show")) {
            // 요소가 보일 때
            el.classList.remove("show");
            // 애니메이션이 끝난 후 visibility를 hidden으로 변경
            setTimeout(() => {
                el.style.visibility = 'hidden';
            }, 1000); // 1초 후에 visibility 변경
        } else {
            // 요소가 숨겨져 있을 때
            el.style.visibility = 'visible'; // 즉시 visibility를 visible로 변경
            el.classList.add("show");
        }
    });
});