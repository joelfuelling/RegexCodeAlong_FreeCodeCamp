// /cat/g
// Always start with an opening /, and end with a /
// Afterwards, you may optionally place FLAGS. g for global. i for case insensitive. m for multiline. s for single line (dotall). u for unicode. y for sticky.
let string =
  "The fat cat ran down the street. It was searching for a mouse to eat.";
const strRegex = /\sa/g; // Match anywhere there is a whitespace followed by 'a'
const result = string.match(strRegex);
console.log(result);

//* The ? symbol means optional when placed after a match selection
const optionalReg = /[a-z|\s]at?/gi; // Match anywhere this is any letter [a-z] or a whitespace, followed by an a, and an optional t, so anywhere a t comes after any letter/whitespace + a, or anywhere a t DOES NOT come after any letter/whitespace + a,
const optResult = string.match(optionalReg);
console.log(optResult);

//* The * indicator match 0 or more - Combination of the ? and +

const zeroOrMore = /chi*|str*/g; // Matches ch, with i optional, or st with r optional.
const zeroResult = string.match(zeroOrMore);
console.log(zeroResult);

//* The . indicator means "match anything"
// Can be used on either side!
// Can be repeated!

const period = /\..../gi;
const wildCardAdd3 = string.match(period);
console.log(wildCardAdd3);

//* The w indicator mean "match any word"
//* The s indicator mean "match any whitespace"
//! The Capitol letter of these (and others below) will do the opposite

const word = /\w/g;
const wSpace = /\s/g;
const wordResult = string.match(word);
const spaceResult = string.match(wSpace);
console.log(wordResult);
console.log(spaceResult);

// Capture all "word" that are longer than 4 charactesr long.

const moreThan4 = /\w{4,}/g; // 4 min, no maximum! So, words at least 4 characters long.
const result4 = string.match(moreThan4);
console.log(result4);

//* Capturing the BEGINNING of a string using ^.

const carrotCheck = /^[A-Z]he/g;
const cResult = string.match(carrotCheck);
console.log(cResult);

//* Capturing the END of a string using $.

const dollarCheck = /e[a-z]{0,}t\.$/g;
const dResult = string.match(dollarCheck);
console.log(dResult);

//* Character grouping

// Words that start with f or c, and ends with at.
const fOrCwordEndT = /[c-f]at/g;
const fResult = string.match(fOrCwordEndT);
console.log(fResult);

//* Mathcing any of your results using OR |

const orCheck = /(cat|ran|bat|hat)/g;
const multiLetterCheck = /(C|f)at/g;
const multiResult = string.match(multiLetterCheck);
const orResult = string.match(orCheck);
console.log(orResult);
console.log(multiResult);

// Check for a group of letters with e or t or e, where at least 3 are in order, globally, case insensitive.
const checkingSpecificGroupSize = /(e|t|e){3}/gi;
const gsResult = string.match(checkingSpecificGroupSize);
console.log(gsResult);

const anotherSizeExercise = /((g|i|n){3,4}\s)|((e|t){2,3}\.)/gi;
const axResult = string.match(anotherSizeExercise);
console.log(axResult);

//* Look ahead and look behind - Allows you to capture something before or after a selected search term, without capturing the selected search term.
// Place the look ahead/behind inside (), then a ? then < or > and either = or !
//% Allows you to look at things that either happened before or after the thing you want to capture, but doesn't actually capture or select the thing that you're looking behind or looking ahead for.

//? Positive Look behind, must match
//* ?<=
// wildcard goes at the end of regex

// Match any character BEHIND matches of 'the' or 'The', return the wildcard - Does not return 'the' or 'The'
const lookBehind1 = /(?<=[tT]he)./g;
const resultL = string.match(lookBehind1);
console.log(resultL);

//? Negative Look behind, must NOT match
//* ?<!
// wildcard goes at the end of regex

const lookBehind2 = /(?<![tT]he)./g; // Match any EXCEPT matches returned by the positive look ahead equivelant (ie., the opposite of the above positive look ahead)
const resultL2 = string.match(lookBehind2);
console.log(resultL2);

//? Positive Look ahead
//* Remove the < symbol, and move the wildcard (.) to the beginning.
// wildcard goes at the beginning of regex

// Match any character that has 'at' after it - Does not return 'at'
const atLook = /.(?=at)/g;
const lookResult = string.match(atLook);
console.log(lookResult);

//? Negative Look ahead
//* Remove the < symbol, and move the wildcard (.) to the beginning. change = to 1
// wildcard goes at the beginning of regex

// Get any matches EXCEPT those with 'at' after - Does not return 'at.
const notAtLook = /.(?!at)/g;
const lookResult2 = string.match(notAtLook);
console.log(lookResult2);

//% Check for a phone number.

let myNumber1 = 4443335555;
let myNumber2 = "123-456-7890";

// Check for a 10 digit phone number, that may or may not contain spaces of or a dash - in between each set.
const numRegex1 = /\d{10}/;
const numRegex2 = /\d{3}[ -]?\d{3}[ -]?\d{4}/gm;
const numResult = myNumber2.match(numRegex2);
console.log(numResult);

//% Convert it to just a 10 digit phone # with no - or spaces in between the numbers

const numRegex3 = /(?<areacode>\d{3})[ -]?(\d{3})[ -]?(\d{4})/gm;
const numResult3 = myNumber2.match(numRegex3);
console.log(numResult3);
myNumber2 = myNumber2.replace(numRegex3, "$1$2$3");
console.log(myNumber2);

//% What if we had () around the areacode?

const newNumber = "(440)-333-5555";

const newNumReg = /\((\d{3})\)[ -]?(\d{3})[ -]?(\d{3})/gm;
const numCheck = newNumber.match(newNumReg);
console.log(numCheck);
const newNumberWithoutParens = newNumber.replace(newNumReg, "$1$2$3");
console.log(newNumberWithoutParens);

const intNumber = "+1 (440)-333-5555";

//. ?: sets up the following item within the () to be a NON CAPTURING GROUP.
//*1 - 1st named grouping, "(?:(?<internationalCode>\+1)[ -])?" ... ?: places in a non capturing group. names the capture group internationalCode, matches a LITERAL + then a 1, followd by a space or a hyphen. The entire group is optional.
//% Take away the ?:, and then '1+ ' with the space is stored as group 1, instead of '1+'
//*2 - Then, a 2nd group "\(?(?<areaCode>\d{3})\)?[ -]?" ... Matches a LITERAL (, names the capture group areaCode, matches exactly 3 digits, matches a LITERAL ) which is optional, followed by a space or a hyphen which is optional
//*3 - The 3rd and 4th groups are the same as the 2nd, except they don't try to match any parenthesis, and the thirdGrup is looking for exactly 4 digits instead of 3.

const intRegCheck =
  /(?:(?<internationalCode>\+1)[ -])?\(?(?<areaCode>\d{3})\)?[ -]?(?<secondGroup>\d{3})[ -]?(?<thirdGroup>\d{4})/gm;

const intCheck = intNumber.match(intRegCheck);
console.log(intCheck);
const newIntCheck = intNumber.replace(intRegCheck, "$2$3$4");
console.log(newIntCheck);

const newInt = "+1 (440)-333-5555";
const chlgIntCheck =
  /(?:(\+1)[ -])?[ -]?(\(?(\d{3})\)?)[ -]?((\d{3}))[ -]?((\d{4}))/g;
const chlgResult = newInt.match(chlgIntCheck);
console.log(chlgResult);
