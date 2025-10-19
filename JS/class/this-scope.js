// 자바스크립트 this의 스코프 이해

// 1. 일반 함수 안의 this와 콜백의 문제
// 자바스크립트에서 this는 "어디서 선언됐는가"가 아니라 "어떻게 호출됐는가"에 따라 결정됩니다.
// 특히 일반 함수는 호출될 때마다 this가 달라집니다.

const timer = {
    name: "Park",
    timeout: function () {
        setTimeout(() => {
            console.log(this.name);
        }, 2000);
    },
};
timer.timeout(); // undefined

// timer.timeout()이 호출될 때, timeout 메서드 안의 this는 timer 객체를 가리킵니다.
// timeout() 메서드는 timer 객체의 메서드로 호출되었기 때문에, 이 시점에서의 this는 timer 객체를 가리킵니다.

// 하지만 문제는 그 안의 setTimeout()에 전달한 콜백 함수입니다.
// setTimeout() 안의 콜백 함수는 일반 함수(function () {})로 정의되어 있습니다.

// setTimeout()은 우리가 넘겨준 콜백 함수를 브라우저가 나중에 실행시킵니다.
// 이때 브라우저는 "timer 객체의 메서드처럼" 호출하지 않습니다.
// 그냥 일반 함수처럼 단독으로 실행합니다.

// 일반 함수가 단독으로 호출되면, 그 안의 this는 전역 객체(window나 global)를 가리키게 됩니다.
// 전역 객체에는 name 속성이 없기 때문에, this.name은 결국 undefined가 됩니다.
// 즉, 콜백 함수가 실행될 때 timer와의 연결이 끊겨버린 것이죠.

// 일반 함수는 호출될 때의 문맥(context)에 따라 this가 결정되는데,
// setTimeout은 콜백을 특정 객체의 메서드로 호출하지 않습니다.

// 따라서 이 콜백의 this는 기본적으로 전역 객체(window)를 가리키며,
// this.name은 undefined가 됩니다.

// 두 번째 예제
const timer2 = {
    name: "Park",
    timeout: function () {
        setTimeout(() => {
            console.log(this.name); // Park
        }, 2000);
    },
};
timer2.timeout();

// 화살표 함수는 자신만의 this를 가지지 않습니다.
// 대신 자신이 만들어질 때의 상위 스코프의 this를 그대로 사용합니다.

// 위 코드에서 setTimeout()의 콜백은 화살표 함수이므로,
// 그 안의 this는 timeout 메서드의 this, 즉 timer2 객체를 그대로 물려받습니다.

// setTimeout이 상위 스코프가 될 수 없는 이유
// setTimeout은 함수를 호출하는 주체이지, 스코프를 만드는 함수가 아닙니다.
// 즉, setTimeout은 단지 우리가 준 콜백 함수를 "나중에 실행해주는 역할"만 합니다.
// 그 콜백이 어디에서 선언됐는지를 전혀 신경쓰지 않습니다.

// setTimeout은 자바스크립트의 함수(Function) 맞습니다.
// 단, 일반적인 함수와는 달리 “비동기적으로 콜백을 예약하는 역할” 을 합니다.

// 클래스 문법
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// 프로토타입 문법
function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};
