//can use  | to declare a variable that can support multiple data type
let score: number | string = 33

score = 44
score = "55"



type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let Asim: User | Admin = { name: "Asim", id: 545 } // this will be user
Asim = { username: "Asim", id: 545 }; // this will be Admin


function getDbId(id: number | string) {
    console.log(`DB id is: ${id}`);

}
getDbId(3)
getDbId('33')


function checkId(id: number | string) {
    if (typeof id === 'string') {
        id.toLowerCase();
    }
}



///array

const data1: number[] | string[] = [1, 2, 3, "4"]; //can be array of number [] or array of string[]
const data2: (number | string)[] = [1, 2, 3, "4"]; //can be array of number [] or array of string[]



//literal assignment

let pi: 3.14 = 3.14;
// pi = 3.1415; // cannot assign other values that 3.14.


//similar to enum
let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = 'aisle';
// seatAllotment = 'cabin';


export { }