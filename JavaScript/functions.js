console.log('functions')

// types of functions
/* 1.function with no arguments
   2.function with arguments
   3.function with return value
    4.function with arguments and return value
    5.function with no arguments and return value
    6.function with arguments and no return value
*/

// function with no arguments
function add(){
    console.log('addition');
}

add();

// function assigning with variable

let add1 = function(){
    console.log('function assigned to variable');
}
add1();

// function with arguments

let details = function (firstname,age){
let message = ` hi am ${firstname} i am ${age} years old`;
 console.log(message);
}
details('sachin',25);

// funstion with return value

let res = function(a,b){
   let result = a+b;
   return result;
}
console.log(res(10,20));

// let and var differance 
 

function usingVar(){
    var i =10;
    for (var i = 0; i <= 15; i++) {
        console.log(i);
    }
        console.log(i);
}
usingVar();

function usinglet(){
    let i =10;
    for (let i = 0; i <=10; i++) {
        console.log(i);
    }
        console.log(i);
}
usinglet();