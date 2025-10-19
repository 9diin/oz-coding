function a() {
    console.log("A");
}

function b() {
    console.log("B");
}

// 코드를 작성한 순서대로 동작하는 것을 "동기"라고 합니다.
a();
b();

function a1() {
    setTimeout(() => {
        console.log("A1");
    }, 1000);
}

function b1() {
    console.log("B1");
}

// 예) A라는 값이 출력된 후에 B라는 값이 출력될 수 있도록 보장하려면 어떻게 해야할까?

function a2(callback) {
    setTimeout(() => {
        console.log("A2");
        callback();
    }, 1000);
}

function b2() {
    console.log("B2");
}

a2(function () {
    b2();
});

// 위 코드에서 setTimeout이라는 함수를 사용한 것이 중요한 게 아니라
// 특정 로직이 끝난 다음에, 또 다른 새로운 로직을 실행하는 것을 콜백 함수라는 개념을 통해서 보장해주었다는 것입니다.

function a3(callback) {
    setTimeout(() => {
        console.log("A3");
        callback();
    }, 1000);
}

function b3(callback) {
    setTimeout(() => {
        console.log("B2");
        callback(); // undefined를 함수처럼 실행하려고 하니 에러가 납니다.
    }, 1000);
}

function c3(callback) {
    setTimeout(() => {
        console.log("B3");
        callback(); // undefined를 함수처럼 실행하려고 하니 에러가 납니다.
    }, 1000);
}

function d3(callback) {
    setTimeout(() => {
        console.log("D3");
        callback(); // undefined를 함수처럼 실행하려고 하니 에러가 납니다.
    }, 1000);
}

a3(function () {
    b3();
    b3(function () {
        console.log("완료!");
    });
});

// 콜백 지옥
// 기본적인 실행을 보장하고, 그 다음에 처리해야하는 내용이 많아지면
// 해당 코드가 점점 깊어지겠죠? 관리하기가 굉장히 불편해질 수 있습니다.
// 콜백이라는 것이 기본적인 실행의 다음 순서를 보장해준다는 장점이 있지만
// 사용 패턴이 불편합니다.

// 이것을 보완하기 위해 Promise 객체를 사용합니다.
a3(function () {
    // b3();
    b3(function () {
        c3(function () {
            d3(function () {
                console.log("완료!");
            });
        });
    });
});
