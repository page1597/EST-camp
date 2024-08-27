import { useState, useMemo } from "react";

function payload() {
  let s = 0;
  for (let i = 0; i < 1000000000; i++) {
    s += i;
  }
  return s;
}

function App() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const result = useMemo(
    () => {
      return payload();

      // payload 값만 가지고 와서 기억하고 있다가
      // 필요할 때마다 가져다 쓰기 때문에 부하가 걸리지 않는다.
      // 최초 렌더링될 때만 실행되고 그 다음부터는 부하가 걸리지 X [] (그때는 느림)
    },
    [
      // countTwo
    ]
  );
  // let result = payload();

  // +)
  // useMemo는 랜더링되는 와중에 실행
  // useEffect는 렌더링 끝나고 실행

  const handleCountUp = (e) => {
    setCount(count + 1);
    console.log(count);
  };

  const handleCountUpTwo = (e) => {
    setCountTwo(countTwo + 1);
    console.log(countTwo);
  };

  return (
    <div>
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>UP!</button>
      <div>{countTwo}</div>
      <button onClick={handleCountUpTwo}>UP!</button>
    </div>
  );
}
export default App;
