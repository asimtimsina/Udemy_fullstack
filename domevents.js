

// 260. The Onclick Property
const btnV2 = document.querySelector("#btnV2")

btnV2.onclick = function () {
    console.log("Click V2");
    alert("You Clicked V2")
}

const btnV3 = document.querySelector("#btnV3")

function Hoverv3() {
    console.log("Hover V3");
    alert("You Hovered V3")
}

btnV3.onmouseenter = Hoverv3;

document.querySelector('h1').onclick = () => {
    alert("You Clicked H1")
}