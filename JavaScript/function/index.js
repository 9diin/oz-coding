// 함수
// 함수는 한 번 정의하면 몇 번이고 호출할 수 있는 자바스크립트 코드 블록입니다.
// 자바스크립트 함수는 매개변수화(parameterized) 됩니다.
// 함수 정의에는 매개변수(parameter)라고 불리는 식별자 리스트가 있는데, 이들은 함수 바디에서 로컬 변수처럼 동작합니다.

function fn(parameter1, parameter2, parameter3) {
    // parameter: 로컬 변수 => 함수 바디에서만 사용할 수 있습니다.
}

// 함수를 호출할 때는 매개변수에 값을 전달하는데 이를 인자(argument)라고 합니다.

// 1. 함수 정의
// 자바스크립트에서 함수를 정의하는 가장 단순한 방법은 function 키워드입니다.
// 이 키워드(function)는 선언으로도, 표현식으로도 사용할 수 있습니다.

// 2. 함수 선언
// 함수 선언 function 키워드 뒤에 다음 세 가지 구성 요소를 씁니다.
// - 함수 이름이 될 식별자, 이름은 함수 선언에서 뺄 수 없는 부분입니다.
//   이 이름은 변수 이름으로 쓰이며, 새로 정의된 함수 객체가 이 변수에 할당됩니다.
// - 소괄호로 감싸고 콤마로 구분한 0개 이상의 식별자 리스트. 이 식별자들은 함수 매개변수 이름이며 함수 바디 안에서 로컬 변수로 동작합니다.
// - 중괄호로 감싼 0개 이상의 자바스크립트 문. 이 문이 함수 바디이며, 함수를 호출할 때마다 실행됩니다.

console.log(factorial(3)); // 6 => 값이 출력되는 이유는 함수 선언문은 호이스팅 되기 때문입니다.

// 팩토리얼을 계산하는 재귀함수(자신을 호출하는 함수)
// x!는 x 이하의 양의 정수를 모두 곱한 값입니다.
function factorial(x) {
    // 팩토리얼을 계산하는 재귀함수 로직을 작성한다.
    if (x <= 1) return 1;
    return x * factorial(x - 1);
}

// console.log(x); // => Error

// 함수 선언에서 이해해야 할 중요한 점은 함수의 이름이 변수이며 그 값은 함수 자체라는 점입니다.
// 함수 선언문은 자신을 포함하는 스크립트, 함수, 또는 블록 맨 위에 끌어올려지므로
// 함수 선언문으로 정의한 함수는 정의하기 전에도 호출할 수 있습니다. => 호이스팅

console.log(factorial(3)); // 6

// 2.1 함수 선언문(Declaration)
// 함수 이름이 필수이기 때문에 익명이 불가합니다.
function fn() {}

function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2)); // 3
console.log(sum(10, 20)); // 30

// 2.2 함수 표현식(Expression)
// 함수 표현식은 함수 선언과 거의 비슷하지만, 더 큰 표현식이나 문의 일부로서 존재하고 이름을 붙이지 않아도 된다는 점이 다릅니다.
// => 함수 자체가 독립적인 명령이 아니라, 어떤 값으로 취급되어 더 큰 구조물의 일부로 사용될 수 있다는 의미입니다.
// => 변수에 할당: const myFunction = function() { ... }
// => 콜백 함수: array.map(function (item or element) { ... })
// => 즉시 실행 함수: (function() { ... })()

// const fn = function () {};

// 함수를 변수에 할당했습니다.
const square = function (x) {
    return x * x;
};

// 표현식으로 정의한 함수에 이름을 붙이는 것은 선택 사항입니다.
// 함수 선언은 실제로 변수를 선언하며 그 변수에 함수 객체를 할당합니다.
// 함수 표현식은 반드시 변수에 할당해야 하는 것은 아닙니다.

// 다만, 함수 객체를 나중에 다시 참조해야 한다면, 프로그래머의 선택에 따라 변수 또는 상수에 할당합니다.
// 함수 표현식을 쓸 때는 실수로 함수를 덮어쓰지 않도록 하기 위해 const를 사용하는 것이 좋은 습관입니다.

