let fruits = ["Apple", "Banana", "Orange"];

let BananaIndex = fruits.indexOf("Banana");

console.log("Banana Index: " + BananaIndex);

fruits[BananaIndex] = "Mango";

console.log(fruits);

fruits.pop("Orange");
fruits.push("Watermelon");
console.log(fruits);
