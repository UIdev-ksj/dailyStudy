console.log('챕터1')

function isPositive(number) {
    if (number > 0) {
        return '양수'
    } else if (number < 0) {
        return '음수'
    } else {
        return '0'
    }
}
console.log(isPositive(1))
console.log(isPositive(10))
console.log(isPositive(-2))
console.log(isPositive(0))


console.log('챕터2')

// function price(fruit) {
//     let p
//     switch (fruit) {
//         case 'Apple':
//             p = 1000
//             break
//         case 'Banana':
//             p = 1500
//             break
//         case 'Cherry':
//             p = 2000
//             break
//         default:
//             p = 0
//     }
//     return p
// }

// 위 코드를 최적화
// function price(fruit) {
//     switch (fruit) {
//         case 'Apple':
//             return 1000
//         case 'Banana':
//             return 1500
//         case 'Cherry':
//             return 2000
//         default:
//             return 0
//     }
// }

//if문으로 변환
function price(fruit) {
    if (fruit === 'Apple') {
        return 1000
    } else if (fruit === 'Banana') {
        return 1500
    } else if (fruit === 'Cherry') {
        return 2000
    } else {
        return 0
    }
}

console.log(price('Apple'))
console.log(price('Banana'))
console.log(price('Cherry'))
console.log(price('Hello'))