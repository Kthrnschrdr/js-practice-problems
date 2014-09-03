var x = true;
while(x = true) {
 var num = prompt("Please tell me a positive, odd integer.");
 if(num >= 1  && num%2 == 1) {
    console.log("Good job!")
    x = false;
  }
 else {
    console.log("Nope, try again.")
 }
}