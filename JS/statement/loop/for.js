// 3. for
// for 문은 자바스크립트의 대표적인 반복문

for (initialize; test; increment) {
    statement;
}

// initialize, test, increment는 세미콜론으로 구분하며 각각 루프 변수의 초기화, 테스트, 증감을 담당합니다.
// 이 요소들은 루프의 첫 번째 행에 모음으로써 for 루프가 무엇을 하는지 이해하기 쉽고,
// 루프 변수의 초기화나 증감을 잊어버리는 실수를 방지할 수 있다는 편리함이 있습니다.
// while 문과 비교를 해보겠습니다.

// initialize;
// while (test) {
//     statement;
//     increment;
// }
let count = 0;

while (count < 10) {
    console.log("현재 count 값: ", count);
    count++;
}

// for (initialize; test; increment) {
//     statement;
// }
for (let count = 0; count < 10; count++) {
    console.log("현재 count 값: ", count);
}

// for-of는 ES6에서 정의한 새 반복문입니다.
// 이 루프는 for 키워드를 사용하긴 하지만 일반적인 for 루프와는 완전히 다릅니다.
// for-of는 이터러블(iterable: 반복 가능한) 객체(Object)에서 동작합니다.
// 보통 배열과 문자열이 이에 속합니다.

// 위 설명이 이해가 안된다! => for-of는 배열과 문자열에서 사용하는 반복문이다.

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;

for (let element of data) {
    // statement;
    console.log("element: ", element);
    sum += element;
    // sum = sum + element;
}
console.log(sum); // 45

// 코드만 보면 일반적인 for 루프와 비슷해보입니다.
// for 루프에서는 for 키워드를 쓰고, 그 뒤에 이 루프가 하는 일을 괄호로 묶어 한 행에 모두 표현한다 했습니다.
// for-of에서도 마찬가지로 괄호 안에는 변수 선언(이미 선언된 변수의 경우에는 그 이름)이 있고, of 키워드가 있고,
// 그 뒤에는 data처럼 이터러블 객체(배열, 문자열)로 평가되는 표현식이 있습니다.
// 다른 루프와 마찬가지로 for-of 루프 바디는 괄호 뒤에 있으며 일반적으로 중괄호로 감싼다.

// 위 코드에서 루프 바디는 data 배열의 각 요소에 대해 한 번씩 실행됩니다.
// 루프 바디를 실행하기 전, 배열의 다음 요소가 element 변수에 할당됩니다.
// 배열 요소의 경우, 첫 번째에서 시작해 마지막으로 순회합니다.
// 배열은 '동적'으로 순회하기 때문에 즉, 반복 중간에 배열 자체에 변화가 발생한다면 반복 결과가 바뀔 수도 있으니
// 이 점은 유의하셔야 합니다.

// for-of와 참조 타입의 객체
// 참조 타입의 객체는 기본적으로 이터러블이 아닙니다.
// 일반적인 객체에 for-of를 사용하려 한다면 런타임에 TypeError가 발생합니다.

let obj = {
    x: 1,
    y: 2,
    z: 3,
};

// for (let element of obj) {
// statement
// console.log("element: ", element); // Uncaught TypeError: obj is not iterable
// }

// 참조 타입의 객체의 프로퍼티를 순회하고 싶다면, for-in 루프를 사용하거나 Object.keys() 메서드를 사용하여
// 키 값으로 이루어진 배열을 반환받아 해당 배열을 통해 for-of를 사용해야 합니다.

// [참고] 키를 순회하는 것은 동적이지 않습니다.
// Object.keys()는 객체의 프로퍼티 이름으로 이루어진 배열을 반환하며 배열은 for-of 루프를 사용할 수 있는 이터러블 객체이잖아요?

// 키는 문자열 또는 심벌이기 때문에 Object.keys() 메서드를 통해 키 값으로 이루어진 배열의 모든 요소는 String 입니다.
// console.log(Object.keys(obj)); // ['x', 'y', 'z']

let total1 = 0;
let total2 = 0;

for (let element of Object.keys(obj)) {
    // obj.x === obj["x"];
    // obj.y === obj["y"];
    // obj.z === obj["z"];

    // statement
    // 객체의 대괄호 표기법을 사용
    console.log("element: ", element); // "x" or "y" or "z"
    console.log("obj[element]: ", obj[element]); // 1 or 2 or 3
    // console.log("obj.element: ", obj.element); // undefined

    total1 = total1 + obj[element];
}
console.log(total1); // 6

for (let value of Object.values(obj)) {
    total2 = total2 + value;
}
console.log(total2); // 6

// 객체 프로퍼티의 키와 값이 모두 필요하다면, Object.entries()와 분해 할당을 통해 for-of도 사용할 수 있습니다.
for (let [key, value] of Object.entries(obj)) {
    // statement
    console.log(Object.entries(obj)); // [["x", 1], ["y", 2], ["z", 3]]
    // console.log(element); // ['x', 1] or ["y", 2] or ["z", 3]
    console.log("key: ", key, "value: ", value);
}

// 5. for-in
// for-in 루프는 of 키워드가 in으로 바뀐 점을 제외하면 for-of 루프와 거의 비슷합니다.
// for-of 루프는 of 다음에 이터러블 객체가 와야 하지만, for-in 루프는 in 다음에 어떤 객체든 쓸 수 있습니다.

// for (variable in object) {
//     statement;
// }

// variable에는 일반적으로 변수 이름이 들어가지만 for-of와 마찬가지로 변수 선언이 될 수도 있고
// 할당 표현식에서 왼쪽에 올 수 있는 것은 무엇이든 가능합니다.
// object는 객체로 평가되는 표현식입니다.
// 다른 문과 마찬가지로 statement는 루프 바디 구실을 하는 문 또는 문 블록입니다.

let object = {
    user1: "김아무개",
    user2: "이아무개",
    user3: "박아무개",
};

for (let property in object) {
    // statement
    // object의 프로퍼티 이름을 변수 property에 할당합니다.
    console.log(property); // user1 or user2 or user3
    console.log(object[property]); // 각 프로퍼티 값을 출력합니다.
}

// 자바스크립트 인터프리터는 for-in 문을 실행할 때 첫 번째로 object 표현식을 평가합니다.
// 그 표현식이 null이나 undefined로 평가되면 인터프리터는 루프를 건너뛰고 다음 문으로 이동합니다.

// 제가 직전 강의에서 for-of는 배열에서, for-in 객체에서 사용한다고 말씀드렸는데요.
// 이렇게 딱 잘라 말씀드린 이유는 해당 루프들은 위 경우에 많이 사용되기 때문입니다.
