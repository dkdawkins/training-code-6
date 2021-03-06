// variables
var hello = 'hello js with var'; // variable, document/function scope (DONT USE THIS)
let hello2 = 'hello js with let'; // variable, block scope
const hello3 = 'hello js with const'; // constant, block scope

// console.log(hello);
// console.log(hello2);
// console.log(hello3);

// hoisting - only works for var
// console.log(hoistVar);

var hoistVar = 'hoist js with var';

// scopes
/*
- window scope - browser
- document scope - tab
- function scope - function
- block scope - let, const, if, for, etc.
*/

// functions
print();

function print () { // function statement (hoisted)
  // console.log('from the function statement')
}

let print2 = function () { // function expression
  // console.log('from the function expression')
}

print2();

let static = (function () { //immediately-invoked function expression
  // console.log('from the function invocation');

  return {};
})();

// objects
let person = { // literal object (JSON = JavaScript Object Notation)
  firstName: null,
  lastName: null
}

let p1 = person;
let p2 = person;

p1.firstName = 'fred'; //p2 is also fred
// console.log(p2.firstName);

function Person () { // object constructor
  this.firstName = null;
  this.lastName = null;
}

let p3 = new Person();
let p4 = new Person();

p3.firstName = 'fred'; //p4 is null
// console.log(p4.firstName);

let p5 = Object.create({});
let p6 = Object.create({});

p5 = p3; // 2-way binding
p6 = p4; //Changes to p3 and p4 affect p5 and p6

p5.firstName = 'bryan';
p6.firstName = 'marc';

let p7 = Object.create(p5); //referential copy - 1-way binding
let p8 = Object.create(p6);

// console.log(p7.firstName);
// console.log(p8.firstName);

// p7.firstName = 'brett'; //Does not change p5

// console.log(p5.firstName);
// console.log(p3.firstName);

// closure
function CountingCrows() {
  let counter = 0;

  return function () { // object
    counter += 1;
    return counter;
  }
}

function WritingCrows() {
  let c = CountingCrows();

  // c += 1;
  c();
  //console.log(c); // 1
  //console.log(counter); // undefined
  // console.log(c()); // 2
}

WritingCrows();

// prototype
function Animal() {
  this.talk = function () {
    console.log('talking gibberish');
  }
}

function Mammal() {
  this.walk = function () {
    console.log('walking the path');
  }
}

function Dog() {
  //Mammal.call(this);
  this.wag = function () {
    console.log('wagging my tail');
  }
}

let d = new Dog();
// d.wag();

// Dog.prototype.walk = function () {
//   console.log('not mammal walking');
// }

// Dog.prototype.mammal = new Mammal();

// d.walk();
// d.mammal.walk();

// constructor
// Dog.constructor = new Mammal(); // what does this do?
// Dog.prototype.constructor = Mammal; // constructor to constructor
Dog.prototype = Object.create(new Mammal()); // object to object

let d1 = new Dog();

d1.wag();
d1.walk();

console.log(Dog);