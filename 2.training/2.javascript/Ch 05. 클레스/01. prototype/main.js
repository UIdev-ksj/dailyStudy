console.log('챕터1')

// const fruits = ['Apple', 'Banana', 'Cherry']
const fruits = new Array('Apple', 'Banana', 'Cherry')

console.log(fruits)
console.log(fruits.length)
console.log(fruits.includes('Banana'))  //true
console.log(fruits.includes('Orange'))  //false

Array.prototype.heropy = function () {
    console.log(this)
}

fruits.heropy()

const arr = []
arr.heropy()


console.log('챕터2')
const heropy2 = {
    firstName: 'Heropy',
    lastName: 'Park',
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const neo2 = {
    firstName: 'Neo',
    lastName: 'Anderson',
    // getFullName 같은 코드가 2개여서 비효율적임
    // getFullName() {
    //     return `${this.firstName} ${this.lastName}`
    // }
}

console.log(heropy2.getFullName())
console.log(heropy2.getFullName.call(neo2)) //heropy의 getFullName 함수(메소드)를 빌려쓴다.



console.log('챕터3')
//챕터2와 동일하게 동작하는 단점을 보완하는 코드

//파스칼케이스로 꼭만들어야한다. (첫글자대문자)
function User(first, last) {
    this.firstName = first
    this.lastName = last
}

// User 함수에 prototype으로 등록된 메소드
// User 생성자 함수에서 반환된 인스턴스 객체에서는 prototype으로 등록된 메소드를 사용가능하다.
User.prototype.getFullName2 = function () {
    return `${this.firstName} ${this.lastName}`
}

const heropy3 = new User('Heropy', 'Park')
const neo3 = new User('Neo', 'Anderson')

console.log(heropy3)
console.log(neo3)

console.log(heropy3.getFullName2())
console.log(neo3.getFullName2())