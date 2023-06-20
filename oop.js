console.log("HII")

// 302. What On Earth Are Prototypes

String.prototype.yell = function () {
    return (`OMG!!! ${this.toString().toUpperCase()}!!!`)
}


const test = "asimo"
test.yell();


Array.prototype.pop = function () {
    return 'I need this element.'
}

console.log([1, 2, 3].pop())

// prototype -> actual prototype
// _proto -> reference to the prototype