

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

// 261. addEventListener
// addEventListener allows multiple functions to add to a element whereas onclick doesn't.

const btnV4 = document.querySelector("#btnV4")

btnV4.addEventListener('click', function () {
    alert("You clicked V4.")
})

const btnV5 = document.querySelector("#btnV5")

// btnV5.addEventListener('onclick', () => {
//     alert("You clicked V5.")
// })

// btnV5.addEventListener('dblclick', () => {
//     alert("You clicked V5.")
// })

btnV5.addEventListener('mouseup', () => {
    alert("You clicked V5.")
})



// 262. Random Color Exercise

const btncolor = document.querySelector("#btncolor");

btncolor.addEventListener('click', function () {
    // document.body.style.backgroundColor = 'olive'
    document.body.style.backgroundColor = randomFunction();
})

const randomFunction = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`
}
