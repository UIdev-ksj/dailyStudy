//Boolean(불린)
const a = true
const b = false
if(a) {
    console.log("hello")
}
//////null
let age = null
console.log(age)
setTimeout(function(){
    age = 85
    console.log(age)
}, 1000)
//undefined
let age2
console.log(age2)
setTimeout(function(){
    age2 = 85
    console.log(age2)
}, 1000)
const user = {
    name: 'HEROPY',
    age: 85,
    email: null
}
console.log(user.name)
console.log(user.age)
console.log(user.email)