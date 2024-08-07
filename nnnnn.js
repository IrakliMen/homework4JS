console.log("დავალება 1");
// დავალება 1

let numbers = [23, 12, 15, -35, 4, 9, -36, 7, 13, -45, 68, 22];
numbers.forEach((value, index, array) => {
  array[index] = value + 5;
});
console.log(numbers);

console.log("დავალება 2");
// დავალება 2

let cars = [
  "Tesla",
  "Chevrolet",
  "Mazda",
  "BMW",
  "Renault",
  "Hyundai",
  "Alfa-romeo",
];
let lengths = cars.map((car) => car.length);
console.log(lengths);

console.log("დავალება 3");
// დავალება 3

// გამოყენებულია პირველი დავალების array
let evenNums = numbers.filter((number) => number % 2 == 0);
console.log(evenNums);

console.log("დავალება 5");
// დავალება 5

let persons = [
  { name: "Nodo", age: 23 },
  { name: "Anano", age: 14 },
  { name: "Niako", age: 9 },
  { name: "Daviti", age: 7 },
];
let actualAge = persons.find((person) => person.age == 7);
console.log(actualAge);

console.log("დავალება 6");
// დავალება 6

let moreThanTen = persons.find((person) => person.age > 10);
console.log(moreThanTen);

console.log("დავალება 7");
// დავალება 7

// გამოყენებულია პირველი დავალების array
let positive = numbers.every((number) => number > 0);
console.log(positive);

console.log("დავალება 8");
// დავალება 8

// გამოყენებულია მეორე დავალების array
let alphabetical = cars.sort();
console.log(alphabetical);

console.log("დავალება 9");
// დავალება 9

let employed = [
  { name: "Mariami", age: 27, profession: "Doctor" },
  { name: "Giorgi", age: 32, profession: "Lawyer" },
  { name: "Irakli", age: 25, profession: "Pilot" },
  { name: "Anano", age: 28, profession: "Scientist" },
];
console.log(Object.keys(employed));

console.log("დავალება 10");
// დავალება 10

let ana = employed.find((i) => i.name == "Anano");
console.log(Object.values(ana));

console.log("დავალება 11");
// დავალება 11

let gio = employed.find((i) => i.name == "Giorgi");
console.log(Object.entries(gio));

console.log("დავალება 14");
// დავალება 14

const products = [
  { title: "Earphones", price: 59 },
  { title: "Mouse", price: 46 },
  { title: "Headphones", price: 99 },
  { title: "Ipad", price: 789 },
];

let total = Object.values(products).reduce(
  (sum, product) => sum + product.price,
  0
);
console.log(total);
