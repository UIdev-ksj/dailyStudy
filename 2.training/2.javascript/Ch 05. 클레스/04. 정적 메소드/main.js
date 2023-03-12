console.log('챕터1')

class User {
    constructor(first, last) {
        this.firstName = first
        this.lastName = last
    }
    getFullName() {
        // 프로토타입 메소드
        // 인스턴스에서 사용하는 것이며 클래스에서 사용할수 없다.
        return `${this.firstName} ${this.lastName}`
    }
    static isUser(user) {
        if (user.firstName && user.lastName) {
            return true
        }
        return false
    }
    // User 클래스로 만들어지는 하나의 데이터 구조를 확인하는 용도. 보조함수
}

const heropy = new User('Heropy', 'Park')
const neo = new User('Neo', 'Anderson')
const lewis = {
    name: 'lewis Yang',
    age: 85
}

console.log(heropy.getFullName())
console.log(neo.getFullName())
// console.log(User.getFullName())
//에러 발생, type 에러, User 객체에서 getFullName()은 함수가 아니기때문에 호출할수 없다.
// console.log(User.isUser())
// console.log(heropy.isUser())
//에러 발생, type 에러, heropy 객체에서 isUser()는 함수가 아니기때문에 호출할수 없다.

console.log(User.isUser(heropy))  // true
console.log(User.isUser(neo))  //true
console.log(User.isUser(lewis))  //false