var menuObject = {
	1: "coffee",
	2: "donut",
	3: "tea",
	4: "banana",
	5: "espresso",
	6: "toast"
};
var order = prompt("What menu item may I get you to eat or drink this morning?");
var vorder = parseInt(order);

if(vorder >= 1 && vorder <= 6) {
 console.log("Delivering " + menuObject[vorder] + ".");
} else {
 console.log("I'm sorry, we don't have that.");
}