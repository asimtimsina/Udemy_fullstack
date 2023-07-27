"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//can use  | to declare a variable that can support multiple data type
var score = 33;
score = 44;
score = "55";
var Asim = { name: "Asim", id: 545 }; // this will be user
Asim = { username: "Asim", id: 545 }; // this will be Admin
function getDbId(id) {
    console.log("DB id is: ".concat(id));
}
getDbId(3);
getDbId('33');
