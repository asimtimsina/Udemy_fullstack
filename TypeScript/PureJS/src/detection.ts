function detectType(val: string | number) {
    if (typeof val === 'string') {
        return val.toLowerCase()
    }
    return val + 3
}

function provideId(id: string | null) {
    if (!id) {
        console.log("Please provide ID");
        return
    }
    id.toLowerCase()
}


function printAll(strs: string | string[] | null) {

    if (strs) { // eliminates null value
        if (typeof strs === "object") { // string[]
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") { //string
            console.log(strs);
        }
    }
}

interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string
    isAdmin: boolean
}


function checkIfAdmin(account: User | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin
    }
}

// instanceof is used where a object is created with new keyword
function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());

    } else {
        console.log(x.toUpperCase());
    }
}


type Fish = { swim: () => void };
type Bird = { Fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}   