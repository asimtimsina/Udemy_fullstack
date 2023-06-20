const add = (x, y) => x + y;

const PI = 3.1415;

const square = x => x * x;

// module.exports = "Hello!"

module.exports.add = add;
module.exports.PI = PI;
module.exports.square = square;

const phi = 2;

exports.phi = phi; // shortform



// { add: [Function: add], PI: 3.1415, square: [Function: square], phi=2 }

