var number = prompt("Tell me a number");
var vnumber = parseInt(number);
if(vnumber > 0) {
	console.log('Valid');
} else(vnumber <= 0) {
	console.log('Invalid');
}