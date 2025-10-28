// 배열
// 배열은 값의 순서가 있는 집합이며, 각 값을 요소라고 부르며 각 요소에는 배열에서 차지하는 위치를 나타내는 숫자인 인덱스가 있습니다.
// 자바스크립트 배열에는 타입이 없습니다. 배열 요소는 어떤 타입이든 상관없고, 배열 하나에서 여러 타입이 섞여 있어도 괜찮습니다.
// 배열 요소에 객체나 다른 배열을 써도 상관없으므로 객체로 이루어진 배열이나 배열로 이루어진 배열 같은 복잡한 데이터 구조를 만들 수도 있습니다.
// 배열의 첫 번째 요소의 인덱스는 1이 아니라 0으로 시작합니다.

// 자바스크립트 배열은 동적입니다.
// 필요한 만큼 배열의 크기가 커지거나 작아질 수 있고, 배열을 생성할 때 고정된 크기를 선언하거나 크기가 변할 때 배열을 재할당할 필요가 없습니다.
// 자바스크립트는 성긴 배열(sparse)을 허용합니다. 즉 요소의 인덱스가 꼭 이어질 필요가 없고, 그 사이에 값이 없어도 된다 혹은 갭이 있어도 된다.

// 1. 배열 생성
// - 배열 리터럴
// - 이터러블(반복 가능한) 객체의 분해 연산자 ... 적용
// - Array() 생성자
// - Array.of()와 Array.from() 팩토리 메서드

// 1.1 배열 리터럴
// 배열을 만드는 가장 단순한 방법은 배열 리터럴입니다.
// 배열 리터럴은 배열 요소를 대괄호 안에서 콤마로 구분한 리스트 형태입니다.

let empty = []; // 요소가 없는 배열
let nums = [1, 2, 3, 4, 5]; // 타입이 숫자인 요소가 5개 있는 배열
let mix = [1.1, true, "문자열 데이터"]; // 타입이 다른 요소가 3개인 배열

let base = 1024;
let table = [base, base + 1, base + 2, base + 3];
console.log(table);

// 배열 리터럴 안에 객체 리터럴이나 다른 배열 리터럴을 써도 됩니다.

let a = [
    [1, { x: 1, y: 2 }],
    [2, { x: 3, y: 4 }],
];

// 배열 리터럴에 콤마를 연속해서 썼는데, 그 사이에 값이 없으면 성긴 배열이 만들어집니다.
let b = [, , ,]; // 값을 생략한 위치에 실제로 배열 요소가 존재하지는 않지만, 검색하면 undefined가 반환됩니다.
let count = [1, , 3]; // 인덱스 0과 2에는 요소가 있지만, 인덱스 1에는 요소가 없습니다.
let undefs = [, ,]; // 요소가 없지만 길이가 2인 배열

// 마지막 쉼표 뒤에 아무것도 오지 않으면, 배열 길이를 계산할 때 해당 슬롯은 포함되지 않습니다.
console.log(b.length); // 3 => 쉼표(,)를 사용하여 배열을 선언할 때, 배열의 길이는 마지막 쉼표 뒤에 요소가 없으면 카운트되지 않습니다.
console.log(count.length); // 3
console.log(undefs.length); // 2 => 쉼표(,)를 사용하여 배열을 선언할 때, 배열의 길이는 마지막 쉼표 뒤에 요소가 없으면 카운트되지 않습니다.

// 1.2 분해 연산자
// 분해 연산자 ...를 써서 배열 리터럴 안에 다른 배열 요소를 넣을 수 있습니다.

let c = [1, 2, 3];
let d = [0, ...c, 4]; // d == [0, 1, 2, 3, 4]

// 분해 연산자 같은 경우에는 배열을 얕게(shallow) 복사할 때 유용합니다.

let original = [1, 2, 3];
let copy = [...original];

console.log("========== 테스트 01 ==========");
console.log(original); // [1, 2, 3]
console.log(copy); // [1, 2, 3]
console.log(original === copy); // false

// 1.3 Array() 생성자
// - 인자 없이 호출
let newArr1 = new Array(); // 요소가 없는 빈 배열을 생성하며 배열 리터럴 []과 동등합니다.

// - 배열 길이를 나타내는 숫자 인자 하나로 호출
let newArr2 = new Array(5); // 지정된 길이를 가진 배열을 생성합니다. 배열 요소가 몇 개인지 미리 알고 있으면 해당 방법을 사용할 수 있습니다.

