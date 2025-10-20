// 1. 프로토타입(prototype)의 역할
// 자바스크립트는 프로토타입 기반 언어입니다.

// 정의: 프로토타입(prototype)은 객체가 다른 객체의 기능(속성과 메서드)을 물려받는 상속 메커니즘의 핵심입니다.
// 작동 방식: 모든 객체는 자신을 만들어낸 프로토타입 객체를 참조하며, 자신이 가지고 있지 않은 속성이나 메서드를 요청받으면
// 이 프로토타입 객체를 따라 올라가며(이를 프로토타입 체인이라고 합니다.) 해당 기능을 찾습니다.
// 핵심: 클래스 본질은 결국 같은 프로토타입을 공유하고 상속받는 객체들의 집합입니다.

// 2. 클래스(class)의 의미
// 자바스크립트 클래스(class)는 비슷한 성질을 가진 객체들을 만들기 위한 틀(설계도) 입니다.
// class 키워드는 프로토타입 기반 상속을 더 쉽고 익숙한 문법으로 사용할 수 있게 해줍니다.

// 과거에는 주로 생성자 함수(Constructor Function)와 prototype 속성을 직접 조작하여 클래스처럼 동작하는 객체를 만들었습니다.
// Object.create(): Object.create(프로토타입 객체) 함수는 지정된 프로토타입 객체를 상속하는 새로운 객체를 생성하여,
// 클래스를 정의하는 기본 원리를 보여주는 중요한 방법입니다.
// 현재는 class 키워드를 사용하여 클래스를 정의하며, 이 방식이 내부적으로는 여전히 프로토타입 상속을 이용합니다.

// 프로토타입 객체 만들기
const animalPrototype = {
    // 전통적인 key-value 형태
    // eat: function () {
    //     console.log("냠냠, 밥을 먹어요!");
    // },
    // sleep: function () {
    //     console.log("쿨쿨, 잠을 자요!");
    // },

    // 간결하고 현대적인 방식
    eat() {
        console.log("냠냠, 밥을 먹어요!");
    },
    sleep() {
        console.log("쿨쿨, 잠을 자요!");
    },
};

// animalPrototype을 상속하는 객체 만들기
const dog = Object.create(animalPrototype);
dog.bark = function () {
    console.log("멍멍!");
};

dog.eat(); // 냠냠, 밥을 먹어요!
dog.sleep(); // 쿨쿨, 잠을 자요!
dog.bark(); // 멍멍!

console.log(dog);

// 프로토타입 객체 만들기
const carPrototype = {
    start() {
        console.log("엔진이 켜졌습니다.");
    },
    stop() {
        console.log("엔진이 꺼졌습니다.");
    },
};

// carPrototype을 상속받는 객체 만들기
const myCar = Object.create(carPrototype);

myCar.brand = "TESLA";
myCar.drive = function () {
    console.log(`${myCar.brand}이/가 자율주행모드로 달리고 있습니다.`);
};

myCar.start();
myCar.drive();
myCar.stop();

console.log(myCar);

let user = {
    firstName: "9Diin",
    lastName: "Park",
    age: 33,
    getFullName: function () {
        return `${user.firstName} | ${user.lastName}`;
    },
};

console.log(user.getFullName()); // 9Diin | Park

// getFullName에서 어떻게 user 내부의 프로퍼티에 접근할 수 있었을까요?
// 이유는 자바스크립트의 스코프 체인 덕분입니다.
// 자바스크립트에서 변수나 식별자를 찾을 때, 현재 스코프 -> 바깥 스코프 -> 그 바깥 ... -> 전역 스코프 순서대로 찾아 나갑니다.
// 이 연결 구조가 마치 체인처럼 연결되어 있어서 "스코프 체인"이라 부릅니다.

// user 객체는 함수 바깥에 선언되어 있어서 함수 안에서도 접근할 수 있는 겁니다.
// 즉, 전역 혹은 바깥 블록에 선언된 이름을 함수 내부에서 참조하는 것은 문제 없이 됩니다.

// 그러나 이렇게 작성하는 건 위험할 수 있습니다.
// getFullName: function () {
//     return `${user.firstName} | ${user.lastName}`;
// },

// user 변수가 다른 객체로 바뀌거나, 아예 없어지면 코드가 깨질 수가 있기 때문입니다.

let user2 = user;
user2 = null;

// console.log(user2.getFullName()); // Cannot read properties of null (reading 'getFullName')

// 그래서 더 안전하고 일반적인 방식은?
// this 키워드를 사용하여 getFullName을 호출한 객체, 즉 user를 가리킵니다.
// 따라서 객체의 자기 자신의 프로퍼티를 참조하는 가장 안전하고 유연한 방법입니다.

let user3 = {
    firstName: "9Diin",
    lastName: "Park",
    age: 33,
    getFullName: function () {
        return `${this.firstName} | ${this.lastName}`;
    },
};

console.log(user3.getFullName()); // 9Diin | Park

function user4() {
    this.firstName = "홍";
    this.lastName = "길동";
    this.age = 33;

    this.getFullName = function () {
        return `${this.firstName} | ${this.lastName}`;
    };
}

const res = new user4();
console.log(res.getFullName());
