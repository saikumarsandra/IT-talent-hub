console.log(" predefined functions");

let message =()=>{
  console.log("Hello World");
}

/*console.log("set interval");
let count = 0;
let text = ()=>{
  count++;
  console.log(`Number of times thwe function invoked ${count}`);
  console.log(new Date().toLocaleTimeString());
}
 setInterval(text,1000);    //every 1 second

console.log('setTimeout');

console.log(new Date().toLocaleTimeString());
setTimeout(()=>{
  console.log(new Date().toLocaleTimeString());
},5000);*/

console.log('call back js');


let students=[

    {
        Id:1,
        Name:"Raj",
        Age:20,


    }
    ,
    {
        Id:2,
        Name:"Raju",
        Age:20,
    }
]

/*let createStudent= (student)=>{
    setTimeout(()=>{
        students.push(student);
        console.log(students);
    },2000);

}*/
let createStudent= (student)=>{
    setTimeout(()=>{
        students.push(student);
        callback();
    },2000);

}

let getStudentData=()=>{
    setTimeout(()=>{
        students.forEach((student)=>{
            console.log(`${student.Name} ${student.Age}`);
        })
        console.log(students);
    },1000);
}

createStudent({Id:3,Name:"Rajesh",Age:21},getStudentData);

