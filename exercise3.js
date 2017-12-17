// Exercise 3 - Write a simple JavaScript program to join all elements of the given array into a string that includes the '+' symbol in between each color

var myColor = ["Red", "Green", "White", "Black"];
var colorString = myColor[0];
for (var i = 1; i < myColor.length; i++) {
    colorString += " + " + myColor[i];
}
console.log(colorString);