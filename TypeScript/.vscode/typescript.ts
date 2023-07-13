//JS
// TypeScript knows the JavaScript language and will generate types for you in many cases. For example in creating a variable and assigning it to a particular value, TypeScript will use the value as its type.

// Visual Studio Code uses TypeScript under the hood to make it easier to work with JavaScript.

let helloworld = "Hello World";
/*
? Defining Types
? Defining Types
? Defining Types

You can use a wide variety of design patterns in JavaScript. However, some design patterns make it difficult for types to be inferred automatically (for example, patterns that use dynamic programming). To cover these cases, TypeScript supports an extension of the JavaScript language, which offers places for you to tell TypeScript what the types should be.

For example, to create an object with an inferred type which includes name: string and id: number, you can write:

const user1 = {
  name: "Hayes",
  id: 0,
};

//% You can explicitly describe this object’s shape using an interface declaration:

interface User {
  name: string;
  id: number;
}

You can then declare that a JavaScript object conforms to the shape of your new interface by using syntax like : TypeName after a variable declaration:

const user2: User = {
  name: "Hayes",
  id: 0,
};

//* Try it out, don't forget the = !

const flights = {
  flightNum: 23,
  flightGate: 40,
  flightID: "LUX",
};

interface Flights {
  flightNum: number;
  flightGate: number;
  flightID: string;
}

const newFlight: Flights = {
  flightNum: 40,
  flightGate: 10,
  flightID: "ORD",
};
console.log(newFlight);

//! If you provide an object that doesn’t match the interface you have provided, TypeScript will warn you:

// It's name, not username...

// const user: User = {
//   username: "Hayes",
//* error:   Type '{ username: string; id: number; }' is not assignable to type 'User'.
//* error:   Object literal may only specify known properties, and 'username' does not exist in type 'User'.
//   id: 0,
// };

const user3: User = {
  name: "",
  id: 0,
};

Since JavaScript supports classes and object-oriented programming, so does TypeScript. You can use an interface declaration with classes:

interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);

You can use interfaces to annotate parameters and return values to functions:

function deleteUser(user: User) {
  // ...
}

function getAdminUser(): User {
  //...
}

* There is already a small set of primitive types available in JavaScript:
 boolean, bigint, null, number, string, symbol, and undefined, which you can use in an interface.
 TypeScript extends this list with a few more, such as:

 any (allow anything) - You've seen this!
 unknown (ensure someone using this type declares what the type is)
 never (it’s not possible that this type could happen)
 void (a function which returns undefined or has no return value).

* You’ll see that there are two syntaxes for building types: Interfaces and Types.
% You should prefer interface.
 Use type when you need specific features.


 */
//? Composing Types
//? Composing Types
//? Composing Types

// With TypeScript, you can create complex types by combining simple ones. There are two popular ways to do so: with unions, and with generics

//* Unions
// With a union, you can declare that a type could be one of may types.

//* For example, you can describe a boolean type as being either true or false.
type MyBool = true | false;

// Note: If you hover over MyBool above, you’ll see that it is classed as boolean. That’s a property of the Structural Type System. More on this below.

// A popular use-case for union types is to describe the set of string or number literals that a value is allowed to be:

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

//* Unions provide a way to handle different types too. For example, you may have a function that takes an array or a string:

function getLength(obj: string | string[]) {
  return obj.length;
}

console.log(getLength("alpha"));
console.log(getLength(["alpha", "beta", "omega"]));

// You can also make a function return different values depending on whether it is passed a string or an array.

function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];
  }
  return obj;
}
