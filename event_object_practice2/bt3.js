let ptr = document.getElementsByClassName('ptr')[0];
let percent = document.getElementsByClassName('percent')[0];
function changeOpacity(i) {
    percent.innerText = i + '%';
    ptr.style.opacity = i / 100;
}

for (let i = 0; i <= 100; i++) {
    setTimeout(() => {
        changeOpacity(i);
    }, i * 10);
}
