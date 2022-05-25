console.log("Arrow function");

// Arrow functions are a new way to write function expressions.
// Arrow Functions are anonymous functions, which means that they do not have a name.


const add = (a, b) =>{
 return a + b;

} 

const result = add(2, 3);
console.log(result);


// implicit return
const addition =(a,b) => a+b;

const r = addition(2,3);
console.log(r);

// Arrow

const greet = () => 'Hello';

console.log(greet());



// array function with array object

let videos =[
     {
    id:123,
    title: 'a',
    length: '1:30',
    price: '$5.99',
    genre:'tollywod',
    isActive: true
},
    {
        id:1234,
        title: 'ab',
        length: '1:35',
        price: '$5',
        genre:'tollywod',
        isActive: true
      },
         {
            id:123,
            title: 'a',
            length: '1:36',
            price: '$5.90',
            genre:'tollywod',
            isActive: false
        }


]
// filter 
let getVideo= videos.filter(video => video.isActive===false);
console.log(getVideo);

let getVideo1= videos.filter((video) => video.id===123);
console.log(getVideo);


//limitation of arrow function 

let employees = {
    name: 'John',
    age: 30,
    fullName: function () {
        return this.name + ' ' + this.age;
    }
}

console.log(employees.fullName());


// arrow function

let employees1 = {
    name: 'John',
    age: 30,
    fullName: ()=>
    {
        return `${employees1.name} ${ employees1.age}`;
    }
}
console.log(employees1.fullName());

// find method to retrive unique value


let videos2 = [
    {
    id:1234,
    title: 'a',
    length: '1:30',
    price: '$5.99',
    genre:'tollywod',
    isActive: true
},
    {
        id:1234,
        title: 'ab',
        length: '1:35',
        price: '$5',
        genre:'tollywod',
        isActive: true
      },
         {
            id:123,
            title: 'abc',
            length: '1:36',
            price: '$5.90',
            genre:'tollywod',
            isActive: false
        }


]

const videoUnique = videos2.find((video) => 
                        {
                        return  video.title==='a';
                        });
console.log(videoUnique);

/* reduce metod can reduces to the single values -number , array , object

accept to parameters 
1. accumulator - total of all calculations
2. current value - current value of the array

*/


let persons = [
    {
        name: 'John',
        age: 30,
        role: 'admin',
        salary: 70000
    },

    {
        name: 'richard',
        age: 25,
        role: 'full stack developer',
        salary: 200000
    },
    {
        name: 'leo',
        age: 18,
        role: 'IT',
        salary: 20000
    },
]

const data = persons.reduce((accumulator, currentValue) => {

    return accumulator + currentValue.salary;
},0);
console.log(data);

// map method
const users = [
    {
        id:1,
        name: 'John',
        age: 30,
        email: 'john@example.com'
    },
    {
        id:2,
        name: 'doe',
        age: 25,
        email: 'doe@example.com'
    },
    {
        id:3,
        name: 'leo',
        age: 18,
        email: 'leo@example.com'
    },
]

const  User = users.map((user) => {
  return user.name;
});

console.log(User);

// fibbonacci using arrow function

fibonacci = (n) => {
    if (n === 1) {
        return [0, 1];
    }
    let s = fibonacci(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
}
console.log(fibonacci(5));

//  reversing a number using arrow function

reverse = (n) => {
    return n.toString().split('').reverse().join('');
}
console.log(reverse(123));

// factorial
const factorial = n => {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
};

console.log(factorial(5));

// checking palindrome using arrow function

palindrome = (str) => {
    let re = /[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
};
console.log(palindrome('amma'));
// print pattrens using arrow function '*'

printPattern = (n) => {
    for (let i = 0; i < n; i++) {
        let str = '';
        for (let j = 0; j <= i; j++) {
            str += '*';
        }
        console.log(str);
    }
};
printPattern(5);

