//find out if the gender age can get married or not.

// let gender = "female"
// let agem =30
// let agef=21
// let lagem=21
// let lagef=18

// if (((gender=="male")&&(lagem<=agem))||((gender=="female")&&(lagef<=agem))){
//   console.log("you can get married");
// }else {
//   console.log ("you can't get married");
// }

// (((gender=="male")&&(lagem<=agem))||((gender=="female")&&(lagef<=agem)))? console.log("you can get married"): console.log ("you can't get married");
// one way
// let a="Masai";
// let b=1;
// if (typeof(a)!= b){
//   console.log("please provide a valid number")
// }else if (a%2==0) {
//   console.log("Even");
// }else{
//   console.log("Odd");
// }

// if (a*0==0){
//   if(a%2==0){
//     console.log("even")
//   }else{
//     console.log("Odd")
//   }
// }else{
//   console.log("enter valid input")
// }

let name="luffy";
let name2="zora";
let name3="luffy";

if (name==name2==name3){
  console.log("All the name are same");
}else if((name==name2)||(name==name3)||(name2==name3)){
  console.log("name, name3");
}
else {
 console.log ("all are different")
}