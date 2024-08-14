import React from "react";
import Time from "./components/Time";
import Licat from "./components/Licat";
import Resume from "./components/Resume";
import ColorText from "./components/ColorText";
function App4() {
    let like = 0;

    function clickLike() {
        
    }
  return (
    <div>
      <Licat name="gary" />
      <Time />
      <Resume
        hello="안녕하세요"
        name="개리"
        hobby="게임"
        food="고기"
        color="blue"
      />
      <ColorText color="red"></ColorText>
      <ColorText color="green"></ColorText>
      <ColorText color="Blue"></ColorText>
    </div>
  );
}
export default App4;
