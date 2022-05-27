// For Each loops

console.log("For Each loops");
const person = [
    {

    
    name: "John",
    age: 30
    },
    {
    name: "Mike",
    age: 23
    },
    {
    name: "Nancy",
    age: 40
    }
]

// passing as a reference 

function showDetails(person){
    console.log(`${person.name} is ${person.age} years old`);
}
person.forEach(showDetails);// call back function

// passing as annonymous function\
person.forEach(function(person){
    console.log(`${person.name} is ${person.age} years old`);
});


// arrow fuction 

person.forEach((person)=>
{
    console.log(`${person.name} is ${person.age} years old`);
});


// for of loop - loops through values of interables
// string , arrays- no object 
// can use break , continue

const days =["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const fullName = 'john doe mikey';

let shortname='';

for(const letter of fullName){
    console.log(letter);
}

for(const letter of days){
    console.log(letter);
}

for(const letter of fullName){
    //console.log(letter);
    if(letter === ' '){
        continue;
    }
    else{
       shortname += letter; 
    }
}

console.log(shortname);
