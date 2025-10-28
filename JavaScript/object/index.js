// 1. 객체

// 객체는 자바스크립트의 가장 기본적인 데이터 타입이며, 이미 살펴본 적이 있습니다.
// 객체는 복합된 값이다. 객체는 여러 가지 값(기본 값이나 다른 객체)을 모아서 이름을 통해 값을 저장하고 가져올 수 있게 합니다.
// 객체는 프로퍼티의 순서 없는 집합이며 각 프로퍼티에는 이름과 값이 있습니다. (key-value)
// 프로퍼티 이름은 보통 문자열이므로 객체가 문자열에 값을 연결한다고 볼 수도 있습니다.

// 하지만, 객체는 단순히 문자열과 값을 연결한 것은 아닙니다.
// 자바스크립트 객체는 자신만의 프로퍼티를 가지는 것 외에도, '프로토타입'으로 불리는 다른 객체에서 프로퍼티를 상속하기도 합니다.

// 객체의 메서드는 일반적으로 상속된 프로퍼티이며, 이 '프로토타입 상속'이 자바스크립트의 중요한 기능입니다.
// 자바스크립트 객체는 동적이기 때문에 일반적으로 프로퍼티를 추가하거나 삭제할 수 있지만,
// 정적인 객체를 흉내 낼 수도 있고, 정적 타입을 사용하는 언어의 구조 역시 사용할 수 있습니다.

// 자바스크립트에서 문자열, 숫자, 심벌, 불린, null, undefined가 아닌 값은 전부 객체(Object)입니다.

// 1.1 객체 생성
// 객체를 생성할 때는 객체 리터럴, new 키워드 또는 Object.create() 함수를 사용합니다.

// 1.1.1 객체 리터럴
// 객체를 생성하는 가장 쉬운 방법은 객체 리터럴입니다.
// 객체 리터럴의 가장 단순한 형태는 콜론(:)으로 구분한 이름: 값 쌍을 콤마로 구분해 중괄호로 감싼 형태입니다.
// 프로퍼티 이름은 자바스크립트 식별자 또는 문자열 리터럴이고, 빈 문자열도 허용합니다.

let empty = {}; // 프로퍼티가 없는 객체
let point = {
    x: 0,
    y: 0,
}; // 숫자 프로퍼티 2개
let book = {
    "main title": "자바스크립트", // 프로퍼티 이름에 스페이스(공백)와 하이픈(-)이 들어 있으므로 문자열 리터럴을 썼습니다.
    "sub-title": "자바스크립트 완벽 가이드",
    author: {
        firstName: "David",
        lastName: "Flamenco",
    },
};

// 1.1.2 new
// new 연산자는 새 객체를 생성하고 초기화합니다.
// new 키워드 뒤에는 반드시 함수 호출이 있어야 합니다.
// 이런 형태로 사용하는 함수를 생성자라고 부르고, 새로 생성된 객체를 초기화하는 목적으로 사용합니다.

let obj = new Object(); // 빈 객체를 만듭니다. {}와 같습니다.
let arr = new Array(); // 빈 배열을 만듭니다. []와 같습니다.
let date = new Date(); // 현재 시간을 나타내는 Date 객체를 만듭니다.
let record = new Map(); // 키와 값을 연결하는 Map 객체를 만듭니다.

// 1.1.3 프로토타입
// 객체를 생성하는 세 번째 방법을 설명하기 전에 반드시 프로토타입에 대해 잠시 살펴봐야 합니다.
// 자바스크립트는 프로토타입 기반 언어라고 부릅니다.
// 자바스크립트 객체 거의 대부분은 자신과 연결된 두 번째 객체를 갖습니다.
// 여기서 두 번째 객체를 프로토타입이라고 부르며, 첫 번째 객체는 프로토타입에서 프로퍼티를 상속합니다.

// 객체 리터럴을 사용해 생성한 객체는 모두 같은 프로토타입 객체를 갖습니다.
// 그리고 이 프로토타입 객체는 Object.prototpye이라는 코드로 참조할 수 있습니다.

