// 1. 변수
// 변수란 프로그래밍 언어에서 데이터를 관리하기 위한 핵심 개념입니다.
// 변수(Variable)는 하나의 값을 저장하기 위해 확보한 메모리 공간 자체 또는 그 메모리 공간을 식별하기 위해 붙인 이름입니다.
// 간단히 말하자면, 변수는 프로그래밍 언어에서 값을 저장하고 참조하는 매커니즘으로 값의 위치를 가리키는 상징적인 이름입니다.
// 상징적인 이름인 변수는 프로그래밍 언어의 컴파일러 또는 인터프리터에 의해 값이 저장된 메모리 공간의 주소로 치환되어 실행됩니다.
// 따라서 개발자가 직접 메모리 주소를 통해 값을 저장하고 참조할 필요가 없고, 변수를 통해 안전하게 값에 접근할 수 있습니다.

// 1.1 식별자
// 변수 이름을 "식별자"라고도 합니다.
// 식별자는 어떤 값을 구별해서 식별할 수 있는 고유한 이름을 말합니다.
// 사람을 이름으로 구별해서 식별하는 것처럼 값도 식별자로 구별하여 식별할 수 있습니다.
// 값은 메모리 공간에 저장되어 있습니다. 따라서 식별자는 메모리 공간에 저장되어 있는 어떤 값을 구별해서 식별해 낼 수 있어야 합니다.
// 이를 위해 식별자는 어떤 값이 저장되어 있는 메모리 주소를 기억(저장)해야 합니다.

// let username = "개발자 9Diin";

// username ===============> abcdefg ===============> ["개발자 9Diin"]
// 변수 이름(식별자)             메모리 주소                 메모리, 값

// 1.2 변수 선언
// 변수 선언이란, 변수를 생성하는 것을 말합니다.
// 즉, 값을 저장하기 위한 메모리 공간을 확보하고, 변수 이름과 확보된 메모리 공간의 주소를 연결해서 값을 저장할 수 있게 준비하는 것입니다.
// 변수를 사용하라면 반드시 선언이 필요합니다.
// 변수를 사용할 때는 let과 const 키워드를 사용합니다.

// let: 키워드, score: 식별자(변수)
// 세미콜론은 코드의 의미를 명확히 하는데 중요한 역할을 합니다.
let score; // 변수 선언(변수 선언문)

// 위 코드에서 변수를 선언한 이후, 아직 변수에 값을 할당하지 않았습니다.
// 따라서 변수 선언에 의해 확보된 메모리 공간은 비어 있을 것으로 생각할 수 있으나
// 자바스크립트 엔진에 의해 확보된 메모리 공간에는 undefined라는 값이 암묵적으로 할당되어 초기화됩니다.

// - 선언 단계: 변수 이름을 등록해서 자바스크립트 엔진에 변수의 존재를 알린다.
// - 초기화 단계: 값을 저장하기 위한 메모리 공간을 확보하고 암묵적으로 undefined를 할당해 초기화한다.

console.log(score); // undefined
console.log(username); // Cannot access 'username' before initialization

// Cannot access 'username' before initialization 에러가 발생하는 이유는
// 변수 선언이 소스코드가 한 줄씩 순차적으로 실행되는 시점, 즉 런타임(Runtime)이 아니라 그 이전 단계에서 먼저 실행되기 때문입니다.

let username;
console.log(username); // undefined

username = "개발자 9Diin"; // 값의 할당
console.log(username); // 개발자 9Diin

let email = "9diin@gmail.com"; // 변수 선언과 값의 할당

// 변수 선언은 소스 코드가 순차적으로 실행되는 시점인 런타임 이전에 먼저 실행되지만,
// 값의 할당은 소스 코드가 순차적으로 실행되는 시점인 런타임에 실행된다.

// console.log(job); // Cannot access 'job' before initialization

let job;
console.log(job); // undefined

job = "developer";
console.log(job); // developer

// 상수를 선언할 때는 const를 사용합니다.
// const는 let과 거의 비슷하지만 선언할 때 반드시 값을 초기화해야 한다는 점이 다릅니다.
const name; // 'const' 선언을 초기화해야 합니다.

// 이름에서 짐작할 수 있듯 상수의 값은 바꿀 수 없습니다.
// 반드시 지켜야 하는 건 아니지만, 상수를 선언할 때는 전부 대문자를 써서 변수와 구별하는 관습이 있다.