// - 배열 요소를 두 개 이상 쓰거나 숫자가 아닌 요소를 하나만 넘겨 호출
let newArr3 = new Array(5, 4, 3, 2, 1, "문자열 데이터 01", "문자열 데이터 02"); // 다음과 같이 사용하면 생성자의 인자가 새 배열의 요소가 됩니다.

console.log(newArr1);
console.log(newArr2);
console.log(newArr3);

// 1.4 Array.of()
// Array() 생성자를 숫자 인자 하나만 넘겨 호출하면 길이가 그 숫자인 배열이 생성되는 걸 확인했습니다.
// 숫자 인자가 하나 이상 있으면 이들 각각을 요소로 취급하여 배열을 생성하는 것도 확인하였습니다.
// 따라서 Array() 생성자로는 숫자 요소가 하나만 있는 배열은 생성할 수 없습니다.

Array.of(); // []: 인자가 없으므로 빈 배열
Array.of(10); // [10]: 숫자 인자 하나만 있어도 됩니다.
Array.of(1, 2, 3); // [1, 2, 3]

// 1.5 Array.from()
// 이 메서드는 첫 번째 인자로 이터러블(반복 가능한) 객체나 배열 비슷한 객체(유사 배열: 배열처럼 보이지만 실제로는 객체인 데이터)를 받으며,
// 해당 객체의 요소로 새 배열을 만들어 변환합니다.
// Array.from(iterable)은 분해 연산자를 사용한 [...iterable]과 동등합니다.

let copy2 = Array.from(original);
// let copy2 = [...original]
console.log(copy2); // [1, 2, 3]

// Array.from()이 중요한 이유는 배열 비슷한 객체(유사 배열)를 진정한 배열로 바꾸는 방법이기 때문입니다.
// 배열 비슷한 객체란 숫자인 length 프로퍼티가 있고, 이름이 정수인 프로퍼티에 값이 저장된 객체를 말합니다.

// Array.from()은 선택 사항으로 두 번째 인자를 받습니다.
// 두 번째 인자로 함수를 전달하면 새 배열을 생성할 때, 소스 객체의 각 요소를 이 함수에 전달하고 반환 값을 배열에 저장합니다.

// 배열과 문자열은 가장 광범위하게 쓰이는 내장 이터러블 입니다.
// 이 부분은 암기해주시면 좋습니다.

let str = "Hello";
let arr = Array.from(str, function (char, index) {
    return char + index;
});

console.log("========== Array.from 테스트 ==========");
console.log(str); // Hello
console.log(arr); // ["H0", "e1", "l2", "l3", "o4"]

// 2. 배열 요소 읽기와 쓰기
// 배열 요소에 접근할 때는 [] 연산자를 사용합니다.
// 대괄호 왼쪽에는 배열 참조가 있어야 합니다.
// 대괄호 안에는 양의 정수로 평가되는 표현식이 있어야 합니다.

let a = ["world"]; // 요소가 하나 있는 배열
let value = a[0]; // 인덱스 0을 읽습니다.
a[1] = 3.14; // 인덱스 1에 할당됩니다.

console.log(value); // world
console.log(a); // ['world', 3.14]

let i = 2;
a[i] = 3; // 인덱스 2에 3을 할당합니다.
a[i + 1] = "hello"; // 인덱스 3에 "hello" 값이 할당됩니다.

console.log(a); // ['world', 3.14, 3, 'hello']

a[a[i]] = a[0]; // 인덱스 0과 2를 읽은 다음, 인덱스 3에 값을 할당합니다.
console.log(a); // ['world', 3.14, 3, 'world']

let b = [true, false]; // 이 배열은 인덱스 0과 1에 요소가 있습니다.
console.log(b[2]); // undefined: 이 인덱스에는 요소가 없습니다.
console.log(b[-1]); // undefined: 대괄호 안에는 양의 정수로 평가되는 표현식이 있어야 합니다.

// 3. 성긴 배열
// 성긴 배열은 인덱스가 연속적이지 않은 배열입니다.
// 일반적으로 배열의 length 프로퍼티는 배열에 포함된 요소의 갯수입니다.
// 하지만 성긴 배열의 경우, length 프로퍼티의 값이 요소 갯수보다 큽니다.

let c = new Array(5); // 요소는 없지만, 배열의 길이가 5인 배열. c.length는 5이다.
a = []; // 요소가 없고, length가 0인 배열
a[1000] = 0; // 요소는 하나를 추가하지만, 길이는 1001로 만드는 할당

