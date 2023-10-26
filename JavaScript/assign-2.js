
//----------------------------Prime number(100 -2000)-------------------//

for (i = 100; i <= 2000; i++)
{
    count = 0;
    for (j = 2; j <= i / 2; ++j)
    {
        if (i % j === 0)
        {
            count++;
        }
    }
    if(count==2)
    console.log(i + ' - is Prime');
}

//-------------------Prefect Squares(10-200)------------------//

for (let i = 10; i <= 200; i++)
{
    // let sqrt = i ** 0.5;
    // let n = sqrt * sqrt;
    if (Math.sqrt(i) == parseInt(Math.sqrt(i)))
    {
        console.log(i + " - is Perfect Square");
    }
}

//-----------------------------------Palindrome---------------------------//

n = 454;
let sum = 0;
temp = 454;

while (n > 0) {
    r = n%10;
    sum = (sum * 10) + n % 10;
    n = n / 10;
}
console.log(temp);
console.log(sum);

if (temp == sum) {
    console.log('Palindrome');
}
else {
    console.log('Not Palindrome');
}

// --------------------------------------Reverse-----------------------------------//

// n1 = 1234;
// let rev = 0;
// let rem = 0;

// while (n1>0) {
//     rem = n1 %10;
//     rev = (rev * 10) + rem;
//     n1 = n1/10;
// }
// console.log(n1);
// console.log(rev);

let num1 = 123456789;
let result = num1.toString().split('').reverse().join('');
console.log(result);

//----------------------------------Armstrong--------------------------------//

function isArmstrong(number) {
    const digits = number.toString().split('');
    const order = digits.length;
    const sum = digits.reduce(
        (acc, digit) =>
            acc + Math.pow(parseInt(digit), order), 0);

    if (sum === number) {
        console.log(
            number + " is an Armstrong Number");
    }
    else {
        console.log
            (number + " is not an Armstrong Number");
    }
}

isArmstrong(9474);
isArmstrong(520);
