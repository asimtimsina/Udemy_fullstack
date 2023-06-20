// console.log("HII")

// // 302. What On Earth Are Prototypes

// String.prototype.yell = function () {
//     return (`OMG!!! ${this.toString().toUpperCase()}!!!`)
// }


// const test = "asimo"
// test.yell();


// Array.prototype.pop = function () {
//     return 'I need this element.'
// }

// console.log([1, 2, 3].pop())

// // prototype -> actual prototype
// // _proto -> reference to the prototype


////////////////////////////////
// 303. Intro to Object Oriented Programming

// 304. Factory Functions

// function hex(r, g, b) {
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// function rgb(r, g, b) {
//     return `rgb(${r},${g},${b} )`
// }

// hex(255, 100, 25); //'#ff6419'

// function makeColor(r, g, b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function () {
//         const { r, g, b } = this;
//         return `rgb(${r},${g},${b})`
//     }

//     color.hex = function () {
//         const { r, g, b } = this;
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }
//     return color;
// }

// const firstColor = makeColor(35, 355, 150);
// firstColor.rgb()
// firstColor.hex()

///////////////////////
// 305. Constructor Functions

// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// //define functions outside the constructor
// //cannot use arrow function

// Color.prototype.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r},${g},${b})`
// }

// Color.prototype.hex = function () {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// Color.prototype.rgba = function (a = "1.0") {
//     const { r, g, b } = this;
//     return `rgba(${r},${g},${b},${a})`
// }

// const color1 = new Color(20, 155, 24);
// const color2 = new Color(202, 155, 24);

// console.log(color1.rgb === color2.rgb) // returns true
// console.log(color1.rgba()) // returns true
// console.log(color1.rgba("0.5")) // returns true
// document.body.style.backgroundColor = color1.rgba();

///////////////////////////////////
//306. JavaScript Classes

// class Color {
//     constructor(r, g, b, name = 'None') {
//         //runs immediately
//         this.r = r
//         this.g = g
//         this.b = b
//         this.name = name;
//     }

//     greet() {

//         return `Hello from Color ${this.name}`
//     }

//     rgb(r, g, b) {

//         return `rgb(${this.r},${this.g},${this.b} )`
//     }

//     hex = function () {
//         const { r, g, b } = this;
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }

//     rgba = function (a = 1.0) {
//         return `rgba(${this.r},${this.g},${this.b},${a} )`

//     }

// }


// const c1 = new Color(233, 111, 222, 'tomato');
// const white = new Color(255, 255, 255, 'White');

////////////////////////////////
// 308. Extends and Super Keywords
// Inheritance


class Pet {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    eat() {
        return `${this.name} is eating.`
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft) {
        super(name, age)
        this.livesLeft = livesLeft
    }
    meow() {
        return "Meow!"
    }
}

class Dog extends Pet {
    bark() {
        return "Woof"
    }
    eat() {
        return `${this.name} if from Dog's class.`
    }
}

const Wyatt = new Dog('Wyatt', 13)
console.log(Wyatt.eat())
console.log(Wyatt.bark())

const suri = new Cat('suri', 1)
console.log(suri.eat())
console.log(suri.meow())