// new 키워드와 생성자를 사용해 만든 객체는 생성자 함수의 prototype 프로퍼티 값을 자신의 프로토타입으로 사용합니다.
// 따라서 new Object()로 생성한 객체는 {}(객체 리터럴 방식)로 생성한 객체와 마찬가지로 Object.prototype에서 상속합니다.

// 마찬가지로 new Array()를 사용해 생성한 객체(배열)의 프로토타입은 Array.prototype이며,
// new Date()를 사용해 생성한 객체의 프로토타입은 Date.prototype입니다.

// 1.1.4 Object.create()
// Object.create()는 첫 번째 인자를 프로토타입 삼아 새 객체를 생성합니다.
let newObj = Object.create({ x: 1, y: 2 }); // newObj x와 y 프로퍼티를 상속합니다.
console.log(newObj.x + newObj.y); // 3

// 인자로 null을 전달해 프로토타입이 없는 객체를 생성할 수도 있지만,
// 이렇게 생성한 객체는 아무것도 상속하지 않으며 toString() 같은 기본 메서드 조차 없습니다.
let newObj2 = Object.create(null);

// {}나 new Object()가 반환하는 것처럼 일반적인 빈 객체를 만들고 싶을 때는 Object.prototype을 전달합니다.
let newObj3 = Object.create(Object.prototype); // newObj3는 {}나 new Object()와 같습니다.

console.log(newObj);
console.log(newObj2);
console.log(newObj3);

// 1.2 프로퍼티 검색과 설정
// 프로퍼티 값에 접근할 때는 점(.)이나 대괄호([]) 연산자를 사용합니다.
// 이 연산자의 왼쪽은 값이 객체인 표현식이어야 합니다.

// 점 연산자를 사용한다면 오른쪽은 반드시 프로퍼티 이름인 단순한 식별자여야 합니다.
// 대괄호를 사용한다면 그 안에 있는 값은 원하는 프로퍼티 이름인 문자열로 평가되는 표현식이어야 합니다.

let author = book.author; // book의 author 프로퍼티를 가져옵니다.
let name = `${author.firstName} ${author.lastName}`; // author의 firstName과 lastName 프로퍼티를 가져옵니다.
let title = book["main title"]; // book의 main title 프로퍼티를 가져옵니다.

// 프로퍼티를 생성하거나 설정할 때는 값을 가져올 때와 마찬가지로 점 또는 대괄호를 사용하고
// 이들을 할당 표현식의 왼쪽에 써야합니다.
book.edition = 10;
book["main title"] = "NEW 자바스크립트";

// 3. 프로퍼티 열거
// 객체의 프로퍼티 전체를 순회해야 할 때도 있다.

let newObj = { x: 1, y: 2, z: 3 }; // 열거 가능한 자체 프로퍼티는 3개

for (let property in newObj) {
    console.log(property); // x, y, z
}

// for-in 루프를 사용하는 것 보다는 객체의 프로퍼티 이름을 배열에 지정해서 for-of 루프를 사용하는 경우도 있습니다.
// 예를 들어, Object.keys()를 사용하여 객체의 열거 가능한 자체 프로퍼티 이름을 배열로 반환하여
// 이후에 for-of를 사용하는 방법이 있었습니다.

// 4. 객체의 확장
// 자바스크립트 프로그램에서 객체의 프로퍼티를 다른 객체에 복사하는 것은 흔한 일입니다.
// 얕은 복사, 깊은 복사라는 말이 여기에 해당합니다.

let user = { nickname: "개발자 9Diin" };
let information = {
    job: "programmer",
    email: "9diin@gmail.com",
};

// for (let key of Object.keys(information)) {
//     // Object.keys(information) => ["job", "email"];
//     user[key] = information[key];
// }
// console.log(user);

// 하지만 이런 경우가 빈번하지 않으므로, 여러 자바스크립트 프레임워크에서 이런 복사 동작을 수행하는 유틸리티 함수를 정의했습니다.
// Object.assign() 이에 해당합니다.
// Object.assign()은 인자로 두 개 이상의 객체를 받습니다.

