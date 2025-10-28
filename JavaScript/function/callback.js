// 콜백 함수(Callback Function)
// 콜백 함수란, 다른 함수에 인자(argument)로 전달되는 함수를 말합니다.
// 쉽게 말해, 실행을 위임받아 "나중에(call back) 실행될 함수"라는 뜻입니다.

// - 호출의 주체: 콜백 함수를 전달받은 외부 함수가 특정 시점이나 특정 조건에서 콜백 함수를 실행(호출)합니다.
// - 사용 이유: 어떤 작업이 완료된 후에 실행되어야 하는 코드를 지정하거나, 비동기적으로 처리되는 작업의 결과를 다루기 위해 사용됩니다.

const a = () => {
    console.log("A");
};
const b = () => {
    console.log("B");
};

a(b()); // b: 콜백, 콜백 함수라고 부릅니다. 함수가 실행될 때, 인수/인자로 들어가는 또 다른 함수를 콜백이라 부릅니다.
// => 위 함수 호출 결과: A

const c = (callback) => {
    console.log("C");
    callback();
};
const d = () => {
    console.log("D");
};

c(d);

const printDone = () => {
    console.log("✅ 작업 완료!");
};

const runAfter = (callback) => {
    console.log("===== 작업을 시작하였습니다. =====");
    callback(); // ✅ 작업 완료!
    console.log("===== 작업을 완료하였습니다. =====");
};

runAfter(printDone);

// ❌ 잘못된 방식: 비동기 함수의 return 값은 바로 받을 수 없습니다.
const sum = (x, y) => {
    // 이 return은 sum()의 return이 아니라, setTimeout 내부 익명 함수의 return 입니다.
    setTimeout(() => {
        console.log("setTimeout 실행!");
        return x + y; // 30
    }, 1000);
    // sum 함수 자체는 아무것도 반환하지 않으로 undefined가 나옵니다.
    console.log("sum 함수 실행!");
};

console.log(sum(10, 20)); // undefined

// ✅ 올바른 방식: 결과를 콜백 함수로 전달합니다.
const add = (a, b, callback) => {
    setTimeout(() => {
        // 계산 결과를 인자로 담아 콜백 함수를 호출합니다.
        callback(a + b);
    }, 1000);
};

add(10, 20, (result) => {
    console.log("10과 20의 합계: ", result);
});

add(30, 70, (result) => {
    console.log("30과 70의 합계: ", result);
});
