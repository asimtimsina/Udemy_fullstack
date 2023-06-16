

// // 260. The Onclick Property
// const btnV2 = document.querySelector("#btnV2")

// btnV2.onclick = function () {
//     console.log("Click V2");
//     alert("You Clicked V2")
// }

// const btnV3 = document.querySelector("#btnV3")

// function Hoverv3() {
//     console.log("Hover V3");
//     alert("You Hovered V3")
// }

// btnV3.onmouseenter = Hoverv3;

// document.querySelector('h1').onclick = () => {
//     alert("You Clicked H1")
// }

// // 261. addEventListener
// // addEventListener allows multiple functions to add to a element whereas onclick doesn't.

// const btnV4 = document.querySelector("#btnV4")

// btnV4.addEventListener('click', function () {
//     alert("You clicked V4.")
// })

// const btnV5 = document.querySelector("#btnV5")

// // btnV5.addEventListener('onclick', () => {
// //     alert("You clicked V5.")
// // })

// // btnV5.addEventListener('dblclick', () => {
// //     alert("You clicked V5.")
// // })

// btnV5.addEventListener('mouseup', () => {
//     alert("You clicked V5.")
// })



// // 262. Random Color Exercise

// const btncolor = document.querySelector("#btncolor");

// btncolor.addEventListener('click', function () {
//     // document.body.style.backgroundColor = 'olive'
//     document.body.style.backgroundColor = randomFunction();
// })

// const randomFunction = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r},${g},${b})`
// }


// 263. Events & The Keyword This

// const btns = document.querySelectorAll('#btn')

// function colorize() {

//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     this.style.backgroundColor = `rgb(${r},${g},${b})`
// }

// for (let btn of btns) {
//     btn.addEventListener('click', colorize);
// }


// 264. Keyboard Events & Event Objects

const textid = document.querySelector('#text')

// textid.addEventListener('keydown', () => { // listens to keydown
//     console.log('Keydown')
// })

// textid.addEventListener('keyup', () => { //listens to keyup
//     console.log('keyup')
// })


// textid.addEventListener('keydown', (event) => { // listens to keydown
//     console.log(event)
//     console.log(event.key) // key in the keyboard
//     console.log(event.code) //location of key in the keyboard
// })


// window.addEventListener('keydown', (e) => { //listens to the keyboard event anywhere in the document
//     console.log(e.key)
// })


// 265. NEW VERSION: Form Events & PreventDefault

// const shelterform = document.querySelector('#shelterform');
// shelterform.addEventListener('submit', (e) => {
//     console.log("Submitted!")
// })

shelterform.addEventListener('submit', (e) => {
    e.preventDefault(); //prevents the default behavior // not to reload the page after submission
    console.log("Submitted!")
})