// 첫 번째 인자는 반환할 대상 객체이고
// 두 번째 또는 그 이후의 인자는 소스 객체이므로 수정하지 않습니다. 각 소스 객체의 열거 가능한 자체 프로퍼티를 대상 객체에 복사합니다.

// 복사할 때 소스 객체를 인사 순서대로 처리하는데, 첫 번째 소스 객체의 프로퍼티는 대상 객체 있는 같은 이름의 프로퍼티를 덮어 쓰고,
// 두 번째 소스 객체가 없다면 그 객체의 프로퍼티가 첫 번째 소스 객체의 있는 같은 이름의 프로퍼티를 덮어 씁니다.

// 이렇게 복사를 하는 이유가 가장 중요하겠죠?
// 프로퍼티를 객체에서 다른 객체로 복사하는 이유 중 하나는 소스 객체에 기본 값을 정의해 두고 대상 객체에 그런 이름이 존재하지 않는다면
// 복사해서 쓰려는 목적입니다.

// 아래와 같이 Object.assign()을 생각 없이 사용하면 원하는 결과를 얻지 못할 수도 있습니다.

// console.log(user); // {nickname: '개발자 9Diin'}
// Object.assign(user, information);
// console.log(user); // {nickname: '개발자 9Diin', job: 'programmer', email: '9diin@gmail.com'}

// 다음과 같이 새 객체를 생성하고 기본 값을 복사한 다음, 이 기본 값을 newObj의 프로퍼티로 덮어 써야 의도에 맞습니다.
let copy1 = Object.assign({}, user, information);
let copy2 = { ...user, ...information };

// 위처럼 객체를 복사하고 덮어쓰는 동작을 다음과 같이 스프레드 연산자(분해 연산자) ...으로 하는 방법도 있습니다.

console.log(user);
console.log(copy1); // {nickname: '개발자 9Diin', job: 'programmer', email: '9diin@gmail.com'}
console.log(copy2); // {nickname: '개발자 9Diin', job: 'programmer', email: '9diin@gmail.com'}
console.log(copy1 === copy2); // false

// 5. 객체 직렬화
// 객체 직렬화는 객체를 문자열로 반환하는 작업입니다.
// 이 문자열은 나중에 다시 객체로 되돌릴 수 있습니다.
// JSON.stringify()와 JSON.parse()는 자바스크립트 객체를 직렬화하고 되돌리는 함수입니다.

let obj = {
    x: 1,
    y: {
        z: [false, null, ""],
    },
};
let str = JSON.stringify(obj);
let par = JSON.parse(str);

console.log(str); // {"x":1,"y":{"z":[false,null,""]}}
console.log(par); // 원래 객체 구조형태로 변환

// JSON 문법은 자바스크립트 문법의 부분 집합이며 자바스크립트 값 전체를 표현하지는 못합니다.
// 객체, 배열, 문자열, 유한한 숫자, true, false, null은 모두 지원되고 직렬화와 복원이 가능합니다.
// NaN, Infinity, -Infinity는 null로 직렬화됩니다.

// 6. 프로퍼티 검색과 설정
// 프로퍼티 값에 접근할 때는 점(.)이나 대괄호([]) 연산자를 사용합니다.
// 이 연산자의 왼쪽의 값이 객체인 표현식이어야 합니다.
// 점 연산자를 사용한다면 오른쪽은 반드시 프로퍼티 이름인 단순한 식별자여야 합니다.
// 대괄호를 사용한다면 그 안에 있는 값은 원하는 프로퍼티 이름인 문자열로 평가되는 표현식이어야 합니다.

let author = book.author; // book의 author 프로퍼티를 가져옵니다.
let name = author.surname; // author의 surname 프로퍼티를 가져옵니다.
let title = book["main title"]; // book의 main title 프로퍼티를 가져옵니다.

// 프로퍼티를 생성하거나 설정할 때는 값을 가져올 때와 마찬가지로 점 또는 대괄호를 사용하고,
// 이들을 할당 표현식의 왼쪽에 써야 합니다.

book.edition = 10;
book["main title"] = "자바스크립트 완벽가이드";

