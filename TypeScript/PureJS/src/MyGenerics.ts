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