// Given any character, if it is a vowel print "Vowel"

let a="A"

if ((a=="A")||(a=="E")||(a=="I")||(a=="O")||(a=="U")){
  console.log("Vowel");
}
else{
  console.log("Not a vowel or consonant");
}

// method 2(switch case)

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
//method 3(terniary operator)

  ((a=="A")||(a=="E")||(a=="I")||(a=="O")||(a=="U"))? console.log("Vowel"):console.log("Not a vowel or consonant")

// method 4

if ((!(a=="A"))&&(!(a=="E"))&&(!(a=="I"))&&(!(a=="O"))&&(!(a=="U"))){
  console.log("consonant");
}
else{
  console.log("vowel");
}