// const 키워드는 자바스크립트에서 [변수 자체에 재할당을 방지하는 역할]을 합니다.
// 하지만 const로 선언한 객체나 배열의 내용물(프로퍼티나 요소)은 변경할 수 있습니다.
// 이를 이해하기 위해서는 const가 어떻게 동작하는지 좀 더 깊이 파악할 필요가 있습니다.

// 1) const는 "변수 재할당"을 막는다.
// const는 객체 자체나 배열을 다시 할당하는 것을 막습니다. 예를 들어,
const user = {
    name: "",
    email: "",
};

console.log(user); // { name: "", email: "" }
user = { name: "test", email: "test@test.com" };

console.log(user); // Assignment to constant variable.

// 위 코드에서 user 자체를 다른 객체로 재할당하려고 하면 오류가 발생합니다.
// 하지만 객체 내부의 값을 바꾸는 것은 가능합니다.

// 2) 객체의 프로퍼티는 변경할 수 있습니다.
// 객체의 프로퍼티 값은 변경할 수 있습니다. 즉, const로 선언된 객체라도 그 객체 내부의 값은 수정이 가능합니다.
user.name = "test";
user.email = "test@test.com";

console.log(user); // { name: "test", email:"test@test.com" }

// user 객체의 속성 값을 바꿀 수 있는 이유는 user라는 변수는 객체의 참조를 가리키고 있기 때문입니다.
// 즉, let과 const 키워드를 통해 임의의 식별자를 선언하면 메모리 주소가 생기고, 그 주소를 참고합니다.
// const로 선언된 상수는 그 객체의 참조(주소)가 바뀌지 않도록 보장할 뿐, 객체 내부의 데이터 자체는 변경할 수 있습니다.

// 배열도 같은 규칙이 적용됩니다.
// 배열을 const로 선언하면 배열 자체를 재할당 할 순 없지만, 배열의 요소를 변경하거나 추가하는 것은 가능합니다.
const users = ["Kim", "Lee", "Park"];
console.log(users); // ['Kim', 'Lee', 'Park']

users = ["a", "b", "c"]; // Assignment to constant variable.

users.push("Choi");
console.log(users); // ['Kim', 'Lee', 'Park', 'Choi']

users[0] = "Song";
console.log(users); // ['Song', 'Lee', 'Park', 'Choi']

// const는 객체나 배열이 재할당되는 것을 방지하지만, 그 내용물(프로퍼티나 값, 요소)은 여전히 변경할 수 있습니다.
// const의 목적은 변수의 재할당을 방지하는 것 뿐이지, 불변성을 보장하는 것은 아닙니다.

// 2. 타입, 값, 변수

// 프로그래밍 언어에서 표현하고 조작할 수 있는 값의 종류를 타입이라 부르며,
// 어떤 타입을 지원하는지가 프로그래밍 언어의 가장 기본적인 특징을 이룹니다.
// 프로그램에서 값을 나중에 사용하기 위해 유지하려면 변수에 값을 할당(저장)합니다.
// 변수에서는 이름이 있으며, 프로그램은 변수 이름을 통해 값을 참조합니다.

// 자바스크립트 타입은 기본 타입과 객체 타입 둘로 나뉩니다.
// 자바스크립트 기본 타입에는 숫자, 문자열, 불리언(boolean) 타입이 있습니다.
// null과 undefined는 기본 값이지만 숫자나 문자열, 불리언에 속하진 않습니다.
// null과 undefined 각 값은 일반적으로 그 타입 자체로 취급해도 무방하다.
// 또한, 특별한 목적을 가진 심벌(symbol)이 있습니다. 심벌의 목적은 하위 호환성을 해치지 않으면서 언어의 확장을 정의하는 것입니다.

// 자바스크립트에서 숫자, 문자열, 불리언, null, undefined, 심벌 중 어느 것에도 속하지 않는 값은 모두 객체입니다.
// 객체는 객체 타입의 멤버이며, 프로퍼티의 집합입니다.
// 객체의 각 프로퍼티에는 이름과 값이 있고, 이를 key-value라고 합니다.
// 이 값은 기본 값일 수도 있고, 다른 객체일 수도 있습니다.
// 일반적인 자바스크립트 객체는 이름 붙은 값의 순서 없는 집합입니다.
// 그러나 자바스크립트에는 특별한 객체인 배열도 있습니다. 배열은 값의 순서 있는 집합이며 각 값는 숫자로 표현됩니다.

// 2.1 숫자
// 자바스크립트의 숫자 타입은 Number는 정수와 함께 실수를 대략적으로 표현합니다.

