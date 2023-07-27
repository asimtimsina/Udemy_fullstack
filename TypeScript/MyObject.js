"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "User", isPaid: false });
var newuser = {
    name: "Asim",
    age: 21,
    isPaid: true
};
createUser(newuser);
// function createCourse(parameter): {return type} { defination }
function createCourse(parameter) {
    // return { name: 'reactjs', price: 399, isFree: false } //cannot add extra values
    //but this will be good
    var course = { name: 'reactjs', price: 399, isFree: false };
    return course;
}
function createNewUser(user) { }
