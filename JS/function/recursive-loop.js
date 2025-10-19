// 2. 재귀 함수
// 재귀란, 함수 내부에서 자기 자신을 다시 호출하는 프로그래밍 기법입니다.
// 이는 반복되는 문제를 해결할 때 유용합니다. 마치 거울을 서로 마주보고 있을 때 끝없이 상이 비치는 것과 같습니다.

// 가장 중요한 주의사항: 종료 조건
// 재귀 호출은 무한히 반복될 수 있으므로, 함수가 멈출 수 있는 조건식(Base Case)을 반드시 작성해야 합니다.
// 이 조건이 없으면 프로그램이 멈추지 않고, 시스템 메모리를 초과하여 오류(Stack Overflow)가 발생합니다.

let i = 0;

const recursiveLoop = () => {
    console.log(`현재 i 값: ${i}`); // => 0, 1, 2, 3, 4

    i += 1; // => 1, 2, 3, 4 ,5

    // console.log(i);
    // 종료 조건: i가 5보다 작을 때만 자기 자신을 다시 호출합니다.
    if (i < 5) {
        recursiveLoop();
    }
    // i가 5가 되는 순간, 더 이상 호출하지 않고 함수가 종료됩니다.
};

recursiveLoop(); // 출력: 현재 i값: 0 부터 4 까지 순서대로 출력 후 종료

// 재귀는 위계 구조(트리, 리스트 등)에서 뿌리(Root)를 찾아 올라갈 때 매우 강력합니다.
// 제시된 getRootUser 예제가 바로 이 경우입니다.

const userA = { name: "A", parent: null };
const userB = { name: "B", parent: userA };
const userC = { name: "C", parent: userB };
const userD = { name: "D", parent: userC };

const getRootUser = (user) => {
    // 종료 조건: user.parent가 null인 경우 (가장 상위 요소)
    if (user.parent) {
        // 재귀 호출: 부모 속성이 있으면, 부모 속성을 인자로 다시 함수 호출
        return getRootUser(user.parent);
    }
    // Root에 도달하면 해당 user 객체를 반환하며 함수 체인 종료
    return user;
};

const root = getRootUser(userD);
console.log(`가장 최상위 사용자: ${root.name}`); // A => 가장 최상위 사용자

// 이 함수는 user.parent가 null이 될 때까지
// (즉, 가장 상위 사용자 A에 도달할 때까지) 자기 자신을 반복해서 호출하며 위로 거슬러 올라가는 방식으로 작동합니다.
