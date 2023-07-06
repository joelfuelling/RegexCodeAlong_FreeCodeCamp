// Search patter than can be used to search for things in a string.
// Almost everything you learn can also apply to another programming language.

//* 1st, note that " " are not needed when defining the /the/ string below.
let sentence = "the dog chased the cat.";
let regex = /the/;
console.log(regex);

//* Using regex and .test()
// The test() method executes a search for a match between a regular expression and a specified string. Returns true if there is a match; false otherwise.
let myString = "Hello, world!";
let myRegex = /HELLO/; //% Case sensitive!
let result = myRegex.test(myString);
result;

let waldoIsHiding = "Somewhere Waldo is hiding in this text";
let waldoRegex = /Waldo/; // Capital W is needed.
let resultW = waldoRegex.test(waldoIsHiding);
resultW;

//* Match a Literal String with Different Possibilities

let petString = "James has a pet cat";
let petRegex = /change/;
let resultP = petRegex.test(petString);
resultP;

// Regex has an OR operator which is a single pipe | character.

petRegex = /dog|cat|bird|fish/; // matches any of the 4 words.
resultP = petRegex.test(petString);
resultP;

//* Ignore case while matching.
