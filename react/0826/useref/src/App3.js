import { useRef, useState } from "react";

export default function Stopwatch() {
  // 시작한 시간
  const startTime = useRef(0);

  // 인터벌 함수의 id
  const intervalId = useRef(null);

  // 경과 시간
  const [secondPassed, setSecondPassed] = useState(0);

  //실행 상태
  const [isRunning, setIsRunning] = useState(false);

  function handleStart() {
    // 현재 시간 설정.
    // 흘러간 시간을 빼서 멈췄던 상태에서 다시 시작하도록 합니다.
    startTime.current = Date.now() - secondPassed;

    intervalId.current = setInterval(() => {
      // 흘러간 시간을 계산합니다.
      setSecondPassed(Date.now() - startTime.current);
    }, 10);
    setIsRunning(true);
  }

  function handleStop() {
    clearInterval(intervalId.current);
    setIsRunning(false);
  }

  function handleReset() {
    handleStop();
    setSecondPassed(0);
  }

  return (
    <>
      <h1>
        Time passed:
        <span>{(secondPassed / 1000).toFixed(3)}</span>
      </h1>
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>reset</button>
    </>
  );
}