// 함수 표현식을 다른 함수의 인자로 사용할 수 있습니다.
// 이름이 없는 익명함수
[3, 2, 1].sort(function (a, b) {
    return a - b;
});

// 이름 있는 함수로도 가능하지만,
function compareNumbers(a, b) {
    return a - b;
}
[3, 2, 1].sort(compareNumbers);

// 위처럼 작성하려면, compareNumbers라는 이름을 따로 선언해야 합니다.
// 하지만 한 번 쓰고 말거라면 굳이 이름을 붙일(함수 선언문) 필요 없이 표현식으로 바로 전달하는게 더 간결합니다.

// 2.3 화살표 함수
// 화살표 함수는 문이 아니라 표현식이므로 function 키워드는 사용하지 않으며 함수 이름도 필요 없습니다.
// 화살표 함수의 일반적인 형태는 괄호 안에 콤마로 구분한 매개변수 리스트를 쓰고, 그 뒤에 => 화살표와 중괄호로 감싼 함수 바디를 쓰는 형태이다.

// - function 키워드를 사용하지 않습니다.
// - return 키워드로 로직이 바로 시작되는 경우에는 return 키워드와 중괄호를 제거하여 사용할 수 있습니다.
// - 매개변수를 가질 수 있는데, 만약 매개변수가 단 한 개만 있다고 하면 매개변수를 감싸고 있는 소괄호를 생략할 수 있습니다.

const sum2 = (a, b) => {
    return a + b;
};
const sum3 = (a, b) => a + b;

console.log(sum2(10, 20)); // 30
console.log(sum3(10, 20)); // 30

const multiply = (x) => {
    console.log(x); // 로직이 return으로 바로 시작하지 않기 때문에, 해당 코드는 생략 불가
    return x * x;
};
// 로직이 return으로 바로 시작하지 않기 때문에, console.log(x)는 생략 불가하기 때문에 아래처럼 작성할 수 없습니다.
// const multiply = (x) => x * x;

const getObj = () => {
    return { value: "객체 데이터" };
};
console.log(getObj()); // => 함수를 실행할 때는 반드시 소괄호를 붙인다.

const getTest = () => {
    value: "객체 데이터";
}; // 중괄호로 사용된 부분이 마치 함수의 블록처럼 보이기 때문에, 자바스크립트 문법적으로 이해할 수 없는 코드가 들어있기 때문에 오류가 납니다.

console.log(getTest()); // undefined

// 위 문제를 해결하기 위해 객체 데이터는 소괄호로 묶어줍니다.
// 화살표 함수에서 반환 값이 객체 리터럴일 때, 이를 소괄호 ()로 감싸주는 이유는
// 자바스크립트 문법이 함수 본문 블록 {}과 객체 리터럴 {}을 혼동하기 때문입니다.
// 화살표 함수의 간결한 문법(=>)을 사용할 때, 개발자가 의도하는 바에 따라 중괄호 {}의 의미가 달라집니다.

const getObj2 = () => ({ value: "객체 데이터" });
// 객체 리터럴 { value: "객체 데이터" } 전체를 소괄호 ()로 감싸는 것은 이를 하나의 "표현식"임을 명시적으로 알려줍니다.
// 소괄호는 ()는 => 뒤에 오는 코드가 함수 본문 블록(body block)이 아니라, 즉시 반환해야 할 표현식(Expression)임을 선언합니다.
console.log(getObj2()); // { value: "객체 데이터" }

const getArr = () => {
    return [10, 20, 30];
};
console.log(getArr()); // [10, 20, 30]

const getArr2 = () => [10, 20, 30];
console.log(getArr2());

// 1. 함수 호출
// 함수 바디를 구성하는 자바스크립트 코드는 함수를 정의할 때가 아니라 호출할 때 실행됩니다.

// 1.1 함수로 호출
// 일반적인 함수 호출에서는 함수의 반환 값이 호출 표현식의 값입니다.
// return 문을 만나지 않은 채 인터프리터가 함수의 끝에 도달하면 반환 값은 undefined 입니다.
// 인터프리터가 return 문을 실행해서 함수를 종료한다면 return 문 다음에 있는 표현식의 값이 함수의 반환 값이며,
// return 문에 값이 없다면 undefined가 함수의 반환 값입니다.

