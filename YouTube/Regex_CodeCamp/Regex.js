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

//* Match a Literal String with Different Possibilities | OR operator

let petString = "James has a pet cat";
let petRegex = /dog/;
let resultP = petRegex.test(petString);
resultP;

// Regex has an OR operator which is a single pipe | character.

petRegex = /dog|cat|bird|fish/; // matches any of the 4 words.
resultP = petRegex.test(petString);
resultP;

//* Ignore case while matching.
// The i flag will ignore case.

let myFreeString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let resultF = fccRegex.test(myFreeString);
resultF;

//* Extract Matches
// The .match() method

let extractStr = "Extract the word 'coding' from this string";
let codingRegex = /coding/;
let resultE = extractStr.match(codingRegex);
console.log(resultE);

//* Find more than just the 1st match
// use the g (global) flag to grab all of an element.

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/g;
console.log(testStr.match(ourRegex));

// combine global (g) and ignore case(i) regex operators.
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi;
let resultT = twinkleStar.match(starRegex);

console.log(resultT);

//* Match Anything with Wildcard Period .
// Below "/hu./" will match any word with hu in it (g). Then, return the hu, and the "final" charcter after the hu, indicated by the period .
//% You can string together "final" period characters if you need to return more than just the next character after the regex search term.

let humStr = "I'll hum a humble song for hungry hunters";
let hugStr = "Bear hug is a hummingbird";
let huRegex1 = /hu./g;
let huRegex2 = /hu...../g;
console.log(humStr.match(huRegex1));
console.log(hugStr.match(huRegex2));

// Placing the . on the other side of the character returns the previous characters, and yes you can add multiple just as before!
let exampleStr = "Let's have fun with regular expressions";
let unRegex = /.un/;
let resultU = unRegex.test(exampleStr);
console.log(exampleStr.match(unRegex));

//* Match Single Character with Multiple Possibilities
// You can also match from a predefined group of characters inside [].
// below, inside the brackets, we're saying that the letter between b and g has to match one of those 3 letters. So, it would match the strings 'bag', 'big', and 'bug', but no others.
let bgRegex = /b[aiu]g/;

//% We want to match every single vowel below. To "search for all of" some items we use [] without any other letters outside of it.
let quoteSameple =
  "Beware of bugs in the above code; I have only proved it correct...";
let vowelRegex = /[aeiou]/gi;
let resultX = quoteSameple.match(vowelRegex);
console.log(
  `There are ${resultX.length} vowels used in the sentence: "${quoteSameple}"`
);

//* Match LETTERS of the Alphabet

//* Matching a RANGE using the - operator.

let quoteSample1 = "The quick brown fox jumps over the lazy dog";
let alphabetRegex = /[a-z]/gi;
let resultA = quoteSample1.match(alphabetRegex);
console.log(resultA);

//* Match NUMBERS AND LETTER of the alphabet.
// simple, just add the range you want after (or before, it doesn't matter) onto the other one like [a-c1-3]

let quoteSample2 = "blueberry 3.141592653s are delicious";
let myRegex2 = /[2-6h-s]/gi;
let result2 = quoteSample2.match(myRegex2);
console.log(result2);

//* Match SINGLE characters not specified
//% Creating a set of characters you DO NOT WANT TO MATCH
// These are called Negated Character sets, created using ^
// Make a regex that accepts all things except numbers and all vowels

let sample = "3 blind mice";
let regex1 = /[^0-9aeiou]/gi;
let res = sample.match(regex1);
console.log(res);

//* Match characters that OCCUR 1 OR MORE times using +
// Below /s+/g matches all occurences of 1, or more s occuring in the string. So ['ss', 'ss'] is returned.

let diffSpelling = "Mississippi";
let mRegex = /s+/g;
let mResult = diffSpelling.match(mRegex);

console.log(mResult);

//* Match characters that OCCUR ZERO OR MORE times using *

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/; //% Match g, THEN match o, 0 or more times.
console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex)); // It matches each letter, so g, then o, not 'go', all at once. g is returned here.
console.log(oPhrase.match(goRegex));

// Lets match Aa 0 or 1 time.
let chewieQuote = "Aaaaaaaaaaaaarrgh!";
let chewieRegex = /Aa*/;
let resultC = chewieQuote.match(chewieRegex);
console.log(resultC);

//* Find Characters with LAZY Matching

// Greedy match (REGEX DEFAULT): Find the LONGEST possible part of a string that matches the regex pattern.
//* Lazy match ? Find the SMALLEST possible part of the string that matches the pattern

// 1st, looking for t, then, 0 or more of any letters between a-z, and then letter i, so 'titani' is returned
//% Adding the ? makes 't[a-z]*' a LAZY match, only returning 'i' instead, since 'itani' is the 1st letter found in the [a-z]*? and returned.
let string = "titanic";
let tiRegex = /t[a-z]*?i/;
console.log(string.match(tiRegex));

