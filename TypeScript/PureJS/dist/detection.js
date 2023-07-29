"use strict";
function detectType(val) {
    if (typeof val === 'string') {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}
function printAll(strs) {
    if (strs) { // eliminates null value
        if (typeof strs === "object") { // string[]
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") { //string
            console.log(strs);
        }
    }
}
function checkIfAdmin(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
// instanceof is used where a object is created with new keyword
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
