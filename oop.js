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

function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
    return `rgb(${r},${g},${b} )`
}

hex(255, 100, 25); //'#ff6419'

function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {
        const { r, g, b } = this;
        return `rgb(${r},${g},${b})`
    }

    color.hex = function () {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color;
}

const firstColor = makeColor(35, 355, 150);
firstColor.rgb()
firstColor.hex()
