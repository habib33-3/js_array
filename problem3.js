let number1 = 13;
let number2 = 79;
let number3 = 45;

if (number1 > number2) {
  if (number1 > number3) {
    console.log("number1 greatest");
  } else {
    console.log("number3 greatest");
  }
} else if (number2 > number1) {
  if (number2 > number3) {
    console.log("number2 greatest");
  } else {
    console.log("number3 greatest");
  }
} else {
  console.log("number3 greatest");
}
