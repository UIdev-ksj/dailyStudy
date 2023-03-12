// 상속 (instanceof)

// 운송수단
class Vehicle {
    constructor(acceleration = 1) {
        // 매개변수로 acceleration 받는데 값이 없으면 1이 된다.
        this.speed = 0
        this.acceleration = acceleration
    }
    accelerate() {
        this.speed += this.acceleration
    }
    decelerate() {
        if(this.speed <= 0) {
            console.log('정지!')
            return
        }
        this.speed -= this.acceleration
    }
}

//자전거
class Bicycle extends Vehicle { //extends는 Vehicle 클래스에서 상속해서 사용
    constructor(price = 100, acceleration) {
        super(acceleration) //Vehicle에서 가지고 있는 constructor()
        this.price = price
        this.wheel = 2
    }
}

const bicycle = new Bicycle(300)
bicycle.accelerate()
bicycle.accelerate()
console.log(bicycle)
console.log(bicycle instanceof Bicycle)
console.log(bicycle instanceof Vehicle)

//자동차
class Car extends Bicycle {
    constructor(license, price, acceleration) {
        super(price, acceleration)
        this.license = license
        this.wheel = 4  // Bicycle 클래스의 속성을 다시 덮어씌운다.
    }
    accelerate() { // Vehicle 클래스의 accelerate()함수를 재정의한다. 오버라이딩(Overriding)
        if (!this.license) {
            console.error('무면허!')
            return
        }
        this.speed += this.acceleration
        console.log('가속!', this.speed)
    }
}

const carA = new Car(true, 7000, 10)
const carB = new Car(false, 4000, 6)
carA.accelerate() //클래스에서 accelerate() 함수를 호출
carA.accelerate()
carB.accelerate()
console.log(carA)
console.log(carA instanceof Car) // true
console.log(carA instanceof Bicycle) // true
console.log(carB)
console.log(carB instanceof Car) // true
console.log(carB instanceof Vehicle) // true

// 보트
class Boat extends Vehicle {
    constructor(price, acceleration) {
        super(acceleration)
        this.price = price
        this.moter = 1
    }
}
const boat = new Boat(10000, 5)
console.log(boat)
console.log(boat instanceof Vehicle)  //true
console.log(boat instanceof Bicycle)  //false