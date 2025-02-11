let parent = {
  surname: "Sharma",
  greet() {
    console.log("Namaste!");
  },
};

let child = {
  name: "Ravi",
  __proto__: parent,
};

console.log(child.surname);
