let person =(name,age)=>{
    let details =  `Hello ${name} you are ${age} years old`;
    console.log(details);
}
person('John',30);

let person1 = (name,age=18) => 
    {
let details =  `Hello ${name} you are ${age} years old`;
    console.log(details);
    }

    person1('John');
    person1('John',30);

    let multiply = (a=5,b)=>{
        let val = a+b;
        return val;

    }
let result = multiply(undefined,6);
console.log(result);