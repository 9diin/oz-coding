// 1. JSON이란 무엇일까?
// 자바스크립트의 객체 표기법

// 우리 프로그램이 다루는 데이터(data)는 사람이 보기에는 "정보"이지만, 컴퓨터에게는 그저 "문자"에 불과합니다.
// 예를 들어, 우리가 "이름은 홍길동이고, 나이는 20살이다."라는 정보를 프로그램에 표현하고 싶다면 이렇게 쓸 수 있습니다.

// const response = await fetch("외부 API 주소");
// const myData = await response.json();

// console.log(myData); // => JSON이라는 확장자를 가진 파일은 사실 문자 데이터입니다. => 자동으로 변환되서 출력이 될 수 있다.

// fetch()는 파일을 가져오는 함수이고,(외부에서 데이터를 가져오는 함수이고)
// .json()은 그 파일 안의 문자 데이터를 자동으로 객체로 변환해 줍니다.

const user = {
    name: "홍길동",
    age: 20,
    emails: ["gildong@gmail.com", "test@test.com"],
};

console.log("user: ", user);

// 이건 자바스크립트에서 쓰는 객체(Object) 형태입니다.
// 하지만 이 데이터를 다른 프로그램이나 서버에 보내려면 문제가 생깁니다.
// 다른 언어(예: Python, Java)는 자바스크립트 문법을 그대로 이해하지 못해기 때문이죠.

// 그래서 등장하는 것이 바로 JSON(JavaScript Object Notation)입니다.
// 이름은 길지만, 뜻은 간단합니다.

// JSON은 "자바스크립트 객체 표기법을 흉내 낸 문자 데이터 형식"입니다.
// 즉, 객체처럼 생겼지만, 사실은 문자열(string)이라는 뜻입니다.

const str = JSON.stringify(user);
console.log("str: ", str);
console.log("typeof str: ", typeof str);

const obj = JSON.parse(str);
console.log("obj: ", obj);

// JSON은 자바스크립트 객체를 문자열 형태로 표현한 데이터 형식이다.
// 덕분에 서로 다른 프로그램이나 언어가 데이터를 주고받을 수 있다.

// 2. 스토리지(Storage)란 무엇일까?

// 2.1 먼저, 왜 이런 게 필요할까?
// 웹 사이트는 단순히 "화면만 보여주는 곳"이 아니라, 사용자 정보를 기억해야 하는 공간입니다.

// 예를 들어,
// 내가 로그인했는지?
// 라이트 모드인지, 다크 모드인지 설정했는지?
// 장바구니에 어떤 상품이 담겼는지?

// 이런 정보를 브라우저가 기억해야
// 페이지를 새로고침하거나 닫았다 열어도 그대로 유지됩니다.

// 그런데 이걸 서버에 매번 저장하면 느려지고,
// 로그인하지 않은 사용자 정보는 굳이 서버에 저장할 필요도 없습니다.

// 그래서 생긴 게 바로
// 로컬 스토리지(Local Storage)와 세션 스토리지(Sesstion Storage)입니다.

// 2.2 로컬 스토리지 (Local Storage)
// 브라우저가 사용자의 컴퓨터 안에 데이터를 영구적으로 저장하는 공간
// 쉽게 말하면 로컬 스토리지는 "브라우저 전용 미니 창고"라고 생각하면 됩니다.
// 브라우저를 꺼도, 컴퓨터를 꺼도 데이터가 남아있습니다.

// 데이터 저장
// localStorage.setItem("저장소 이름", "값")
localStorage.setItem("userName", "9Diin");
localStorage.setItem("user", JSON.stringify(user));

// 데이터 꺼내기
const username = localStorage.getItem("userName");
console.log(username); // 9Diin

// 데이터 삭제
// localStorage.removeItem("user");

// 전부 다 지우기 => 로그아웃 시에 많이 활용
// localStorage.clear();

// JSON과 함께 자주 쓰이는 이유
// 로컬 스토리지는 문자열만 저장할 수 있습니다.
// 그런데 보통 우리는 객체 형태의 데이터를 다룹니다.
// 그래서 JSON.stringify()와 JSON.parse()를 함께 사용합니다.

const user2 = {
    name: "9Diin",
    age: 33,
};

// 객체 -> 문자열로 변환해서 저장
localStorage.setItem("user2", JSON.stringify(user2));

const data = JSON.parse(localStorage.getItem("user2")); // => string => object

console.log(data.name); // 9Diin
console.log(data.age); // 33

// 2.3 세션 스토리지
// 브라우저가 "현재 탭(창)"이 열려 있는 동안만 유지되는 임시 저장소
// 세션 스토리지는 잠깐 쓰는 메모장입니다.
// 페이지를 닫거나 새 탭으로 열면 데이터가 사라집니다.

// 데이터 저장
sessionStorage.setItem("tempData", "Hello");

// 데이터 가져오기
console.log(sessionStorage.getItem("tempData"));

// 페이지 닫으면 데이터 사라짐
