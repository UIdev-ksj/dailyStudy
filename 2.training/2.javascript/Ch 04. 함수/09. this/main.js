console.log('챕터1')
const user = {
    firstName: 'Heropy',
    lastName: 'Park',
    age: 85,
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(user.getFullName())
//설명
//this : getFullName 속성이 해당하는 객체데이터(user를 뜻함)

const user2 = {
    firstName: 'Heropy',
    lastName: 'Park',
    age: 85,
    getFullName: () => {
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(user2.getFullName())
//설명
//this : getFullName()의 함수를 감싸고 있는 외부의 함수를 기준으로함
//getFullName() 감싸는 외부함수가 없기에 undefined로 뜬다.


function user3() {
    this.firstName = 'Neo'
    this.lastName = 'Anderson'

    return {
        firstName: 'Heropy',
        lastName: 'Park',
        age: 85,
        getFullName: () => {
            return `${this.firstName} ${this.lastName}`
        }
    }
}
const u = user3()
console.log(u.getFullName())
//설명
// user3함수에서 getFullName()사용할수 없기에 u라는 변수에 user3 호출한 값을 저장
// 내부에서 return 키워드를 통해 객체데이터를 반환
// getFullName() 호출
// 화살표 함수면 this 키워드는 현재 함수를 감싸고 있는 외부함수를 참조
// this.firstName = 'Neo', this.lastName = 'Anderson' 반환

function user4() {
    this.firstName = 'Neo'
    this.lastName = 'Anderson'

    return {
        firstName: 'Heropy',
        lastName: 'Park',
        age: 85,
        getFullName() {
            return `${this.firstName} ${this.lastName}`
        }
    }
}
const uu = user4()
console.log(uu.getFullName())

const lewis = {
    firstName: 'Lewis',
    lastName: ' Yang'
}
console.log(uu.getFullName.call(lewis))
// 설명
// 다른 메소드를 사용할수 있다.
// uu객체가 가지고있는 getFullName() 메소드를 빌려서 call할수 있다.
// getFullName() 메소드가 실행될때 lewis 객체 내에서 this가 실행

console.log('챕터2')
const timer = {
    title: 'TIMER!',
    timeout() {
        console.log(this.title) // timer의 title속성
        setTimeout(function () {
            console.log(this.title)
        }, 1000)
        // seTimeout의 인수로 일반함수만들었고 this는 일반함수 내의 title 속성을 찾고있다.
        // title 속성을 찾을 수 없으므로 console.log는 undefined 표시

        setTimeout(() => {
            console.log(this.title)
        }, 1000)
        // seTimeout의 인수로 화살표함수로 만들었고 this는 해당 화살표 함수 외부의 함수
        // 즉 timer 함수의 속성 title을 찾는다. console.log는 TIMER! 표시
    }
}
timer.timeout()