// 대괄호를 사용하면 그 안의 표현식은 반드시 문자열로 평가되어야 한다고 했습니다.
// 더 정확히 말해, 표현식은 반드시 문자열, 또는 문자열이나 심벌로 변환될 수 있는 값으로 평가되어야 한다.

object.property = object["property"];

// 7. 상속
// 자바스크립트 객체에는 자체 프로퍼티도 있고, 프로토타입 객체에서 상속하는 프로퍼티도 있습니다.
// 예를 들어, 객체 obj에 x 프로퍼티를 가져온다고 해보겠습니다.
// obj에 x 라는 자체 프로퍼티가 없다면, obj의 프로토타입 객체에서 x 프로퍼티를 검색합니다.
// 즉, x 프로퍼티를 찾거나 or 프로토타입 null인 객체에 도달할 때까지 검색을 계속합니다.

// 객체의 prototype 속성은 자신이 어디에서 프로퍼티를 상속했는지 나타내는 체인을 형성합니다.

let obj = {}; // obj는 Object.prototype에서 객체 메서드를 상속
obj.x = 10; // 자체 프로퍼티 x 생성

console.log("obj", obj);

let prop = Object.create(obj); // prop은 obj와 Object.prototype에서 프로퍼티를 상속
prop.y = 20; // 자체 프로퍼티 y 생성

console.log("prop", prop);

let props = Object.create(prop); // props는 obj, prop, Object.prototype에서 프로퍼티를 상속
props.z = 30;

console.log("props", props); // { z: 30 }

console.log("props.x", props.x); // 10
console.log("props.y", props.y); // 20
console.log("props.a", props.a); // undefined

console.log(props.x + props.y);

// 만약, 객체 obj의 x 프로퍼티에 값을 할당해본다고 가정하겠습니다.
// 객체 obj에 이미 자체(상속되지 않은) x 프로퍼티가 있다면 그 값은 새로 할당한 값으로 바뀝니다.
// 그렇지 않다면 객체 obj에 x 프로퍼티를 새로 만들고 거기에 할당합니다.
// obj에 상속된 프로퍼티 x가 있었다면, 상속된 프로퍼티는 이제 새로 생성된 자체 프로퍼티에 "가려집니다".

// 프로퍼티 할당은 프로토타입 체인을 검색해 할당이 허용되는지 확인합니다.
// 예를 들어, obj가 읽기 전용인 x 프로퍼티를 상속한다면 할당은 허용하지 않습니다.
// readonly 읽기전용 속성이기 때문입니다.
// 그러나 할당이 허용된다면, 항상 원래 객체에 프로퍼티를 생성하거나 설정할 뿐, 프로토타입 체인에 존재하는 객체는 절대 수정하지 않습니다.

let circle = { r: 10 }; // 상속할 객체
let prop = Object.create(circle); // prop은 프로퍼티 r을 상속

prop.x = 20; // 자체 프로퍼티 x 정의
prop.y = 20; // 자체 프로퍼티 y 정의
prop.r = 40; // prop이 상속한 프로퍼티를 덮어씀

console.log("prop", prop); // {x:20, y:20, r:40}
console.log("circle", circle); // {r: 10}
console.log("circle.r", circle.r); // 10

// 8. 프로퍼티 접근 에러
// 프로퍼티 접근 표현식이 항상 값을 반환하거나 설정하는 것은 아닙니다.
// 존재하지 않는 프로퍼티를 검색하는 것은 에러가 아닙니다.
// 자체 프로퍼티나 상속된 프로퍼티가 없을 경우에는 undefined를 반환합니다.

let subTitle = book.subTitle; // => undefined: 프로퍼티가 존재하지 않습니다.

// 하지만, 존재하지 않는 "객체"의 프로퍼티를 검색하려는 것은 에러입니다.
// null과 undefined에는 프로퍼티가 없기 때문에 이런 값에서 프로퍼티를 검색하려는 것은 에러입니다.

let length = book.subTitle.length; // TypeError: undefined에는 length 프로퍼티가 없습니다.

// 프로퍼티 접근 표현식은 점 연산자의 왼쪽이 null이나 undefined이면 실패합니다.
