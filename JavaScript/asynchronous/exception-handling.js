function a() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("A");
            resolve();
        }, 1000);
    });
}

async function test() {
    await a();
    console.log("B");
}
test();

function test() {
    const promise = a();

    promise.then(() => {
        console.log("B");
    });

    // 동일 코드
    a().then(() => {
        console.log("B");
    });
}
test(); // B => 1초 뒤에 => A

function a1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("A1");
            resolve();
        }, 1000);
    });
}

function b1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("B1");
            resolve();
        }, 1000);
    });
}

function c1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("C1");
            resolve();
        }, 1000);
    });
}

function d1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("D1");
            resolve();
        }, 1000);
    });
}

function test2() {
    a1().then(() => {
        b1().then(() => {
            c1().then(() => {
                d1().then(() => {
                    console.log("Done!");
                });
            });
        });
    });
}
test2();

function test3() {
    a()
        .then(() => {
            return b1();
        })
        .then(() => {
            return c1();
        })
        .then(() => {
            return d1();
        })
        .then(() => {
            console.log("Done!");
        });
}
test3();

function test4() {
    a1()
        .then(() => b1())
        .then(() => c1())
        .then(() => d1())
        .then(() => {
            console.log("Done!");
        });
}
test4();

function a(number) {
    return new Promise((resolve, reject) => {
        if (number > 5) {
            reject(`입력받은 number: ${number} -> number의 값이 5보다 큽니다.`); // 거부
            return; // 함수를 종료 시키기 위해
        }
        setTimeout(() => {
            console.log("A");
            resolve("성공!"); // 이행
        }, 1000);
    });
}

function test5() {
    a(1000)
        .then((res) => {
            console.log("res: ", res);
            console.log("resolve 동작!");
        })
        .catch((error) => {
            console.log("error: ", error);
            console.log("reject 동작!");
        })
        .finally(() => {
            console.log("Done!");
        });
}
test5();

async function test6() {
    try {
        await a(100);
        console.log("resolve 동작!");
    } catch (error) {
        console.log("error: ", error);
        console.log("reject 동작!");
    } finally {
        console.log("Done!"); // resolve, reject 상관없이 무조건 실행
    }
}
test6();
