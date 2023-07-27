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
