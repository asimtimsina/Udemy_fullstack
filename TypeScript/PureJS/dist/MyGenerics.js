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
