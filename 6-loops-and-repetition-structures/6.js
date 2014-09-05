var counter = 3;
while(counter > 0) {
  var password = prompt("Please enter your password.");
  if(password === "12345678") {
    console.log("Access granted.");
  } else { 
    alert("Please try again.");
	counter--;
  }
  console.log("Sorry, access denied.");
}