// 1st, looking for <, then "any letter or character" with 0 or more occurences, then the >
// % So, We're finding the first < tag below, then everything after (.*)/in the middle, then the final >, so the whole string is returned.
let text = "<h1> Winter is coming</h1>";
let winRegex = /<.*>/;
let tResult = text.match(winRegex);
console.log(tResult);

// Let's do a lazy match that ends at the 1st occurence of the > sign, or "returns the shortest version of the found match"
let text2 = "<h3> For Valhalla! </h3>";
let valRegex = /<.*?>/;
let vResult = text2.match(valRegex);
console.log(vResult);

//! Find one or more criminals in a hunt.

// A group of criminals escaped, but we don't know how many! We know they stay close together when grouped with other people.
// Find all the criminals at once (C)
let crowd = "P1P2P3P4P5P6CCCP7P8P9";
let reCriminals = /C+/;
let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);

function crimeCheck(scenario) {
  for (c in scenario) {
    scenario[c].includes("C")
      ? console.log(`Criminal found at index ${c}`)
      : console.log(`No Criminal found at index ${c}`);
  }
}
crimeCheck(crowd);

//* Match BEGINNING OF STRING patterns
// We mentioned earlier that the ^ is used to create a NEGATED character set when placed inside [].
// If you're not in brackets, you can use the ^ character to check for match at the beginning of a string.

let rickyAndCal = "Cal and Ricky both like racing";
let calRegex = /^Cal/; // Match Cal IF it's at the beginning of a string.
let rcResult = calRegex.test(rickyAndCal);
console.log(rcResult);

//* Match ENDING OF STRING patterns
// The $ sign matches an ending string pattern. So, to match caboose we put caboose$. The $ goed at the end, which makes sense!
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let resultH = lastRegex.test(caboose);
console.log(resultH);

//* Match ALL LETTERS AND NUMBERs
//! Short hand character class list
//! https://www.regular-expressions.info/refrepeat.html

// For now, we'll use the /w shorthand character class.
// /w - matches the alphabet
let quotes = "the five boxing wizards jump quickly__as4892H834asdf73";
let alphabetRegexV2 = /[a-z]/g; // match all(g) letter a-z.
alphabetRegexV2 = /\w/g; // Matches all(g) uppercase, and lowercase letters, 0-9, and the _ //! DOES NOT MATCH spaces and periods.
let resultB = quotes.match(alphabetRegexV2).length;
console.log(resultB);

//* Match everything EXCEPT LETTERS AND NUMBERS (opposite of above)

// Instead of lowercase w, we use uppercase W (the opposite) to return all non letter and number characters.
alphabetRegexV2 = /\W/g;
resultB = quotes.match(alphabetRegexV2).length;
console.log(resultB);

//* Match ALL NUMBERS
// \d matches all numbers.
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g;
let numResult = numString.match(numRegex).length;
console.log(numResult);

//* Match ALL NON-NUMBERS
// \D matches all non-numbers.
numRegex = /\D/g;
numResult = numString.match(numRegex).length;
console.log(numResult);

//% Restrict Possible usernames
// 1) If there are numbers, they must be at the end
// 2) Letters can be lowecase and uppercase
// 3) At least two characters long.
// 4) Two-letter names can't have numbers.

let username = "JackOfAllTrades";
let userCheck = /^[A-Za-z]{2,}\d*$/;
// 1) Putting letters at the beginning ^[A-Za-z] ("If numbers, they must be at the end)
// 1.1) \d* - There should be 0 or more numbers at the end
// 2) Letters can be uppercase and lowercase [A-Za-z]
// 3) "At least two characters long" {2,} indicates the number of times the previous things can match. So, the letters can match between 2 (the minimum), and infinity (the maximum because we didn't enter a number. You can put a numer here if you want)
let userResult = userCheck.test(username);
console.log(userResult);

function userValidity(userName) {
  console.log(
    userName.match(userCheck)
      ? `Username ${userName} is valid`
      : `Username ${userName} is not valid`
  );
}
userValidity("Joelditty");

//* Match WHITESPACE
// \s will match a space, a character turn, a tab, a form feed, and a new line character.
let sampleW = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let resultQ = sampleW.match(countWhiteSpace);
console.log(resultQ);

//* Match NON-WHITESPACE characters.
// \S will match all non-whitespace characters.
let sampleNw = "Whitesapce and non-whitespace characters";
let countNonWhiteSpace = /\S/g;
let resultNw = sampleNw.match(countNonWhiteSpace);
console.log(resultNw);

//* Specifying UPPER and LOWER Number of matches
// Quantity specifiers are used with {} brackets, and we've only used them once before now.
// You (can) put two numbers into the brackets, the 1st for the lower # of patters, the 2nd as the max # of patterns (if blank, infinity will be used)

