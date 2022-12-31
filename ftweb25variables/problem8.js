let arr=[1,2,3,4,5,6];
let count1=0;
let count2=0;
for(let i=0;i<arr.length;i++)
  {
    if(arr[i]%2==0)
    {
      count1++;
    }
    else 
    {
      count2++
    }
  }console.log("even: ",count1);
console.log("odd:",count2)