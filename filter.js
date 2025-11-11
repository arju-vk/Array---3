let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//collect all even numbers into a new array

let even_numbers = [];
for (let num of numbers) {
  if (num % 2 == 0) {
    even_numbers.push(num);
  }
}
console.log(numbers);
console.log(even_numbers);

let numbers1 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
//collect all even numbers into a new array

let even_numbers1 = numbers.filter((num) => num % 2 === 0);

console.log(numbers);
console.log(even_numbers);

let numbers2 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
//collect all even numbers into a new array

let enames = [
  "Rahul",
  "Sony",
  "Rony",
  "Rajvendra",
  "Karthick",
  "Ramanuchan",
  "Tony",
];
//Index
//Length       5      4      4         9           8          10         4
//Collection enames their length is more 5

let new_Enames = enames.filter((ename) => ename.length >= 5);
console.log(new_Enames);
