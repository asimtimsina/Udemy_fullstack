console.log("Typescript is here");
console.log("Typescript is Awesome");


class User {
    email: string
    name: string
    readonly city: string = ""

    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }


}


const Asim = new User("Asim@gmail.com", "Asim")
// Asim.city = "Irving" // not allowed cause readonly