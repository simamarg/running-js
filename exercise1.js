// Exercise 1 - Create an array called restaurants and inside it add the names of your favorite restaurants (at least 5).
// Then, create a for that loops through the array and console.logs the name of each restaurant.

var restaurants = ["Nono", "Bologna", "Taizu", "Segev", "McDonalds"];
for (var i = 0; i < restaurants.length; i++) {
    console.log((i+1) + ". " + restaurants[i]);
}