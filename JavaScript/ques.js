
//---------------------------------------------------Perfect Square---------------------------------------//

num1 = 144;
sqrt = num1 ** 0.5;
n = sqrt * sqrt;
if(num1 === n)
{
    console.log("Perfect Square");
}
else
{
    console.log("Not Perfect Square");
}

//---------------------------------------------------Prime Number--------------------------------------//

    num2 = 13;
    flag = false;

    for (i = 2; i <= num2 / 2; ++i)
    {
      if (num2 % i === 0) {
        flag = true;
        break;
      }
    }

    if (!flag)
        console.log("Prime");
    else
        console.log("Not Prime");

//-------------------------------------------------Fibo Series-------------------------------------//

n1 = 15, firstTerm = 0, secondTerm = 1;
console.log("Fibonacci Series Till - " + n1);

for (let i = 1; i < n1; ++i)
{
    console.log(firstTerm + ",");

    nextTerm = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = nextTerm;
}

//--------------------------------------------------7 && 11---------------------------------------//

for (let i = 400; i <= 1200 ; i++)
{
    if (i%7 && i%11 === 0)
    {
        console.log(i + " - is Divisible");
    }
    else
    {
        // console.log(i + " - is Not Divisible");
    }
}

//---------------------------------------------------Sum---------------------------------------------------//

sum = 0;
for(j = 1; j<=100; j++)
{
    sum = sum + i;
}
    console.log("Sum = "+ sum);