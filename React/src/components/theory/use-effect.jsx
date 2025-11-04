import { useEffect, useState } from "react";

function App() {
    // useEffect
    // useEffect는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 훅(Hook)입니다.

    // - 마운트 될 때만, 실행하고 싶을 때
    // 마운트란, 리액트 DOM에 우리가 return 키워드 하단에 작성한 HTML, CSS 영역 즉, UI가 붙었을 때
    // => 우리가 HTML을 자바스크립트로 통제 기능할 때
    // => useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링 될 때만 실행하고,
    //    업데이트 될 때는 실행하지 않으려면, 함수에 두 번째 파라미터(매개변수)로 빈 배열을 넣어주면 됩니다.

    // - 특정 값이 업데이트 될 때만, 실행하고 싶을 때
    // useEffect를 사용할 때, 특정 값이 변경될 때만 호출하고 싶을 경우도 있습니다.
    // useEffect의 두 번째 파라미터(매개변수)로 전달되는 배열 안에 검사하고 싶은 값을 넣어주면 됩니다.

    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");

    useEffect(() => {
        // 해당 컴포넌트가 최초 렌더링이 될 때, useEffect가 실행이 되고,
        // 우리가 선언한 state 즉, 상태 값이 변화하더라도 useEffect가 실행되는 것으로 보아
        // state 즉, 상태 값이 변화하면 해당 컴포넌트는 재랜더링이 된다는 것을 알 수가 있다.
        console.log("컴포넌트가 렌더링 될 때마다 특정 작업을 수행합니다.");
        console.log("name: ", name);
        console.log("nickname: ", nickname);
    }, []);

    useEffect(() => {
        console.log("name이라는 상태 값이 변할 경우에는 수행합니다.");
        console.log("name: ", name);
        console.log("nickname: ", nickname);
    }, [name]);

    useEffect(() => {
        console.log("nickname이라는 상태 값이 변할 경우에는 수행합니다.");
        console.log("name: ", name);
        console.log("nickname: ", nickname);
    }, [nickname]);

    const onChangeName = (event) => setName(event.target.value);
    const onChangeNickname = (event) => setNickname(event.target.value);

    return (
        <div>
            App.jsx 파일입니다.
            <input type="text" value={name} onChange={onChangeName} />
            <input type="text" value={nickname} onChange={onChangeNickname} />
            <div>
                <b>이름: {name}</b>
                <br />
                <b>닉네임: {nickname}</b>
            </div>
        </div>
    );
}

export default App;