let a1 = [,]; // 이 배열은 요소가 없고, 길이는 1이다.
let a2 = [undefined]; // 이 배열에는 undefined 요소가 하나 있습니다.

console.log("========== a1 조회 ==========");
console.log(a1); // [empty]
console.log(a1.length); // 1

console.log("========== a2 조회 ==========");
console.log(a2); // [undefined]
console.log(a2.length); // 1

// 배열 길이
// [].length => 배열의 길이는 0이다. 왜냐하면 배열 안에 요소가 없기 때문입니다.
// ["a", "b", "c"].length => 배열의 길이는 3이다. 가장 큰 인덱스는 2이고, 길이는 3입니다.

let test = [1, 2, 3, 4, 5]; // test 배열의 길이는 5입니다.

test.length = 3;
console.log(test); // [1, 2, 3]: test는 이제 [1, 2, 3] 입니다.

test.length = 0;
console.log(test); // []: 요소 전체를 삭제합니다. test는 [] 입니다.

// 빈 배열: 빈 배열은 길이가 0인 배열입니다. 요소가 존재할 슬롯(공간) 자체가 전혀 없습니다.
// 성긴 배열에서의 empty: 요소가 비어있는 슬롯은 배열이 생성될 때 쉼표(,)를 사용하여 슬롯(공간)을 건너뛴 경우에 발생합니다.
//                    슬롯 자체는 존재하지만, 해당 슬롯에 어떤 값도 할당된 적이 없습니다.

// 4. 배열 요소 추가와 삭제
let d = []; // 빈 배열로 시작합니다.
d[0] = "zero"; // 요소를 추가합니다.
d[1] = "one"; // 요소를 추가합니다.

let e = []; // 빈 배열로 시작합니다.
e.push("zero"); // 배열 마지막에 값을 추가합니다. e = ["zero"]
e.push("one", "two"); // 값을 두 개 더 추가합니다. e = ["zero", "one", "two"]

// push()는 e[e.length]에 값을 할당하는 것과 같습니다.

// 배열 순회
let letters = [..."HELLO, WORLD!"];
console.log(letters);

let string = "";
for (let letter of letters) {
    string += letter;
}
console.log(string); // HELLO, WORLD!

let everyother = "";
for (let [index, letter] of letters.entries()) {
    if (index % 2 === 0) everyother += letter;
}
console.log(everyother); // HLO OL!

// forEach()도 배열을 순회하는 좋은 방법 중 하나입니다.
// 이 메서드는 for 루프의 변형이 아니라 배열 순회를 함수형으로 바꾼 배열 메서드입니다.
// forEach()는 전달받은 함수를 각 배열 요소에서 호출합니다.

let uppercase = "";
let greetings = [..."hello, world!"];

greetings.forEach((greeting, index) => {
    // 화살표 함수 문법을 사용했습니다. (함수 파트에서 배워볼 예정)
    uppercase += greeting.toUpperCase();
    console.log(greeting, index);
});
console.log(uppercase); // HELLO, WORLD!

let animals = ["호랑이", "사자", "악어", "곰", "펭귄", "늑대", "여우", "코알라", "캥거루"];
// forEach 메서드의 첫 번째 인자에 함수를 선언한다.
// => 선언한 함수의 첫 번째 요소에는 반복시킬 배열의 요소를 어떤 식별자로 활용할 것인지?,
// 두 번째 요소는 첫 번째 인자 값의 인덱스 번호를 기입한다.
animals.forEach((animal, index) => {
    console.log(animal, index);
});

// forEach()는 배열을 순서대로 순회하며 배열 인덱스를 함수의 두 번째 인자로 전달합니다.
// for-of 루프와 달리 forEach()는 성긴 배열을 인식하고,
// 존재하지 않는 요소에 대해서는 함수를 호출하지 않습니다.

let test1 = [1, 2, 3];
delete test1[1];

console.log("delete 메서드가 동작한 직후, test1: ", test1); // [1, empty, 3]
console.log("test1 배열의 길이: ", test1.length); // 3

test1.forEach((item) => {
    console.log(item); // 1 그리고 3만 출력
});

for (let item of test1) {
    console.log(item); // 1, undefined, 3 출려
}

let test2 = [1, 2, 3];
test2[1] = undefined;

console.log("test2", test2); // [1, undefined, 3]
console.log("test2 배열의 길이: ", test2.length); // 3
test2.forEach((item) => {
    console.log(item); // 1, undefined, 3
});
