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


