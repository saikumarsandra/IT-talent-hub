// spread operator

/* ... is a spread operator. It spreads the elements of an array into the elements of another array*/
const l = 'javascript';
const arr = [...l];
console.log(arr);


let number = [1,2,3,4,5,6,7,8,9,10];

let min = Math.min(...number);
console.log(min);


const frontend = ['html', 'css', 'javascript', 'jquery'];
const backend = ['nodejs', 'express', 'mongodb'];

const stack = [...frontend, ...backend];
console.log(stack);


const user={

    firstName: 'John',
    age: 30
}

const newUser = {...user, lastName: 'Doe'};
console.log(newUser);

const newUser1 = {...user, lastName: 'Doe', age: 40};
console.log(newUser1);

const person = ['John', 'Doe', 30];

const greet = (firstName, lastName, age) => {
    console.log(`Hello ${firstName} ${lastName} ${age}`);
}

greet(...person);


// Rest operator- it is used to collect the remaining items in an array

// should be always used with the last parameter of a function
// represented as ...

const days =['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const [days1,...days2] = days;
console.log(days1,days2);

const product = {

    name: 'iphone',
    price: 1000,
    discount: '10%',
    isAvailable: true
}

const {price,...items}=product;
console.log(price,items);


const student = {
    name: 'john',
    age: 14,
    grade:4
}

 const getMarks = ({name,age,...marks}) => {
     console.log(name,marks);
 }
 getMarks(student);


 /// rest operator
 let sum=(...nums)=>{
     let total = 0;
     for(let i=0;i<nums.length;i++){
         total += nums[i];
     }

     console.log(total);
 }

 sum(1,2,3,4,5,6,7,8,9,10);
 sum(1,2,3,4,5,6,7);


 let sub = (...nums) => {
     return nums.reduce((a,b)=>a-b);
    }

    console.log(sub(2,1));

 let mul = (...nums) => {
        return nums.reduce((a,b)=>a*b);
       }
   
       console.log(mul(2,1));

 let div = (...nums) => {
        return nums.reduce((a,b)=>a/b);
       }
   
       console.log(div(2,1,2,3)); 