class A {
    constructor() {}
}
class B extends A {
    constructor() {
        super()
    }
}
class C extends B {
    constructor() {
        super()
    }
}

const a = new A()
const b = new B()
const c = new C()

console.log(a instanceof A) // true
console.log(a instanceof B) // false
console.log(a instanceof C) // false

console.log(b instanceof A) // true
console.log(b instanceof B) // true
console.log(b instanceof C) // false

console.log(c instanceof A) // true
console.log(c instanceof B) // true
console.log(c instanceof C) // true

console.log(c.constructor === A) // false  c의 constructor와 A의 constructor 비교한다.
console.log(c.constructor === B) // false
console.log(c.constructor === C) // true

const fruits = ['Apple', 'Banana']
// new 방식보다는 위의 리터럴 방식이 더 편하고 많이 쓰인다.
// const fruits = new Array('Apple', 'Banana')

console.log(fruits.constructor === Array)  // true
console.log(fruits instanceof Array) // true