// 조건부 호출
// 함수 표현식과 여는 괄호 사이에 ?.를 넣어서 함수가 null이나 undefined가 아닌 경우에만 호출하게 할 수 있습니다.
// 예시) f?.(x)

function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet()); // Hello, undefined!

let fn = greet;
let result = fn !== null && fn !== undefined ? fn("Alice") : undefined;
// result = "Hello, Alice!"

fn = null;
let result2 = fn !== null && fn !== undefined ? fn("Bob") : undefined;
// result2는 undefined

const fn2 = greet;
console.log(fn2?.());

// 1.2 함수 매개변수
// 자바스크립트 함수는 매개변수로 어떤 타입을 받는지 정의하지 않으며, 함수 호출 시점에서도 전달받은 값의 타입을 체크하지 않습니다.

// 1.2.1 선택 사항인 매개변수와 기본 값
// 선언된 매개변수보다 적은 인자로 함수를 호출하면, 대응하는 인자가 없는 매개변수는 기본 값으로 정해지며
// 일반적으로 이 값은 undefined 입니다.

// 예제 01)
// 객체 obj의 열거 가능한 프로퍼티를 배열 arr에 추가하고 arr를 반환합니다.

function getPropertyNames(obj, arr) {
    if (arr === undefined) {
        arr = [];
    }
    for (let property in obj) {
        arr.push(property);
    }
    return arr;
}

// getPropertyNames()는 인자 한 개나 두 개로 호출할 수 있습니다.
let one = { x: 1 };
let two = { y: 2, z: 3 };
let arr = getPropertyNames(one);

console.log(arr); // arr = ["x"]
console.log(getPropertyNames(two, arr)); // ["x", "y", "z"]

// 함수를 호출할 때, 첫 번째 인자를 생략하고 두 번째만 전달하려면 첫 번째 인자에 명시적으로 undefined를 써야 합니다.
// 함수를 정의할 때, 함수 매개변수의 기본 값을 정의할 수도 있습니다.
// 매개변수 이름 뒤에 등호(=)를 쓰고, 그 매개변수가 생략됐을 때 사용할 기본 값을 쓰면 됩니다.

function getPropertyNames2(obj, arr = []) {
    for (let property in obj) {
        arr.push(property);
    }
    return arr;
}

// 1.2.2 나머지 매개변수와 가변 길이 인자 리스트
// 매개변수 기본 값을 사용하면 정의된 매개변수보다 적은 인자를 써서 함수를 호출할 수 있습니다.
// 나머지 매개변수(Rest Parameter)는 반대입니다.
// 정의된 매개변수 보다 더 많은 인자를 써서 함수를 호출할 수도 있습니다.

function sum(...numbers) {
    let total = 0;

    console.log("numbers: ", numbers); // 배열

    for (let number of numbers) {
        total += number;
    }
    return total;
}

console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum()); // 0

function introduce(greeting, ...names) {
    for (let name of names) {
        console.log(`${greeting}, ${name}`);
    }
}

console.log(introduce("Hello", "Alice", "Bob", "Charlie"));
// Hello, Alice
// Hello, Bob
// Hello, Charlie

// 1.2.3 Argument 객체
// 함수 바디 안에서 식별자 arguments는 해당 호출의 arguments 객체를 참조합니다.
// arguments 객체는 함수에 전달된 인자 값을 이름이 아닌 숫자로 참조할 수 있게 합니다.

// 쉽게 말해, arguments 객체는 함수에 전달된 모든 인자(값)들을 담고 있는 특별한 '보관함' 같은 것 입니다.
// 이 보관함은 함수 안에서만 사용할 수 있습니다.

// 함수를 호출할 때, 괄호() 안에 값을 넣어서 전달하는데, 이 값들을 인자(argument)라고 합니다.

function myFunction(a, b) {
    // 함수 내부
}

myFunction("안녕하세요", 1000);

