console.log('챕터1')
// prototype 방식
// function User(first, last) {
//     this.firstName = first
//     this.lastName = last
// }
// User.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`
// }

// class 문법
class User {
    //function User()부분이 constructor() 대체
    constructor(first, last) {
        this.firstName = first
        this.lastName = last
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const heropy = new User('Heropy', 'Park')
const neo = new User('Neo', 'Anderson')

console.log(heropy)
console.log(neo)

console.log(heropy.getFullName())
console.log(neo.getFullName())