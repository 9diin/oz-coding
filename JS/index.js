// 프로그래밍이란?
// 프로그래밍이란 컴퓨터에게 실행을 요구하는 일종의 커뮤니케이션입니다. 이를 위해 먼저 무엇을 실행하고 싶은지 정의할 필요가 있습니다.
// 다시 말해, 프로그래밍에서 앞서 해결해야 할 문제(요구사항)를 명확히 이해한 후 적절한 문제 해결 방안을 정의할 필요가 있습니다.

// 이때 요구되는 것이 문제 해결 능력입니다.
// 문제 해결 능력을 알고리즘과 동일시할 필요는 없습니다.
// 문제 해결 능력 > 알고리즘

// 즉, 프로그래밍이란 0과 1밖에 알지 못하는 기계가 실행할 수 있을 정도로 정확하고 상세하게 요구사항을 설명하는 작업
// 이때 필요한 것이 컴퓨팅사고(Computational thinking)입니다.

// 이처럼 문제 해결능력을 바탕으로 정의된 문제 해결 방안은 컴퓨터에게 전달되어야 합니다.
// 이때 명령을 수행할 주체는 컴퓨터입니다.
// 따라서 사람이 이해할 수 있는 자연어가 아니라 컴퓨터가 이해할 수 있는 언어, 즉 기계어로 명령을 전달해야 합니다.

// 기계어로 직접 명령을 전달하는 것을 대신할 가장 유용한 대안은 사람이 이해할 수 있는 약속된 구문(문법)으로 구성된 프로그래밍 언어를 사용해
// 프로그램을 작성한 후, 그것을 컴퓨터가 이해할 수 있는 기계어로 변환하는 일종의 번역기를 이용하는 것입니다.
// 이 일종의 번역기를 컴파일러(Compiler) 혹은 인터프리터(Interpeter)라고 합니다.

// 사람 ===============> 컴파일러 혹은 인터프리터 ===============> 컴퓨터
//       프로그래밍 언어                             기계어

const insertBtn = document.querySelector(".input-box__btn");
const inputField = document.querySelector(".input-box__input");
const listContainer = document.querySelector(".list"); // 할 일 목록이 표시될 영역

let todos = JSON.parse(localStorage.getItem("todos")) || []; // 기존 todos를 로드하거나 빈 배열로 초기화

// 할 일을 화면에 출력하는 함수
function renderTodos() {
    listContainer.innerHTML = ""; // 기존 목록 초기화

    if (todos.length === 0) {
        const emptyMessage = document.createElement("p");

        emptyMessage.classList.add("list__empty");
        emptyMessage.textContent = "등록된 TO DO TASK가 없습니다.";

        listContainer.appendChild(emptyMessage);

        return; // 이후 코드 실행하지 않음
    }

    todos.forEach((todo, index) => {
        const listItem = document.createElement("li");
        listItem.classList.add("list__item");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("list__item__checkbox");

        const todoText = document.createElement("p");
        todoText.classList.add("list__item__todo");
        todoText.textContent = todo;

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("list__item__btn");
        deleteBtn.innerHTML = '<i data-lucide="x"></i>';

        deleteBtn.addEventListener("click", () => {
            todos.splice(index, 1);
            localStorage.setItem("todos", JSON.stringify(todos));

            renderTodos();
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(todoText);
        listItem.appendChild(deleteBtn);

        listContainer.appendChild(listItem);
    });

    lucide.createIcons();
}

// 페이지가 로드되면 할 일 목록을 렌더링
renderTodos();

// + 버튼 클릭 시, 할 일을 추가하고 로컬스토리지에 저장
insertBtn.addEventListener("click", () => {
    const inputValue = inputField.value.trim();

    if (!inputValue) {
        alert("테스크를 입력하세요.");
        return; // 입력 값이 없으면 함수를 종료
    }

    // 중복을 피하고, 입력된 할 일을 todos 배열에 추가
    if (!todos.includes(inputValue)) {
        todos.push(inputValue); // 새로운 할 일을 todos 배열에 추가
        localStorage.setItem("todos", JSON.stringify(todos)); // todos 배열을 로컬스토리지에 저장
    } else {
        alert("이 할 일은 이미 존재합니다.");
    }

    inputField.value = ""; // 버튼 클릭 후 입력 필드 초기화
    renderTodos();
});
