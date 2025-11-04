import { useState } from "react";

function App() {
    // useState => Hooks
    // useState는 가장 기본적인 Hook이며, 함수 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해줍니다.
    // => 이 함수가 호출되면 배열을 반환합니다. => 첫 번째 요소는 상태 값, 두 번째 요소는 상태를 설정하는 함수
    // => useState 함수의 파라미터(매개변수)에는 상태의 기본값을 넣어 줍니다.

    // 리액트는 상태 값이 변경되면 자동으로 이를 감지해 화면을 다시 렌더링합니다.

    const [value, setValue] = useState(0);
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");

    const increment = () => setValue(value + 1);
    const decrement = () => setValue(value - 1);

    const onChangeName = (event) => setName(event.target.value);
    const onChangeNickname = (event) => setNickname(event.target.value);

    // ====================================================================================================

    // 상세 페이지 접근 시, 조회수 1 증가
    const [view, setView] = useState(0); // 조회수
    const handleViewCount = () => setView(view + 1);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [agreed, setAgreed] = useState(false);

    const handleSumbit = () => {
        console.log(email);
        console.log(password);
        console.log(agreed);

        if (!email || !password || !agreed) {
            alert("누락된 값이 있습니다.");
            return;
        }
        // 실제 회원가입 로직 동작
    };

    return (
        <div>
            <p>
                현재 카운터 값은: <b>{value}</b>
            </p>
            <button onClick={increment}>1 증가</button>
            <button onClick={decrement}>1 감소</button>

            <div>
                <input type="text" value={name} onChange={onChangeName} />
                <input type="text" value={nickname} onChange={onChangeNickname} />
            </div>

            <div>
                <b>이름: {name}</b>
                <b>닉네임: {nickname}</b>
            </div>

            <div>
                <p>조회수: {view}</p>
                <button onClick={handleViewCount}>버튼 - 조회수 증가</button>
            </div>

            <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            <input type="checkbox" value={agreed} onChange={(event) => setAgreed(event.target.checked)} />

            <button onClick={handleSumbit}>회원가입</button>
        </div>
    );
}

export default App;
