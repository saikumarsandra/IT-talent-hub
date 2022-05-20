console.log("JavaScript Arrays");

let num = [10,20,30,40,50];
console.log(" forloop");
for(let i=0;i<num.length;i++){
    console.log(num[i]);
}
console.log("while loop");
while(num.length>0){
    console.log(num.pop());
}

console.log("forEach loop");
num.forEach(function(value,index){
    console.log(value);
});

console.log("array methods");

let colors = ["red","green","blue"];

console.log(colors);

console.log("shift()")

colors.shift();
console.log(colors);

console.log("pop()");
colors.pop();
console.log(colors);

console.log("push()");
colors.push("yellow");
console.log(colors);


console.log("sort()");
colors.sort();
console.log(colors);

console.log("reverse()");
colors.reverse();
console.log(colors);

console.log("splice")
colors.splice(1,1,"black");// insertion at 1 and remove 1 element

console.log(colors);
colors.splice(2);// remov all elements
console.log(colors);

console.log("slicing")

let newColors = ['red','green','blue'];
let newColors1 = newColors.slice(0,3);
console.log(newColors1);

console.log("concat()");
let newColors2 = newColors.concat(colors);
console.log(newColors2);

console.log("spread operator");
let newColors3 = [...newColors,...colors];
console.log(newColors3);

console.log("indexOf()");
console.log(newColors3.indexOf("red"));

console.log("includes()");
console.log(newColors3.includes("red"));
console.log(newColors3.includes("green",2));

console.log("join()");
console.log(newColors3.join(","));




