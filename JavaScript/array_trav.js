const nums = [2, 5, 65, 78, 86, 77, 43];

for(let n of nums)
{
    if(n%2===0)
    console.log(n);
}

    console.log('------------------------------');

nums.forEach( (n) => { if(n%2 !== 0) console.log(n); } );

// Create a new array that contains the square of all elements

const newArr = nums.map((n) => { return n**2} );
console.log(newArr);