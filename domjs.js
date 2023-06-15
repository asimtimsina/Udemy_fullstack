// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }


// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

// const links = document.querySelectorAll('p a');

// for (let link of links) {
//     console.log(link.href)
// }

// 247. getElementsByTagName & className
// const allimages = document.getElementsByTagName('img');

// for (let each of allimages) {
//     console.log(each.src)
// }


// const sqimages = document.getElementsByClassName('square');
// console.log(sqimages)

////////////////////////////////////////////
//248. querySelector & querySelectorAll

// document.querySelector('p') // returns the first element that matches the selector
// document.querySelectorAll('p') // returns a NodeList of all the elements that match the selector

// document.querySelector('#banner') // returns the first element with the id banner
// document.querySelector('.paragraph') // returns the first element with the class paragraph
// document.querySelectorAll('.paragraph') // returns a NodeList of all the elements with the class paragraph


// console.log(document.querySelector("a[title='Java']"))
// console.log(document.querySelectorAll("p"))
// console.log(document.querySelectorAll("p a"))

// const links = document.querySelectorAll("p a")

// for (let each in links) {
//     console.log(each);
// }

///////////////////////////////
// 249. innerHTML, textContent, & innerText

const h1 = document.querySelector('h1');
console.dir(h1);


document.querySelector('h2').innerHTML = '<i> Asim </i>' // '<i> Asim </i>
document.querySelector('h2').innerHTML += '<sub> Timsina </sub>' // '<i> Asim </i><sub> Timsina </sub>'

