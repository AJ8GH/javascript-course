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