// 이때 arguments 객체는 "안녕하세요"와 1000을 순서대로 담고 있는, 배열과 아주 비슷하게 생긴 객체입니다.
// "arguments 객체는 함수에 전달된 인자 값을 이름이 아닌 숫자로 참조할 수 있게 합니다"라는 이 말의 의미는
// 우리가 함수를 정의할 때, a와 b처럼 인자의 이름(매개변수)을 정해주지만
// arguments 객체를 사용하면 그 이름 대신 0번째, 1번째 같은 순서(숫자)로 값에 접근할 수 있다는 뜻입니다.

// - a 라는 이름으로 접근 => "안녕하세요"
// - arguments[0] 라는 숫자로 접근 => "안녕하세요"

// - b 라는 이름으로 접근 => 1000
// - arguments[1] 라는 숫자로 접근 => 1000

// 언제 유용할까요?
// arguments 객체는 함수에 몇 개의 인자가 들어올지 모를 때 특히 유용합니다.
// 예를 들어, 전달된 모든 숫자를 더하는 함수를 만든다고 상상해 보세요.
// 2개를 더할 수도 있고, 5개를 더할 수도 있겠죠?

function sumAll() {
    let total = 0;

    console.log("arguments: ", arguments);

    // arguments.length는 함수에 전달된 인자의 총 개수를 알려줍니다.
    for (let i = 0; i < arguments.length; i++) {
        // arguments[i]를 사용해 각 인자에 순서대로 접근합니다.
        total += arguments[i];
    }
    return total;
}

console.log(sumAll(1, 2, 3)); // 결과: 6 (인자가 3개)
console.log(sumAll(10, 20, 30, 40)); // 결과: 100 (인자가 4개)
console.log(sumAll(5)); // 결과: 5 (인자가 1개)

// 1.2.4 함수 호출과 분해 연산자
// 분해 연산자 ...는 개별 값이 예상되는 컨텍스트에서 배열이나 문자열 같은 이터러블 객체를 분해합니다.
// ...는 평가를 통해 값을 얻을 수 없다는 점에서 진정한 연산자로는 볼 수 없습니다.
// ...는 배열 리터럴과 함수 호출에 사용할 수 있는 특별한 자바스크립트 문법입니다.

// 분해 연산자(...)는 간단히 말해 '포장을 푸는 것' 또는 '내용물만 꺼내는 것'이라고 생각하면 아주 쉽습니다.
// 배열이나 문자열 같은 묶음(이터러블 객체)의 껍데기(대괄호 [] 등)을 벗겨내고 알멩이, 즉 개별 값들만 남겨주는 역할을 합니다.

// - 함수에 인자를 전달할 때
// Math.max() 함수는 Math.max(1, 5, 3)처럼 낱개의 숫자들을 받아서 가장 큰 값을 찾아줍니다.
// 여기에 배열 [1, 5, 3]을 통째로 넣으면 에러가 나니다. 이때 ...로 배열의 포장을 풀어주면 됩니다.

const numbers = [1, 5, 3];

// 잘못된 사용
Math.max(numbers); // NaN (배열 자체를 비교할 수 없음)
console.log(Math.max(numbers)); // NaN

// 올바른 사용
Math.max(...numbers); // NaN (배열 자체를 비교할 수 없음)
console.log(Math.max(...numbers)); // 5

// - 새로운 배열을 만들 때 (배열 합치기/복사)
// 다른 배열의 내용물만 쏙 빼서 새 배열에 넣고 싶을 때 아주 유용합니다.

const fruits1 = ["사과", "바나나"];
const fruits2 = ["딸기", "포도"];

// ...로 각 배열의 내용물만 쏙 빼서 혹은 꺼내서 새 배열에 담기
const combinedFruits = [...fruits1, ...fruits2];
console.log(combinedFruits); // ['사과', '바나나', '딸기', '포도']

function introduce(name, age, job) {
    console.log(name);
    console.log(`이름: ${name}, 나이: ${age}, 직업: ${job}`);
}
const details = ["개발자 9Diin", 100, "개발자"];

// 배열 통째로 전달하면 안됨
introduce(details); // 이름: 개발자 9Diin,100,개발자, 나이: undefined, 직업: undefined

// 분해 연산자로 배열의 각 요소를 개별 인자로 전달
introduce(...details); // 이름: 개발자 9Diin, 나이: 100, 직업: 개발자
introduce("개발자 9Diin", 100, "개발자");
