// 187. Introducing Object Literals
// objects are collections of properties
// properties are a key value pair

//188. Creating Object Literals
let person = {
    firstName: 'Mick',
    lastName: 'Jagger'
};

const kitchenSink = {
    favNum: 123112,
    isFunny: true,
    colors: ['red', 'orange'],
};



//189. Accessing Data Out Of Objects
// dot notation
// bracket notation

console.log(person);
console.log(person.firstName);
console.log(person['lastName']);
console.log(person.age);    //undefined

const years = {
    1999: 'good',
    2020: 'bad'
};

console.log(years['1999']);  //good
console.log(years[1999]);    //good
// console.log(years.1999);     //error
