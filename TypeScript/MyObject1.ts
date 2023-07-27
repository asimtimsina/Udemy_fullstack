type User = {
    readonly _id: string // for mongodb // once created cannot be changed
    name: string,
    email: String,
    isActive: boolean
    CCNumber?: number // is optional
}

let myUser: User = {
    _id: "12345",
    name: "Asimo",
    email: 'asimo@gi.com',
    isActive: true
}

myUser.email = 'omisa@gma.com';
// myUser._id = "324";



///////////////////

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

export { }