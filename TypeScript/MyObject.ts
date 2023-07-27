

function createUser({ name: string, isPaid: boolean }) { }


createUser({ name: "User", isPaid: false });

const newuser = {
    name: "Asim",
    age: 21,
    isPaid: true
}
createUser(newuser);


// function createCourse(parameter): {return type} { defination }

function createCourse(parameter): { name: string, price: number } {

    // return { name: 'reactjs', price: 399, isFree: false } //cannot add extra values

    //but this will be good
    const course = { name: 'reactjs', price: 399, isFree: false };
    return course;
}
export { }
