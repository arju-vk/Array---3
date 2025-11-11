// Changing the names to uppercase using for() and uppercase using exsting source

let enames = ["Rahul", "Chandu", "Someone", "AnyOne"];
let users = [];
for (let ename of enames) {
  users.push(ename.toUpperCase());
}
console.log(users);
