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

function signUpUser(username: string, email: string, isPaid: boolean) { }

let loginUser = (username: string, email: string, isPaid: boolean = false) => { }
//bydefault isPaid is false



//this could happen
// use TS Union to solve this problem

// function getValue(myVal: number): boolean {
//     if (myVal > 5) { return true }
//     return "200 OK";
// }

//return type in arrow function
const getHello = (): string => { return "Hello" }

const heros = ["thor", "spiderman", "ironman"]
// const heros = [1, 2, 3]

heros.map(hero => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void {
    console.log(errmsg);
}

//some functions never returns a value
function handleError(errmsg: string): never {
    throw new Error(errmsg)
}

export { }