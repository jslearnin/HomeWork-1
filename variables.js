/* Class: Keeping Up With the Javascripts
Homework Assignment #2: Variables and Constants
*/

/*
The differences between var, let, and const are as follows:

1. The values of var and let are changeable or can be reassigned
after they are declared whereas once a value has been declared
for const, it is unchangeable, it is "constant".

2. Var is accessible even if called upon outside of a nested statement
wherein it was initially declared. With let and const, scoping limits
declaration to inside the block they are declared. So then, the value of var can
be changed outside the scope of the initial declaration whereas with let and
const, it cannot.

3. Hoisting, wherein the Javascript compiler moves to the top of the code
the variable declarations, affects var, let, and const differently. With var,
hoisting will bring the declaration of the var to the top of the code but not
the value. Therefore, if var is called upon before the initial declaration,
because of hoisting, var will be recognized but it will be undefined because
the value was not hoisted, only the declaration. With let, hoisting will bring
the declaration to the top but not the value. If it does so within the same
scope, than it will be seen as undefined. If it attempts to do so out of scope,
than the code will return a reference error, for let will not be recognized
outside of the scope it is in. The same goes with const, because const can only
be declared if accompanied with a value, when const is hoisted and not the value,
the code will return a reference error, stating it is not defined.
*/

//Example of paragraph #1 - var and let are changeable; const is not.

var color1 = "red";
console.log(color1);
color1 = "blue";
console.log(color1);

let mineral1 = "iron";
console.log(mineral1);
mineral1 = "copper";
console.log(mineral1);

const vehicle1 = "car";
console.log(vehicle1);
vehicle1 = "bus";
console.log(vehicle1);

//Example of paragraph #2 - how scope affects accessibility of var, let, const

function animalSounds1() {
  var listenToAnimals = true;

  if (listenToAnimals === true) {
    var dog = "bark";
  }

  console.log(dog);
}

animalSounds1();

function animalSounds2() {
  var listenToAnimals = true;

  if (listenToAnimals === true) {
    let cat = "meow";
  }

  console.log(cat);
}

animalSounds2();

function animalSounds3() {
  var listenToAnimals = true;

  if (listenToAnimals === true) {
    const donkey = "heehaw";
  }

  console.log(donkey);
}

animalSounds3();

//Example of paragraph #3 - how hoisting affects accessibility of var, let, const

console.log(dog);
var dog = "bark";

console.log(cat);
let cat = "meow";

console.log(donkey);
const donkey = "heehaw";
