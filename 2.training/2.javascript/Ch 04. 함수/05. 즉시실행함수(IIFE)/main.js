console.log('챕터1')
const a = 7
const double = () => {
    console.log(a * 2)
}
double()

;(() => {
    console.log(a * 2)
})()

//사용패턴
;(() => { console.log(a * 2) })()           // (함수)() 화살표함수는 패턴이 한개
;(function () { console.log(a * 2) })()     // (함수)()
;(function () { console.log(a * 2) }())     // (함수())
;!function () { console.log(a * 2) }()      // !함수()
;+function () { console.log(a * 2) }()      // +함수()

console.log('챕터2')
;((a, b) => {
    console.log(a)
    console.log(b)
})(1, 2)

;((a, b) => {
    console.log(a.innerWidth)
    console.log(b.body)
})(window, document)