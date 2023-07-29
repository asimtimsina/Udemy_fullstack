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