// 2.1.1 정수 리터럴
// 자바스크립트 프로그램에서 10진 정수는 연속된 숫자로 표현합니다.
let num1 = 0;
let num2 = 10;
let num3 = 100;

// 뿐만 아니라 2진수, 8진수, 16진수도 정수 리터럴 방식으로 선언할 수 있습니다.
// 16진수 리터럴은 0x나 0X로 시작하며 그 뒤에 16진수 숫자를 씁니다. 16진수 숫자는 0부터 9까지의 숫자와 알파벳 a(A)부터 f(F)까지의 문자이며,
// 문자는 10부터 15까지를 나타냅니다.
let num4 = 0xff; // 15*16 + 15 => 255

// 0b(0B)를 앞에 붙여 표현하면 2진수, 0o(0O)를 앞에 붙여 표현하면 8진수로 정수를 표현할 수 있습니다.

// 2.1.2 부동 소수점 리터럴
// 부동 소수점 리터럴에는 소수점이 포함될 수 있습니다. 즉, 실수의 전통적 문법을 사용합니다.
// 값은 정수 부분, 소수점, 소수점 아래 부분을 순서대로 씁니다.
let pi = 3.14;

// 2.1.3 자바스크립트의 산술 연산
// 자바스크립트는 산술 연산자를 통해 숫자를 조작합니다.
// 흔히 우리가 알고 있는 사칙연산이 이에 해당합니다.

// 덧셈 +
// 뺄셈 -
// 곱셉 *
// 나눗셈 /
// 나머지 %

// 대신, 여기서 한 가지 주의할 점이 있습니다.
// 자바스크립트에서는 0으로 나눠도 에러가 발생하지 않습니다. 무한대 또는 음의 무한대를 반환할 뿐이라는 점입니다.
// 단, 0을 0으로 나누는 경우는 정의되어 있지 않으므로 이 결과는 특별한 값 NaN(숫자가 아님: Not a number)입니다.
// 무한대를 무한대로 나누는 것도 이에 해당합니다.
// 자바스크립트의 Infinity와 NaN은 전역 상수이며 이들은 Number 객체의 프로퍼티로도 존재합니다.

console.log(0 / 0); // NaN
console.log(Infinity / Infinity); // NaN
// NaN = Number.NaN은 값은 값이며 표현방법만 다를 뿐이라는 점입니다.

let num5 = 123;

console.log(typeof num5); // number
console.log(num5 + undefined); // NaN
console.log(typeof (num5 + undefined)); // number
console.log(typeof NaN); // number => NaN의 데이터 타입은 숫자이다.

// NaN(Not a number)이라는 데이터는 타입 자체는 숫자 데이터인데
// 특정한 숫자 값으로 표현할 수 없기 때문에 NaN으로 표시하여 반환합니다.
// 그래서 NaN이라는 값이 출력됐다는 것은 숫자 연산에 숫자가 아닌 다른 값이 포함되어 있을 가능성이 있다는 것 의미합니다.

// 2.2 문자열(텍스트)
// 자바스크립트에서 텍스트를 표현하는 타입은 문자열입니다. 이는 String이라고 표현합니다.

// 2.2.1 문자열 리터럴
// 자바스크립트 프로그램에서 문자열을 사용할 때는 그 문자열을 앞뒤가 맞는 작은 따옴표(''), 큰따옴표(""), 백틱(``) 쌍으로 묶으면 됩니다.

let str1 = ""; // 빈 문자열: 문자가 들어있지 않은 상태
let str2 = "test code";
let str3 = "3.14";
let str4 = `Hello, world!`;

// 백틱으로 감싼 문자열은 문자열 리터럴 안에 자바스크립트 표현식을 넣을 수 있습니다.
// 이러한 문법을 '보간'이라고 합니다.

let str5 = `Hello`;
let str6 = "world!~";
let str7 = `${str5} ${str6}`;
console.log(str7); // Hello world!~

// 백틱은 일반적인 문자열 리터럴 방식과는 약간의 차이가 있습니다.
// 임의의 자바스크립트 표현식을 넣을 수 있는 템플릿 리터럴이라고도 표현합니다.
// ${} 기호 안에 있는 것은 모두 자바스크립트 표현식으로 해석이 됩니다.
// 단, 중괄호 밖에 있는 것은 모두 일반적인 문자열 리터럴 텍스트입니다.

