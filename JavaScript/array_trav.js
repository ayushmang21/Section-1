const nums = [2, 5, 65, 78, 86, 77, 43];

for(let n of nums)
{
    if(n%2===0)
    console.log(n);
}

    console.log('------------------------------');

nums.forEach( (n) => { if(n%2 !== 0) console.log(n); } );

// Create a new array that contains the square of all elements
//map
const newArr = nums.map((n) => { return n**2} );
console.log(newArr);

//filter
const evens = nums.filter((a) => { return a%2 === 0 })
console.log(evens);

const prices = [2300, 150, 1300, 800, 300, 600, 750];
const p = prices.filter((i) => { return i<1000 && i>500})
console.log(p);

const mails = ['mmm@yahoo.com', 'abc@gmail.com', 'xyz@gmail.com', 'jjj@hotmail.om']
const e = mails.filter((m) => { return m.includes('gmail')})
console.log(e);

// const disc 
console.log(prices.map((p) => { return p*0.9}));