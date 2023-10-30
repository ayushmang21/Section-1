function addNums(a,b)
{
    var c=a+b;
    console.log(c);
}

addNums(9,8);

// console.log(c);


// using Assignment operator

const getPercentage = function(m1, m2, m3, m4, m5){
    const percentage = (m1+m2+m3+m4+m5) / 5;

    // console.log(percentage);
    return percentage;
};

const ans = getPercentage(45, 65, 78, 54,99);
console.log(ans);

// arrow function

const factorial = (n) => {
    let fact = 1;
    for(let i=2; i<=n; i++)
    {
        fact*= i;
        // fact=fact*i;
    }
    return fact;
}

let result = factorial(7);
console.log(result);

const newFunction = factorial;

console.log(newFunction(5));

const  permutation = (n, r, fact_function) => {
    let ans = fact_function(n)/fact_function(n-r);
    console.log('Permutation is : ' ,ans);
}

permutation(10, 3, factorial);