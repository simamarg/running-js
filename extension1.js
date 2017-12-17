// Extension 1 - Write a JavaScript program to find the most frequently occurring item of an array.

var array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mostOccurElement;
var mostOccurCount = 0;
for (var i = 0; i < array.length; i++) {
    var currCount = 1;
    for (j = i + 1; j < array.length; j++) {
        if (array[j] === array[i]) {
            currCount++;
        }
    }
    if (currCount > mostOccurCount) {
        mostOccurCount = currCount;
        mostOccurElement = array[i];
    }
}
console.log("The most occurring item is: " + mostOccurElement);