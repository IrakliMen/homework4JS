//task1
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let foreach = numbers.forEach((number) =>{
    console.log(number);
});

//task2
let strings = ["Mclaren", "Ferrari", "Mercedes", "Red-Bull", "Alpine"];
let stringLength = strings.map((number) => number.length);
console.log(stringLength);

//task3
let filtered = numbers.filter((number) => number % 2 ==0);
console.log(filtered);

//task4
let objectsArray = [
    {name: "Irakli", age: 22},
    {name: "Sopio", age: 42},
    {name: "Elene", age: 26},
    {name: "Lewis", age: 38}
];
let findPerson = objectsArray.find((person) => person.age == 38);
console.log(findPerson);

//task5
let aboveTen = objectsArray.find((person) => person.age >10);
console.log(aboveTen);

//task7
let nums = [-3, -2, -1, 0, 1, 2, 3];
let aboveZero = nums.every((number) => number >0);
console.log(aboveZero);

//task8
let strngsForSort = ["Max", "Lewis", "Oscar", "Lando", "Charles", "Pierre"];
let sortedArray = strngsForSort.sort();
console.log(sortedArray);

//task9