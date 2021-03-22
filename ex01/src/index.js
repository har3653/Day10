var myPet = {
  species: "Dog",
  name: "Dog2",
  legs: 4,
  friends: ["Adis", "Haris"],
};

function myFunction(myObj) {
  return myObj;
}

console.log(myFunction(myPet));
module.exports = { myPet, myFunction };
