// const score: Array<number> = []


function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any {
    return val;
}

function identityThree<Type>(val: Type): Type {
    return val;
}

function identityFour<T>(val: T): T {
    return val;
}
// identityThree and identityFour are exactly the same
identityThree(true)

function getSearchProducts<T>(products: T[]): T {
    return products[3]
}

// converting same function to arrow function

const getSearchProducts1 = <T>(products: T[]): T => {
    return products[3]

}


//Generic Classes

function anotherFunction<T, U extends number>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}
// anotherFunction(3, "4") // error
anotherFunction(3, 4) // works
anotherFunction("3", 3) // works





////////////////////////////////

interface Quiz {
    name: string,
    fullPoints: Number
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product);
    }

}