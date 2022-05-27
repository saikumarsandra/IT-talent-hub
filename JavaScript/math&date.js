// math object

const num = 3.4565

const result = Math.floor(num);
console.log(result);

const result1 = Math.ceil(num);
console.log(result1);

const min = Math.min(1,2,3,4,5,6,7,8,9,10);
console.log(min);

const max = Math.max(1,2,3,4,5,6,7,8,9,10);
console.log(max);

// random number

const random = Math.random();
console.log(random);

// date object

const today = new Date();
console.log(today);

const month = today.getMonth();
console.log(month);

const months =[
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
console.log(months[month]);

const day = today.getDay();
console.log(day);
// getting day
const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
console.log(`todays is ${days[day]}`);

// age calculator using date object

let age = prompt('what is your age');
const birthYear = today.getFullYear() - age;
console.log(birthYear);






