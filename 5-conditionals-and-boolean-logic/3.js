var number = prompt("Tell me a number");
var vnumber = parseInt(number);
if(vnumber > 0 && vnumber <= 10) {
	console.log('Valid');
} else {
	console.log('Invalid');
}