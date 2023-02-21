console.log('챕터1')
class User {
    constructor(first, last) {
        this.firstName = first
        this.lastName = last
        // this.fullName = `${first} ${last}`
        // type1 new 키워드를 통해 생성자함수를 호출 할때 
        // 최초로만 만들어지고 firstName, lastName이 바뀌어도 변하지 않는다.
    }
    // getFullName() {
    //     return `${this.firstName} ${this.lastName}`
    // }
    // type2 문제는 메소드를 소괄호를 열고 닫아서 호출해야한다.

    get fullName() {
        console.log('Getting full name!')
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(value) {
        console.log(value)
        ;[this.firstName, this.lastName] = value.split(' ')
        // split를 통해 띄어쓰기 기준으로 나눈다.
        // 배열구조분해 할당 분해 방법으로 할당한다.
        // 대괄호 중괄호로 시작하게 될땐 세미콜론을 추가해줘야한다.
    }
}

const heropy = new User('Heropy', 'Park')

console.log(heropy.fullName)

heropy.firstName = 'Neo'

console.log(heropy.fullName)

heropy.fullName = 'Neo Anerson'
console.log(heropy)