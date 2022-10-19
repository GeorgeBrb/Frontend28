 const arr = [2, 3, 5, 7, 5, 3];
 let sum=0;
 let max=0;


 for(let index = 0; index < arr.length; index++)
 {
   sum  = sum+arr[index];
 }
 
 console.log(sum);


 for(let index = 0; index < arr.length; index++)
 {
   if(max<arr[index])
   {
    max=arr[index]
   }
 }
 
 console.log(max);


