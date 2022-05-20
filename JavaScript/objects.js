// Objects is a collection of properties that can be used to create objects.
// objects stored as key value pairs

console.log("objects");

const person ={
    name:"sai",
    age:23,
    hobbies:["cricket","football"],
    phone:9533480309,
}

// dot notation
console.log(person.age);
console.log(person.hobbies[1]);

// bracket notation
console.log(person['name']);
console.log(`${person.name} is ${person.age} years old`);

let stack ={
    ui:'reactjs',
    frontend:"html"
}

let frontend = 'ui'// variable

console.log(frontend);

let techstack = stack[frontend];
console.log(techstack);

// dot notation

let Fe = stack.frontend;
console.log(Fe);

// template literals with objects

let gadget={
    type:"mobile",
    brand:"apple",
    price:10000,
    color:"black"
}

console.log(`${gadget.type} ${gadget.brand} is of price ${gadget.price} and color is ${gadget.color}`);