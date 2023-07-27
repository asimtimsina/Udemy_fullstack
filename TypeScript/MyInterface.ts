interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    goodleId?: string

    //two ways to define function
    // startTrail: () => string
    startTrail(): string,

    getCoupon(couponname: string, value: number): number
}


//can add to the existing interface
interface User {
    githubToken: string
}


//TS interface also supports inheritance

interface Admin extends User {
    role: "admin" | "TA" | "Learner"
}

const Asim: User = {
    dbId: 22,
    email: "a@a.com",
    userId: 2211,
    startTrail: () => {
        return "Trail Started"
    },
    getCoupon: (name: "asim10", off: 10) => {
        return 10
    }

}

const Asimo: Admin = {
    dbId: 22,
    email: "a@a.com",
    role: 'admin',
    userId: 2211,
    startTrail: () => {
        return "Trail Started"
    },
    getCoupon: (name: "asim10", off: 10) => {
        return 10
    }

}


