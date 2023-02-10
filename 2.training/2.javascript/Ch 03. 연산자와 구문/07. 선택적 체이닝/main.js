console.log('챕터1')

// const user = null
// console.log(user?.name) //선택적체이닝방식

console.log('챕터2')
const userA = {
    name: 'HEROPY',
    age: 85,
    address: {
        country: 'korea',
        city: 'Seoul'
    }
}

const userB = {
    name: 'Neo',
    age: 22
}

function getCity(user) {
    return user.address?.city || '주소 없음.'
}

console.log(getCity(userA))
console.log(getCity(userB))