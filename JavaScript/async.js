console.log('sync js');
console.log('first time');
console.log('second');
console.log('third time');

count();

function count(){
    console.log('counting...');
for(let i=0;i<100;i++)
{
    console.log('stil counting...');
}  

console.log('done counting');
}


console.log('async js');

console.log('first time');
console.log('second');
console.log('third time');


// promise

let task=(success, failure)=>{
    let isDone = false;
    if(isDone){
        success('done');
    }else{
        failure('not done');
    }
}


task((message)=>{
    console.log(message);
},(message)=>{
    console.error(message);
});


// promise

let students =[
    {
        name:'sachin',
        age:25
    },
    {
        name:'sai',
        age:26
    }
]

let createStudent = (student)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            students.push(student);
            let isDone = true;

            if(isDone){
                resolve();
            }else{  
                reject('student data is not aupdated');
            }
        },2000);
   
    });
}

createStudent({name:'kumar',age:28}).then(()=>{
    console.log(student);
}).catch((error)=>{
    console.error(error);
});