// 1. 호이스팅

// 자바스크립트에서 함수를 이해할 때, 가장 먼저 만나게 되는 개념 중 하나는 바로 호이스팅(Hoisting)입니다.
// 호이스팅이란, 자바스크립트 엔진이 코드를 실행하기에 앞서
// 함수 선언이나 변수 선언 같은 중요한 정보를 미리 끌어올려서 처리하는 것처럼 보이는 현상을 말합니다.

// 즉, 함수 선언이 해당 함수의 호출보다 먼저 평가되는 개념입니다.
// 함수 선언을 코드의 실행 전에 끌어올려서 처리하기 때문에, 함수가 선언되기 전에 호출해도 에러가 발생하지 않습니다.

// 단, 함수 호이스팅 현상은 함수 선언문에서만 발생하고, 함수 표현식에서는 발생하지 않습니다.
// - 함수 선언문(function hello() { ... })으로 작성된 함수는 실제 코드에서 선언된 위치보다 앞서 호출해도 정상적으로 동작합니다.
//   자바스크립트 엔진이 함수를 코드 최상단으로 미리 옮겨 놓은 것처럼 동작하기 때문입니다.
// - 반면, 변수에 함수를 할당하는 함수 표현식(const arrow = function() { ... })의 경우
//   함수 자체가 호이스팅 되지 않으므로 반드시 선언된 이후에만 호출해야 합니다.
//   선언 이전에 호출하려 하면 오류(에러)가 발생하게 됩니다.

hello(); // ⬅️ 함수 선언보다 먼저 호출했는데도 작동!
// 결과: ➡️ 테스트: 함수 선언문으로 작성된 함수입니다.

function hello() {
    console.log("테스트: 함수 선언문으로 작성된 함수입니다.");
}

// arrow(); // ❌ 에러 발생 (호이스팅 안 됨)

const arrow = function () {
    console.log("테스트: 함수 표현식으로 작성된 함수입니다.");
};

// 2. 함수의 반환과 종료 (Return)
// return 키워드는 함수 실행의 결과 값을 호출한 곳으로 돌려주며, 동시에 함수의 실행을 즉시 종료시킵니다.
// return 문 이후에 작성된 코드는 실행되지 않습니다.

function plusOne(num) {
    // 방어 코드: 전달된 값이 숫자가 아니라면 즉시 0을 반환하고 함수 종료
    if (typeof num !== "number") {
        console.log("경고: 숫자가 아닌 값이 전달되었습니다.");
        return 0;
    }
    return num + 1; // num이 숫자일 때만 실행
}

console.log(plusOne("점심 진짜 뭐 먹지?"));
// 결과 ➡️ 경고: 숫자가 아닌 값이 전달되었습니다.
// 결과 ➡️ 0 (return 0이 반환)

// 3. 매개변수 패턴(Parameter Pattern)
// 함수의 인자를 받는 매개변수 자리에도 다양한 문법을 사용할 수 있습니다.

// 3.1 기본값(Default Value)
// 인자가 전달되지 않아 undefined가 될 경우, 미리 설정해 둔 기본 값을 사용하도록 지정하는 문법입니다.

// y에 값이 전달되지 않으면 자동으로 0이 할당됩니다.
function total(x, y = 0) {
    return x + y;
}

console.log(total(10, 20)); // y에 20이 전달되어: 30
console.log(total(10)); // y가 할당되지 않아 기본값 사용: 10

// 3.2 구조 분해 할당(Destructuring Assignment)
// 객체나 배열을 인자로 받을 때, 함수 내부에서 코드를 작성할 필요 없이 매개변수 자리에서 바로 필요한 값만 추출하여 사용할 수 있습니다.

const user = {
    name: "9diin",
    born: 1900,
};

// user.name을 바로 "name"이라는 변수로 사용 가능
function getName({ name, born }) {
    console.log(born); // 1900
    return name;
}
console.log(getName(user)); // 결과: 9diin

const fruits = ["Apple", "Banana", "Cherry"];

// 배열의 첫 번째, 두 번째, 세 번째 요소를 a, b, c 변수(로컬 변수)로 사용
function getSecondItem([a, b, c]) {
    console.log(b); // ['Apple', 'Banana', 'Cherry']
    return b;
}
console.log(getSecondItem(fruits)); // 결과: Banana

// 3.3 나머지 매개변수(Rest Parameter)
// ... 기호는 함수 매개변수에서 사용될 때 나머지 매개변수(Rest Parameter)라고 불리며,
// 함수에 전달된 모든 추가 인자들을 자동으로 모아서 하나의 배열로 만들어 줍니다.
// ...는 전달된 인자들을 '포장하는' 역할을 합니다. (분해 연산자 ... 와 반대 역할)

function add(firstNum, ...rest) {
    // [2, 3, 4]
    console.log(rest); // ⬅️ 전달된 나머지 인자들이 "배열"로 묶여서 나옴!

    // 배열이 되었기 때문에 .reduce() 같은 배열 메서드를 사용할 수 있습니다.
    // acc: 누적 값
    // cur: 현재 값
    return rest.reduce((acc, cur) => acc + cur, firstNum); // 축약형
}

// 1은 firstNum에 할당. 2, 3, 4는 ...rest에 배열로 할당
console.log(add(1, 2, 3, 4)); // 10
