console.log("Typescript is here");
console.log("Typescript is Awesome");


// class User {
//     private email: string
//     public name: string
//     #name: string // can also use # to state private 
//     readonly city: string = ""

//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }


// }


//better way of defining a class
class User {

    private _courseCount = 1
    readonly city: string = ""
    constructor(
        public email: string,
        public name: string,
        private userId: string
    ) {
        this.email = email;
        this.name = name;
        this.userId = userId;
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount;
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum;
    }

    private deleteToken() {
        return "Token deleted"
    }


}


const Asim = new User("Asim@gmail.com", "Asim", "Asimo")
// Asim.city = "Irving" // not allowed cause readonly

console.log(Asim.name)
// console.log(Asim.email)