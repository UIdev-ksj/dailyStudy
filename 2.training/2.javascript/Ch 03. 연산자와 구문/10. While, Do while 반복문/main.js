console.log('챕터1')

let n = 0

while (n < 4) {
    console.log(n)
    n += 1
}

console.log('챕터2')

let a = 0

// while (a) {
//     console.log(a)
// }
do {
    console.log(a)
    a += 1
} while (a < 4)


// chatgpt 예제 while
let count = 0;
while (count < 5) {
    console.log(`현재 숫자는 ${count}입니다.`)
    count++
}
//0부터 4까지의 숫자를 출력하는 예제

let numbers = [1, 2, 3, 4, 5]
let sum = 0
let i = 0
while (i < numbers.length) {
    sum += numbers[i]
    i++
}
console.log(`배열의 합은 ${sum}입니다.`)
//배열 numbers의 모든 요소를 합산하는 예제
//while문을 이용해 배열의 길이만큼 반복하면서 배열의 요소를 누적하여 합산


// chatgpt 예제 Do while
let count2 = 5
do {
    console.log(`현재 숫자는 ${count2}입니다.`)
    count2--
} while (count2 > 0)
//5부터 1까지의 숫자를 출력하는 예제

let answer = 6
let guess
do {
    guess = prompt("1부터 10 사이의 숫자를 맞춰보세요:")
} while (guess != answer)
alert("축하합니다! 정답입니다.")
//사용자로부터 1부터 10 사이의 숫자를 입력받아서 정답인 6을 맞출 때까지 반복하는 예제
//사용자가 정답을 맞출 때까지 계속해서 prompt 창이 뜨면서 숫자를 입력받음.
