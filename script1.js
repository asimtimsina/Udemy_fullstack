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


//190. Modifying Objects
// objects are mutable
// can change properties

const midterms = {
    danielle: 96,
    thomas: 78
};

midterms.thomas = 79;
midterms['danielle'] = 97;

midterms.ezra = 93;

console.log(midterms); //{ danielle: 97, thomas: 79, ezra: 93 }


//191. Nested Arrays And Objects
// objects can hold arrays
// arrays can hold objects

const comments = [
    {
        username: 'Tammy',
        text: 'lololol',
        votes: 9
    },
    {
        username: 'FishBoi',
        text: 'glub glub',
        votes: 123
    }
];


comments[1].text;   //glub glub
comments[0].votes;  //9


// 193. Intro to For Loops

for (let i = 1; i <= 10; i++) {
    console.log('Hello:', i);
}