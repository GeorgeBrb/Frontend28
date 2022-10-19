let Fib1=1;
let Fib2=1;
let Fib3=0;
console.log(Fib1);
console.log(Fib2);
for(let i=3;i<=50;i++)
{
    Fib3=Fib1+Fib2;
    Fib1=Fib2;
    Fib2=Fib3;
    console.log(Fib3)

}