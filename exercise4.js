// Exercise 4 - Write a JavaScript program which accepts a number as a string and inserts dashes (-)
// between each two even numbers (treat zero as an even number). For example if you accept "025468"
// the output should be 0-254-6-8.

var numString = "025468";
var modifiedNumString = "";
for (var i = 0; i < numString.length; i++) {
    if (parseInt(numString[i]) % 2 === 0 && i < numString.length - 1 && parseInt(numString[i+1]) % 2 == 0) {
        modifiedNumString += numString[i] + "-";
    } else {
        modifiedNumString += numString[i];
    }
}
console.log(modifiedNumString);