// Let's match any ohhh no string where the letter of h's is between 3 and 6
let ohStr = "ohhh no";
let ohRegex = /Oh{3,6} no/i;
let ohResult = ohRegex.test(ohStr);
console.log(ohResult);

//* Only specifying the LOWER number
// 4 or more of the letter z
let haStr = "Hazzzzah";
let haRegex = /z{4,}/; // At least 4, up to o
let resultHa = haRegex.test(haStr);
console.log(resultHa);
// 38:48 - For anyone confused why he didn't put a comma after the 2 for “two *or more*” it’s because it is in a lookahead: it only needs to see two digits and then it can stop looking because then we know there are at least two.

//* Specifying EXACT NUMBER OF MATCHES
// Just one number inside {} denotes an exact match
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let resultTim = timRegex.test(timStr);
console.log(resultTim);

//* Checking for ALL or ONE
// Using ? checks for 0 or 1 of the proceeding element. Sort of like saying "The previous element is optional", ie., differences between American or British English!
let favWord = "favorite";
let favRegex = /favou?rite/; //% The u may or may not be included, but all other letters have to be the same.
let resultFav = favRegex.test(favWord);
console.log(resultFav);

//* Positive and Negative Lookahead
// Lookaheads are patterns that tell JS to look ahead to check for patterns further along.
// Useful when you want to search for multiple patterns over the same string.

let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/; //% Positive look ahead (?=u): 1st - Checks for q. 2nd - (?=u) looks ahead to check for a u later in the string. If there IS ONE (?=), returns just the q.
let qRegex = /q(?!u)/; //% Negative look aheda (?!u): 1st - Checks for q. 2nd - (?!u) looks ahead to check for a u later in the string. If there is NOT(?!) one, returns just the q.
let quitResult = quRegex.test(quit);
console.log(quit.match(quRegex));
console.log(noquit.match(qRegex));

//* Check for two or more patterns in one string (Lookahead)
let sampleWord = "astronaut22";
let pwRegex = /(?=\w{5})(?=\D*\d{2})/; //. (?=\w{5}) = Look ahead and match 5 WORD CHARACTERS(letters,numbers,underscores)... (?=\D*\d{2}) = Look ahead and Match ANY amount of characters that are NOT DIGITS (\D*), and then that there are 2 OR MORE DIGITS (\d{2}) following (\D*)

let resultM = pwRegex.test(sampleWord);
console.log(resultM);

let lookUpGame = "The Lookup Game!";
let lookReg = /(?=\w{1})/;
let lookRes = lookReg.test(lookUpGame);
console.log(lookRes);

//* Reuse Patterns Using Capture Groups
// Grouping things together you are searching for using the parenthesis ()
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
// 1  '(\w+)' Searching for any number of characters, stores in a capture group ()
// 2  '\s' Then, a space
// 3  '\1' Capture group referencing (\w+), so the (\w+) is repeated here, searching for THE SAME value of the original (\w+))
console.log(repeatRegex.test(repeatStr)); //% true - Because, it has any numbers or letters, then a space, then the same grouping of "any numbers or letters"
console.log(repeatStr.match(repeatRegex));

// The regex below looks for "exactly this string" within the ^ and $. First, it looks for ALL numbers, saves them in capture group 1, then looks a space \s. Then, calling capture group 1 (looks for the same numbers, 42), then a space, then capture group 1 once more.
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let resultNum = reRegex.test(repeatNum);
console.log(resultNum);

//* Use Capture Gropus to Search and Replace

let wrongText = "The sky is silver";
let silverRegex = /silver/;
console.log(wrongText.replace(silverRegex, "blue")); // Looks for /silver/, and replaces with blue

//% You can also access capture groups in the replacement string with signs!
//% "Code Camp" has each word stores into it's own captures groups. Then, within the .replace(), the new string is returned as '$2', and then '$1', or, switching the locaitons of the found capture groups.
console.log("Code Camp".replace(/(\w+)\s(\w+)/, "$2 $1"));

let huhText = "this sandwich is good";
let fixRegex = /good/;
let replaceText = "bOnKeRs!";
let hResult = huhText.replace(fixRegex, replaceText);
console.log(hResult);

//! CHALLENGE - Remove whitespace from start and end

let hello = "   Hello, World!   ";
let wsRegex = /^\s+|\s+$/g; // Match all the white space at the beginning OR end of string.
let wResult = hello.replace(wsRegex, "");
console.log(wResult);

function replWhiteSpace(string) {
  for (let x of string) {
    x.includes(" ") ? x.replace(x, "") : (x = x);
  }
  console.log(string);
  return string;
}
console.log(replWhiteSpace(hello));
