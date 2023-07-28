"use strict";
console.log("Typescript is here");
console.log("Typescript is Awesome");
class User {
    constructor(email, name) {
        this.city = "";
        this.email = email;
        this.name = name;
    }
}
const Asim = new User("Asim@gmail.com", "Asim");
// Asim.city = "Irving" // not allowed cause readonly
