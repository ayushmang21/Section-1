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

// adding element

fruits.push('banana'); //adds at the end
fruits.unshift('papaya') //adds at the beginning

console.log(fruits);

// replacing elements

fruits[2] = 'cherry';
console.log(fruits);

//removing elements

fruits.pop(); // removes last element
fruits.shift(); // removes first element
console.log(fruits);

//splice parameters - starting index no. , No. of elements to remove

fruits.splice( 2,2 ); // removing elements
console.log(fruits);

fruits.splice( 1,2 );
console.log(fruits);

fruits.splice( 1,2, 'tomato', 'berry' );
console.log(fruits);

//Also used in Strings
// indexing - []
//slicing - slice()
//length - .length