/*

logical AND  &&
logical OR   ||


TRUE && TRUE  -> TRUE
TRUE && FALSE  -> FALSE
FALSE && TRUE  -> FALSE
FALSE && FALSE  -> FALSE



TRUE || TRUE  -> TRUE
TRUE || FALSE  -> TRUE
FALSE || TRUE  -> TRUE
FALSE || FALSE  -> FALSE
*/

let a = 10;
let b = 5;
let c = 25;
let d = 100;

console.log('-----AND-----');
console.log(a>b && d>c);
console.log(c<d && d<a);
console.log(b>d && c>b);
console.log(d<c && c<b);




console.log('-----OR-----');
console.log(a>b || d>c);
console.log(c<d || d<a);
console.log(b>d || c>b);
console.log(d<c || c<b);










