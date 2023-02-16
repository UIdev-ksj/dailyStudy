console.log("챕터1")
let i = 0
const a = () => {
    console.log('A')
    i += 1
    if (i < 4) {
        a()
    }
}
a()

console.log("챕터2")
const userA = { name: 'A', parent: null }
const userB = { name: 'B', parent: userA }
const userC = { name: 'C', parent: userB }
const userD = { name: 'D', parent: userC }

const getRootUser = user => {
    if (user.parent) {
        return getRootUser(user.parent)
    }
    return user
}
// 설명
// getRootUser()함수가 호출이 될때 객체가 user 매개변수로 받는다
// if 조건으로 user 부분에 parent 속성이 참인지 확인
// 참이면 return으로 반환, 자기자신 함수 호출(재귀호출)
// user.parent 부분을 인수가 user 매개변수로 넘어간다.
// 거짓이면 if 부분을 동작하지않고 return user 반환한다.
console.log(getRootUser(userD))