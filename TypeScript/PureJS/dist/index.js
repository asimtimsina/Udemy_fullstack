"use strict";
console.log("Typescript is here");
console.log("Typescript is Awesome");
// class User {
//     private email: string
//     public name: string
//     #name: string // can also use # to state private 
//     readonly city: string = ""
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }
//better way of defining a class
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "";
        this.email = email;
        this.name = name;
        this.userId = userId;
    }
}
const Asim = new User("Asim@gmail.com", "Asim");
// Asim.city = "Irving" // not allowed cause readonly
console.log(Asim.name);
// console.log(Asim.email)