// 2.3 불리언(Boolean)
// 불리언 값은 참 또는 거짓을 표현합니다. 이 타입에는 단 두 가지 값만 존재합니다.
// 바로 예약어인 true와 false 입니다.

// 불리언은 조건문, 반복문 등에서 논리적 판단을 수행하는데 주로 사용됩니다.
// 앞서 말했듯이 true와 false라는 두 가지의 값만 사용하는 논리 데이터이며
// true는 긍정의 의미를, false는 부정의 의미를 가지고 있습니다.

const truthy = true;
const falsy = false;

if (truthy) {
    console.log("참 입니다.");
}

// 2.4 null과 undefined
// null은 값이 없음을 나타낼 때 사용하는 특별한 값입니다.
// null에 typeof 연산자를 사용하면 문자열 "object"를 반환하는데
// 이로 미루어 null은 "객체가 없다"는 것을 나타내는 특별한 객체 값이라고 볼 수 있습니다.
// null은 해당 타입의 유일한 멤버로 인식되며, 객체뿐 아니라 숫자나 문자열에도 "값이 없다"는 의미로 사용될 수 있다.

// 역사적 이유: 자바스크립트가 처음 설계될 때, 모든 객체의 타입을 확인하기 위한 방식이 있었고
// 그 과정에서 null이 객체로 본류된 것입니다. 이는 의도하지 않은 버그로 여겨지지만, 자바스크립트에서는 여전히 이 방식이 유지되고 있다.

// undefined 역시 값이 없음을 나타내는 값입니다. undefined는 좀 다른 의미에서 값이 없음을 나타냅니다.
// 이 값은 초기화되지 않은 변수의 값이며 존재하지 않는 객체 프로퍼티나 배열 요소에 접근했을 때 반환되는 값입니다.
// 또한, 값을 명시적으로 반환하지 않는 함수의 반환 값이며, 전달되지 않은 인자의 값이기도 합니다.
// undefined의 typeof 연산자를 적용하면 문자열 "undefined"를 반환합니다. undefined 역시 특별한 타입이고, 멤버는 그 하나뿐이라는 뜻입니다.

// null과 undefined의 차이점은
// undefined의 경우 시스템 레벨이고, 예측되지 않았거나 에러 비슷한 상황에서 값이 없는 것이라 간주하고
// null의 경우 프로그램 레벨이고, 정상적이거나 예측 가능한 상황에서 값이 없는 것이라 간주합니다.

// null: 존재하지 않는다. 값이 비어있다. 값을 알 수 없다. 명시적/의도적 표현
// 의도적으로 변수를 비우거나, 특정 상황에서 값이 없음을 나타내기 위해 사용된다.

let value1 = null;
console.log(value1); // null

// undefined: 변수가 선언되었지만, 값이 할당되지 않았음을 나타냅니다.
// 함수가 값을 반환하지 않거나, 객체에서 존재하지 않는 속성에 접근했을 경우에도 undefined가 반환됩니다.
let value2;
console.log(value2); // undefined

const user = {
    name: "개발자 9Diin",
    email: "9diin@gmail.com",
};
console.log(user.name); // 개발자 9Diin
console.log(user.email); // 9diin@gmail.com
console.log(user.password); // undefined
console.log(user.age); // undefined

// 2.5 배열 Array
// 자바스크립트에서 배열은 순서가 있는 데이터의 집합입니다. 인덱스를 사용하여 요소에 접근할 수 있습니다.
// 예제 코드를 한 번 살펴보도록 하겠습니다.

const fruits = new Array("사과", "바나나", "체리", "멜론", "수박", "딸기");
console.log(fruits); // ['사과', '바나나', '체리', '멜론', '수박', '딸기']

// new Array() 코드는 생성자 함수를 사용하여 배열을 생성하는 방법입니다.
// new Array()를 사용할 때, 인자로 숫자 하나를 넣으면 해당 길이의 빈 배열이 생성됩니다.
// 예를 들어, new Array(5)는 길이가 5인 빈 배열을 생성합니다.

const newArr = new Array(5);
console.log(newArr);

// 그러나 생성자 함수를 사용하여 배열 데이터를 생성하는 것 말고도, 더 간편하게 대괄호([])를 사용하여 만들 수 있습니다.
// 이를 리터럴 방식으로 배열을 생성한다 합니다. 배열 리터럴이라고 합니다. 아래 코드를 한 번 살펴보도록 하겠습니다.

/**
 * 배열 리터럴
 * 배열을 만드는 방식으로 대괄호([])라는 기호를 통해 만들었는데
 * 이것을 리터럴 방식으로 만들었다고 한다.
 */

