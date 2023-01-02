// Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties

let yob=2000;
let year=2022-yob;

if ((year>=13)&&(year<=19)){
  console.log("Teenage");
}else if ((year>=20)&&(year<=29)){
  console.log("Twenties");
}