// function addTwo(num) {
//     return num + 2;
// }

// addTwo(5);

// the type of addtwo and num is any which doesn't make sense

function addTwo(num: number): number {
    return num + 2;
}
addTwo(5);


function getUpper(val: string) {
    return val.toUpperCase();

}

getUpper('asim');

// type defination is string on function declaration : both for function and the parameters.

export { }