console.log('챕터1')
const hello = () => {
    console.log('Hello~')
}
// const timeout = setTimeout(hello, 2000)
const timeout = setInterval(hello, 2000)
const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
    console.log('Clear!')
    clearInterval(timeout)
})