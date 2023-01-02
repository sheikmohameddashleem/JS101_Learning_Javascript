//Given and character if it is a consonant print "Consonant"
let a="B"

if ((!(a=="A"))&&(!(a=="E"))&&(!(a=="I"))&&(!(a=="O"))&&(!(a=="U"))){
  console.log("consonant");
}
else{
  console.log("vowel");
}

//method 2
switch(a)
  {
    case "A":console.log("vowel");
      break;
    case "E":console.log("vowel");
      break;
    case "I":console.log("vowel");
      break;
    case "O":console.log("vowel");
      break;
    case "U":console.log("vowel");
      break;
    default:console.log("consonant");
      break;
  }

//method 3

((a=="A")||(a=="E")||(a=="I")||(a=="O")||(a=="U"))? console.log("Vowel"):console.log("consonant")

//method 4

if ((!(a=="A"))&&(!(a=="E"))&&(!(a=="I"))&&(!(a=="O"))&&(!(a=="U"))){
  console.log("consonant");
}
else{
  console.log("vowel");
}