console.log(" with out destructuring");

const set = [1, 2, 3];

const i = set[0];
const j = set[1];
const k = set[2];
console.log(i, j, k);

console.log("with destructuring");
// destructuring
const [a, b, c] = set;
console.log(a, b, c);

// SKIp the rest
const [d, e, ...f] = set;
console.log(d, e, f);


// Destructuring with objects
const app ={
    name: "My App",
    location: "USA",
    categories: ["games", "music", "movies"],
    userLevel:['admin', 'user', 'guest'],
    membershipType:['free', 'premium', 'vip'],
    account: function(userLevelIndex,membershipTypeIndex)
    {
        return [this.userLevel[userLevelIndex],this.membershipType[membershipTypeIndex]]
    }
}


const [user,membership] = app.account(1,0);
console.log(user,membership);



// swap values with destructuring
let a1 = 1;
let b1 = 2;
[a1, b1] = [b1, a1];
console.log(a1, b1);

let [firstName , LastName] ="John Doe".split(" ");

[firstName , LastName] =[LastName,firstName];
console.log(firstName,LastName);

// object destructuring

const employee = {
    id:123,
    EmployeeName: "John",
    role:"full stack developer",
    salary:50000,
    city: "London"
}

const {id,EmployeeName,salary} = employee;
console.log(id,EmployeeName,salary);
console.log(employee)

//object with array destructuring
const employee1 = {
    name:"steve",
    age:30,
    hobbies:['tavelling','cooking','coding'],
    email:'steve@gmail.com',
    skills:['html','css','javascript'],
}

const [skill1,skill2]= employee1.skills;

console.log(skill1,skill2);

const skill3 =  employee1.skills[2];
console.log(skill3);


let [hpbby1, hobby2]= employee1.hobbies;
console.log(hpbby1,hobby2);


// nested object destructuring

const employee2 = {
    name:"steve",
    age:30,
    hobbies:{
        first:"travelling",
        type:"outdoor",
        location:"London"
    },
}
const{name, age, hobbies} = employee2;
console.log(name,age,hobbies);

const{ hobbies:{first:hobby1}} = employee2;
console.log(hobby1);
