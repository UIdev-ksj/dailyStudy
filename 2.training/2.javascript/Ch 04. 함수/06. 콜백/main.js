console.log('챕터1')
const a = callback => {
    callback()
    console.log('A')
}
const b = () => {
    console.log('B')
}
a(b)

console.log('챕터2')
const sum = (a, b, c) => {
    setTimeout(() => {
        c(a + b)
    }, 1000)
}
sum(1, 2, value => {
    console.log(value)
})
// 설명
// 1 = a, 2 = b, 함수 = c
// sum함수 내부에 setTimeout 내의 c의 함수가 실행
// value에 setTimeout내부의 c의 인수가 들어감

sum(3, 7, value => {
    console.log(value)
})

console.log('챕터3')
// https://www.gstatic.com/webp/gallery/4.jpg

const loadImage = (url, cb) => {
    const imgEl = document.createElement('img')
    imgEl.src = url
    imgEl.addEventListener('load', () => {
        setTimeout(() => {
            cb(imgEl)
        }, 1000)
    })
}

const containerEl = document.querySelector('.container')
loadImage('https://www.gstatic.com/webp/gallery/4.jpg', imgEl => {
    containerEl.innerHTML = ''
    containerEl.append(imgEl)
})

// 설명
// loadImage() 실행
// 첫번째 인수 이미지주소를 메모리상에 만든 img 테그에 src속성에 넣음
// 이미지가 로드 되었을때 loadImage()의 두번째 인수인 함수를 실행
// .container 내의 html 삭제, 이미지 추가
// setTimeout을 통해 1초뒤 보여짐