function a() {
    // promise: 약속의 객체
    return new Promise(function (resolve) {
        setTimeout(() => {
            console.log("A");
            resolve("안녕하세요!"); // 기존의 callback(): 특정한 위치에서 실행 위치를 보장합니다.
        }, 1000);
    });
}

function b() {
    console.log("B");
}

async function test() {
    // a라는 함수가 실행될 때, promise 객체가 반환됩니다. (생성자 함수로 만들어진 인스턴스가 return 키워드로 반환) 즉, 반환된 내용을 Promise라는 약속의 객체
    // Promise라는 약속의 객체가 반환이 되면 await 키워드를 붙일 수 있습니다. resolve라는 매개변수가 실행될 때까지 기다릴 수 있습니다.
    // resolve가 호출되면 넘어간다.
    await a();

    const res = await a();
    console.log(res); // 안녕하세요! => resolve()에 인자로 값을 넣으면 반환이 된다. 그 값은 res에 할당됩니다.

    b();
}

test();

function a1() {
    // promise: 약속의 객체
    return new Promise(function (resolve) {
        setTimeout(() => {
            console.log("A1");
            resolve("안녕하세요! - 01"); // 기존의 callback(): 특정한 위치에서 실행 위치를 보장합니다.
        }, 1000);
    });
}

function b1() {
    // promise: 약속의 객체
    return new Promise(function (resolve) {
        setTimeout(() => {
            console.log("B1");
            resolve("안녕하세요! - 02"); // 기존의 callback(): 특정한 위치에서 실행 위치를 보장합니다.
        }, 1000);
    });
}

function c1() {
    // promise: 약속의 객체
    return new Promise(function (resolve) {
        setTimeout(() => {
            console.log("C1");
            resolve("안녕하세요! - 03"); // 기존의 callback(): 특정한 위치에서 실행 위치를 보장합니다.
        }, 1000);
    });
}

function d1() {
    // promise: 약속의 객체
    return new Promise(function (resolve) {
        setTimeout(() => {
            console.log("D1");
            resolve("안녕하세요! - 04"); // 기존의 callback(): 특정한 위치에서 실행 위치를 보장합니다.
        }, 1000);
    });
}

async function test2() {
    await a1();
    await b1();
    await c1();
    await d1();

    const h1 = await a1();
    const h2 = await b1();
    const h3 = await c1();
    const h4 = await d1();

    console.log("완료");

    console.log("h1: ", h1);
    console.log("h2: ", h2);
    console.log("h3: ", h3);
    console.log("h4: ", h4);
}
test2(); // 실행

// 회원가입
const signUp = async (id, password, serviceAgreed, privacyAgreed) => {
    // 필수 값 체크
    if (!id || !password || !serviceAgreed || !privacyAgreed) {
        return;
    }

    const res = await signUpApi(id, password, serviceAgreed, privacyAgreed); // => 회원가입 완료 후 완료되었음 서버에서 반환 값을 받음 함수

    if (res && res.statsCode === 201) {
        // 회원가입 완료되었음을 의미
        moveToLoginPage();
    }
};
