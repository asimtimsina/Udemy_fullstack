// const superHeros:[] = [] // means the array will always be empty array
const superHeros: string[] = [] //means array of string


const num1: number[] = []
const num2: Array<number> = []
// can define type of array with <> too

superHeros.push("spiderman");



//////////////
// User defined type array

type User = {
    name: string,
    isActive: boolean
}

const allUsers: User[] = [];


//// 2D array

const MLModels: number[][] = [

    [255, 255, 255],
    [1, 2, 3]
]