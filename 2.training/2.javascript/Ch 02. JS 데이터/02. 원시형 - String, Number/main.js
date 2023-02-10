////02. 원시형 - String, Number
const string1 = "Hello"
const string2 = 'Hello'
const string3 = `Hello ${string1} ?!`
console.log(string3)

const number = -123.1234
const pi = 3.14
console.log(typeof (number + undefined))
console.log(typeof pi)

const a = 0.1
const b = 0.2
console.log(Number((a + b).toFixed(1)))