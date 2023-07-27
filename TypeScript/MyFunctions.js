"use strict";
// function addTwo(num) {
//     return num + 2;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// addTwo(5);
// the type of addtwo and num is any which doesn't make sense
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper('asim');
// type defination is string on function declaration : both for function and the parameters.
function signUpUser(username, email, isPaid) { }
var loginUser = function (username, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
//bydefault isPaid is false
//this could happen
// use TS Union to solve this problem
// function getValue(myVal: number): boolean {
//     if (myVal > 5) { return true }
//     return "200 OK";
// }
//return type in arrow function
var getHello = function () { return "Hello"; };
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
//some functions never returns a value
function handleError(errmsg) {
    throw new Error(errmsg);
}
