let myarr = [7684, 'hello', true, console.log, 45.67];
console.log(myarr);

console.log( typeof(myarr));
console.log(Array.isArray(myarr));

const fruits = ['apple', 'grapes', 'kiwi', 'mango', 'orange', 'fig'];
console.log(fruits.length);

//indexing
console.log( fruits[2]);
console.log( fruits.indexOf('mango'));

console.log(fruits.flat(-3));

//slicing
console.log( fruits.slice(2, 5));
console.log( fruits.slice(2, 1000));
console.log( fruits.slice(2));
console.log( fruits.slice(1, -3));
console.log( fruits.slice(0));
