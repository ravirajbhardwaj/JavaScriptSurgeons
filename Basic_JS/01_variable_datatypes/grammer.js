const person = {
  username: "Ravi",
  userage: 30,
  arr: [1, 2],
};

let { username, userage, arr } = person; // unpack object

username = "Sonu";

console.log(username);
console.log(person);

arr[0] = 10;

console.log(arr);
console.log(person);
