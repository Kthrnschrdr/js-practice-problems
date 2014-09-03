var counter = 3
while(counter > 0) {
  var password = prompt("Please enter your password.");
  if(response == "12345678") {
    console.log("Access granted.");
    counter = 0;
  } else { 
    alert("Please try again.")
	counter--;
  }
  console.log("Sorry, access denied.");
}