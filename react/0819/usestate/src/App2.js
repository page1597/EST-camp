import React, { useState } from "react";
import "./App.css";
import ButtonList from "./components/buttonList";
import InfoBox from "./components/infoBox";

export default function App2() {
  const [mood, setMood] = useState("어때요?");

  return (
    <section>
      <h2>오늘의 기분을 선택해주세요 😀</h2>
      <ButtonList setMood={setMood} mood={mood} />
      <InfoBox mood={mood} />
    </section>
  );
}
