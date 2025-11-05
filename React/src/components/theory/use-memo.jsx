import { useMemo, useState } from "react";

const getAverage = (numbers) => {
    console.log("평균 값을 계산 중입니다.");

    if (numbers.length === 0) return 0;

    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    return sum / numbers.length;
};

function App() {
    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState("");

    // 등록
    const handleInsert = () => {
        // concat: Array 인스턴스의 concat 함수는 두 개 이상의 배열을 병합하는데 사용됩니다.
        // 이 메서드는 기존 배열을 변경하지 않고, 새로운 배열을 반환합니다.

        // parseInt: 문자열 인자를 파싱하여 특정 진수(수의 진법체계에서 기준이 되는 값)의 정수를 반환합니다.
        const newList = list.concat(parseInt(inputValue));
        setList(newList); // number[]
        setInputValue("");
    };

    const average = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
            <button onClick={handleInsert}>등록</button>

            <ul>
                {list.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>

            <div>
                <b>평균 값: {average}</b>
            </div>
        </div>
    );
}

export default App;
