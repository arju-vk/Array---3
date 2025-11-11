// Diffrence between foreach() and Map()

let enames = ["Rahul", "Krish", "Chandu", "SomeOne"];
let new_names = enames.map((ename) => {
  return ename.toUpperCase();
});
console.log(enames);
console.log(new_names);
