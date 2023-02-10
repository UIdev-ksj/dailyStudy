const a = 123

console.log(typeof a)
console.log(typeof 'hello' === 'string')
console.log(typeof 123 === 'number')
console.log(typeof false === 'boolean')
console.log(typeof undefined === 'undefined')

console.log(typeof null === 'object')
console.log(typeof [] === 'object')
console.log(typeof {} === 'object')

console.log(typeof function(){} === 'function')

console.log([].constructor === Array)
console.log({}.constructor === Object)

console.log(Object.prototype.toString.call(null).slice(8, -1) === 'Null')

//공용으로 타입을 확인할수 있는 함수
//비교는 첫글자 대문자로
function checkType(data) {
    return Object.prototype.toString.call(data).slice(8, -1)
}

console.log(checkType(123))
console.log(checkType('hello'))
console.log(checkType([]))
console.log(checkType({}))
console.log(checkType(false))
console.log(checkType(undefined))
console.log(checkType(null))
console.log(checkType(function(){}))