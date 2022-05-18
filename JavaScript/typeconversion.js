const price = 30;

console.log(price);

const cost = + "30";

console.log(cost + price);

// type coersion 

console.log('price' +10+'each item');
// Nan - Not a Number

let firstName = 'John';

let n = 779;

console.log(firstName + n);
console.log(firstName -n);

// truthy and falsy values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean(firstName*n));
//

const val =0;

if (val){
    console.log('value is 0');
}
else{
    console.log('invalid');
}

