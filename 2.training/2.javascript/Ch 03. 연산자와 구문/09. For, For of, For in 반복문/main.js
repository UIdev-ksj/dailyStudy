console.log('챕터1')
for(let i = 9; i > -1; i -=1) {
    // 4보다 작을때 반복 멈춤
    // if (i < 4) {
    //     break
    // }

    //짝수반복 패스
    if (i % 2 === 0) {
        continue
    }
    console.log(i)
}

console.log('챕터2')
const fruits = ['Apple', 'Banana', 'Cherry']
// for (let i = 0; i < fruits.length; i += 1) {
//     console.log(fruits[i])
// }
//위의 반복문과 동일 더 간략
for (const fruit of fruits) {
    console.log(fruit)
}

//다른 예제
const users = [
    {
        name: 'Heropy',
        age: 85
    },
    {
        name: 'Neo',
        age: 22
    },
    {
        name: 'Lewis',
        age: 34
    }
]

for (let i = 0; i < users.length; i += 1) {
    console.log(users[i].name)
}
//위의 코드와 동일하게 출력됨
for (const user of users) {
    console.log(user.name)
}

console.log('챕터3')

const user2 = {
    name: 'Heropy',
    age: 85,
    isValid: true,
    email: 'thesecon@gmail.com'
}

for (const key in user2) {
    console.log(key)
    console.log(user2[key])
    // console.log(key,':',user2[key])
}