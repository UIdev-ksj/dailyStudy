console.log('챕터1')
//호이스팅
//함수 선언문에서는 정상 작동
hello()
function hello() {
    console.log('Hello~')
}

// 아래와 같이 함수선언문에서 표현식으로 변경하게되면 호이스팅이 작동되지 않는다. 
hello2()
const world = function hello2() {
    console.log('Hello~')
}

//함수 표현식에선 오류
hello3()
const hello3 = function () {
    console.log('Hello~')
}