console.log('Jonas');

let firstName = 'Jonas';

console.log(firstName)

let country = 'country';
let continent = 'continent';

let boolean = true

console.log(typeof boolean);

// let defines changing variables

const birthYear = 1991;

// const is for non-changing variables
// aim to use const mostly, only let when very sure it will change

var job = 'programmer';
// var should be totally avoided - only legacy

// you can actually define variables in the open like so
hello = 'Hello World!'
console.log(hello)

// but this is a BAD idea - these are defined in global scope

const number = 2 % 1

console.log(number)

x = 100
x++ // x = x + 1
x-- // x = x - 1

const word = 'hello'
const num = 20
console.log(word + number)

const sentence = `my word is ${word}`
console.log(sentence)

const backTickString = `this is a normal string`
console.log(backTickString)

const multiLineString = 'this\n\ is\n\ a multiline string'
console.log(multiLineString)

const otherString = `this
is
also
multiline`

console.log(otherString)

const averagePopulation = 33000000
const ukPopulation = 66000000
// if else statement structure in javascript
if (ukPopulation > averagePopulation) {
  console.log(`The UK's population of ${ukPopulation} is ${ukPopulation - averagePopulation} above the average`)
} else {
  console.log(`that's hella low`)
}

// type conversion

const inputYear = '1991';

console.log(inputYear)
console.log(Number(inputYear));
console.log(Number('Jonas'));
// outputs Nan -- Not a Number - not a number is still type number.... lol

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old')
// + operator coerces the strings and numbers to convert together
console.log('10' + 23 - '2')
console.log(10 - '23' - '2')
// minus minues the value, + operator concatenates the values
// minus converts string to number
// plus converts number to string

// 6 falsey values in js
// 0, '', undefined, null, NaN, false
// everything else is truthy
console.log(Boolean(0));
console.log(Boolean('0'));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(false));

let adam

if (adam) {
  console.log('Adam is defined!')
} else {
  console.log('Not defined!!!!!')
}

const age = 18;
if (age === 18) console.log('18!')
// triple === - strict equality operator - performs type coercion
// double == - loose equality operator - does not perform type coercion

console.log(18 == '18')
console.log(18 === '18')
console.log(18 !== '18')

const favourite = Number(prompt("What's your favourite number?"));

console.log(favourite)

const javaScriptFun = true
