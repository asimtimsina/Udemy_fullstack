"use strict";
// const score: Array<number> = []
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
// identityThree and identityFour are exactly the same
identityThree(true);
function getSearchProducts(products) {
    return products[3];
}
// converting same function to arrow function
const getSearchProducts1 = (products) => {
    return products[3];
};
//Generic Classes
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
// anotherFunction(3, "4") // error
anotherFunction(3, 4); // works
anotherFunction("3", 3); // works
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