const animals = ["호랑이", "사자", "코끼리", "원숭이", "악어"]; // 배열 리터럴 방식
console.log(animals); // ["호랑이", "사자", "코끼리", "원숭이", "악어"]
console.log(animals[1]); // 사자
console.log(animals.length); // 5
// 내가 해당 배열의 길이를 알고 있을 때만 특정 인덱스 번호를 통해 마지막 요소를 조회할 수 있다.
console.log(animals[4]); // 해당 배열의 가장 마지막 요소 조회 => 악어
// 내가 해당 배열의 길이를 모를 경우에는 어떻게 배열의 마지막 요소를 조회할 수 있을까?
console.log(animals[animals.length - 1]); // 해당 배열의 가장 마지막 요소 조회 => 악어
// 배열의 길이를 알던 모르던 상관없이 인덱스 번호가 0인 요소가 배열의 가장 첫 번째 요소이다.
console.log(animals[0]); // 해당 배열의 가장 첫 번째 요소 조회 => "호랑이"

// animals라는 상수 식별자에 리터럴 방식으로 배열 데이터를 주입시켰습니다.
// 해당 배열 안에는 요소의 타입이 문자열(String)인 데이터가 5개 있습니다.
// 이때, 배열의 번호는 0번부터 시작합니다. 따라서 0번 인덱스는 배열의 첫 번째 요소를 의미합니다.

// 배열의 길이를 측정할 땐, .length로 접근할 수 있습니다.

// 2.6 객체 Object
// 자바스크립트에서 객체란, 이름-값(key-value)의 쌍으로 구성된 데이터의 집합입니다.
// 키는 문자열 또는 심벌이고, 값은 어떤 데이터 타입이든 가능합니다.
// key는 속성 혹은 프로퍼티(property)라고도 하며, value는 값이라고 부르기도 한다.

// 데이터 이름을 붙여서 접근할 수 있습니다.
// 객체는 중복된 키를 허용하지 않습니다.

const newUser = new Object(); // => 생성자 함수를 통해 객체를 생성했다.

console.log("내부 속성-값을 추가 전: ", newUser); // { }

newUser.name = "개발자 9Diin";
newUser.email = "9diin@gmail.com";
newUser.job = "Programmer";

console.log("내부 속성-값을 추가 후: ", newUser); // { name: '개발자 9Diin', email: '9diin@gmail.com', job: 'Programmer' }

// 위 예시도 생성자를 활용한 객체 생성 방법입니다.
// new Object()를 사용하여 빈 객체를 생성한 후, 점 표기법(.)을 통해 속성을 추가하고 있습니다.
// 결과적으로 newUser라는 객체는 이름-값(key-value) 쌍의 형태로 저장됩니다.

/**
 * 객체 리터럴
 * 객체를 만드는 방식으로 중괄호({})라는 기호를 통해 만들었습니다.
 * 이것을 리터럴 방식으로 만들었다고 한다.
 *
 * 객체 데이터에서의 key는 고유하며, 순서는 중요하지 않다.
 * 단, 동일한 키 값일 경우 나중에 작성된 값으로 덮어 씌여진다.
 */

const member = {
    name: "9Diin",
    job: "Programmer",
    age: 100,
};
console.log(member); // { name: "9Diin", job: "Programmer", age: 100 }

// 점 표기법
console.log(member.name); // 9Diin
console.log(member.job); // Programmer
console.log(member.age); // 100
console.log(member.email); // undefined

// 대괄호 표기법
console.log(member["name"]); // 9Diin
console.log(member["job"]); // Programmer
console.log(member["age"]); // 100
console.log(member["email"]); // undefined

const userA = {
    name: "유저 A",
    age: 10,
    gender: "male",
};

const userB = {
    name: "유저 B",
    age: 20,
    brother: userA,
};

console.log(userA.name); // 유저 A
console.log(userB.brother); // { name: "유저 A", age: 10, gender: "male" }
console.log(userB.brother["age"]); // 10
console.log(userB["brother"].gender); // male

const family = [userA, userB];
console.log(family);
console.log(family[0].gender); // male
console.log(family[1]["name"]); // 유저 B,

// 객체 리터럴 방식도 배열 리터럴 방식과 마찬가지로 객체를 만드는 방식을 중괄호({})라는 기호를 통해 만드는 것을 말합니다.
// 이것 또한 객체 리터럴 방식으로 만들었다고 말합니다.