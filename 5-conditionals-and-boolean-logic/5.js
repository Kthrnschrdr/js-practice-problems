var menuObject = {"coffee" => 1, "donut" => 2, "tea" => 3 , "banana" => 4, "espresso" => 5, "toast" => 6};

var order = prompt("What menu item may I get you to eat or drink this morning?")
order.parseInt
if(order >= 1 && order <= 6) {
 console.log("Delivering " #{menuObject[order:]} ".")
} else {
 console.log("I'm sorry, we don't have that.")
}