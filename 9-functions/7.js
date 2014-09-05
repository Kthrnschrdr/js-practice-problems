//Create a method called is_even, which takes a single integer, and which then returns true if the number is even, and false otherwise.
function is_even(a) {
	var a = prompt("Tell me a number");
	var b = parseInt(a);
	if(a%2 == 0) {
		console.log('even');
	} else(a%2 == 1) {
		console.log('odd');
	}
}