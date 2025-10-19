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

function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("A");
            resolve();
        }, 1000);
    });
}

function b() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("B");
            resolve();
        }, 1000);
    });
}

function c() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("C");
            resolve();
        }, 1000);
    });
}

function d() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("D");
            resolve();
        }, 1000);
    });
}

function test() {
    a().then(() => {
        b().then(() => {
            c().then(() => {
                d().then(() => {
                    console.log("Done!");
                });
            });
        });
    });
}

function test() {
    a()
        .then(() => {
            return b(); // 결국, Promise 약속의 객체를 반환하기 때문에
        })
        .then(() => {
            return c();
        })
        .then(() => {
            return d();
        })
        .then(() => {
            console.log("Done!");
        });
}

function test() {
    a()
        .then(() => b())
        .then(() => c())
        .then(() => d())
        .then(() => {
            console.log("Done!");
        });
}

function a(number) {
    return new Promise((resolve, reject) => {
        if (number > 5) {
            reject(); // 거부
            return; // 함수를 종료 시키기 위해
        }
        setTimeout(() => {
            console.log("A");
            resolve(); // 이행
        }, 1000);
    });
}

function test() {
    a(10)
        .then(() => {
            console.log("resolve");
        })
        .catch(() => {
            console.log("reject");
        })
        .finally(() => {
            console.log("Done"); // resolve, reject 상관없이 무조건 실행
        });
}
test();

async function test() {
    try {
        await a(1);
        console.log("resolve");
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Done");
    }
}
