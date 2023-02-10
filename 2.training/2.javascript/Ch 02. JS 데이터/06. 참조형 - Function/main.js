function hello() {
    console.log('Hello!')
}

hello() // Call 호출
console.log(hello)

// function getNumber(){
//     return 123
// }

const getNumber = function() { //익명함수
    return 123
}
console.log(getNumber)
console.log(getNumber())

const a = function(){
    console.log('A')
}
const b = function(c){ //c는 매게변수
    console.log(c)
    c() //매게변수에 함수가 지정되었으므로 호출할수있다.
}
b(a) //b함수의 매게변수 c로 값 전달