var actionBtn = document.querySelector(".action");
var changingTxt = document.querySelector(".backgroundColor span");

actionBtn.addEventListener("click" , myFunction);

function myFunction() {
    let RandomColor = "#" + Math.random().toString(16).substr(2,6);
    changingTxt.textContent = RandomColor;
    document.body.style.backgroundColor = RandomColor;
}
window.addEventListener("load",myFunction);

function getRandomColor() {
    var color = "#";
    for (var i=0; i<6; i++) {
        color += (Math.random()*16|0).toString(16);
    }
    return color;
}
function getRandomColor() {
    function numbers() {
        var x = Math.floor(Math.random() * 256);
        return x;
    }
    var color = "rgb(" +numbers() +", " +numbers() +", " +numbers() +")"
    return color; // RGB Color
}

function getRandomColor(format = 'hex') {
    const randomString = Math.random().toString(16).slice(-6);
    if (format === 'hex') {
        return '#' + randomString;
    }
    if (format === 'rgb') {
        const [r, g, b] = randomString.match(/.{2}/g).map(c=>parseInt(c, 16));
        return `rgb(${r}, ${g}, ${b})`;
    }
}