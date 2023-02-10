//생성자함수방식 리터럴방식이 아니다
// const user = new Object()
// user.name = 'HEROPY'
// user.age = 85

// console.log(user)

//함수내부에서 this 키워드로 속성값을 추가할수 있다.
// function User() {
//     this.name = "HEROPY"
//     this.age = 85
// }
// const user = new User()

//기호를 이용해서 만든게 리터럴방식
const user = {
    name: 'HEROPY',
    age: 85
}
const key = 'name'

console.log(user)
console.log(user.name) //마침표를 이용하여 name속성 조회, 점표기법
console.log(user['name']) //대괄호표기법 많이 사용이된다.
console.log(user[key]) //변수로 찾을수도 있다.

console.log(user)


const userA = {
    name: 'HEROPY',
    age: 85
}
const userB = {
    name: 'Neo',
    age: 22,
    parent: userA
}

console.log(userB)
console.log(userB.parent)
console.log(userB.parent.name)
console.log(userB['parent']['name'])

const users = [userA, userB]

console.log(users[0]) //인덱싱
console.log(users[0].name) //인덱싱 후 이름 조회
console.log(users[0]['name']) //인덱싱 후 이름 조회