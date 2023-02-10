console.log('챕터1')
const a =  true
const b = false

// and(그리고) 연산자
if (a && b) {
    console.log('모두가 참!')
}

// or(또는) 연산자
if (a || b) {
    console.log('하나 이상이 참!')
}

//and연산자
console.log('챕터2')
console.log(true && false)
console.log(1 && 0)
console.log(1 && 2 && 0)
console.log(1 && 0 && 2)
console.log(0 && 1 && 2)
console.log(1 && 2 && 3)

//and연산자
console.log('챕터3')
console.log(false || true)
console.log(0 || 1)
console.log(false || 0 || {})
console.log(false || [] || null)
console.log(function(){} || undefined || '')
console.log(false || 0 || NaN)