import React from "react";
import Question from "./App2/Question";
import "./App2/App2.css"; // 더 나중에 적용

const App2 = () => {
  return (
    <>
      <nav className="box">
        <ul>
          <li id="detail" className="text">
            상세정보
          </li>
          <li id="qa" className="text">
            Q&A
          </li>
          <li id="review" className="text">
            Review
          </li>
        </ul>
      </nav>
      <Question />
    </>
  );
};

export default App2;
