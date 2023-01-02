//Given 3 numbers (all different values), print which is greatest

let a=3;
let b=4;
let c=5;

if ((a>b)&&(a>c)){
  console.log("a is greatest");
}else if((b>a)&&(b>c)){
  console.log("b is greatest")
}else{
  console.log("c is greatest ")
}
//method2
((a>b)&&(a>c))? console.log("a is greatest"):((b>a)&&(b>c))?console.log("b is greatest"):console.log("c is greatest ")

//method 3
let d=(a,b,c)

switch(d)
  {
    case ((a>b)&&(a>c)) :  console.log("a is greatest");
      break;
    case ((b>a)&&(b>c)) : console.log("b is greatest");
      break;
    default: console.log("c is greatest");
      break;
  }

