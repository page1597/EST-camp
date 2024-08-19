import { useState } from "react";

function App() {
  const [isLike, setIsLike] = useState(false);

  function clickLike() {
    setIsLike(!isLike);
  }

  return (
    <div style={{ border: "solid 1px", width: "500px" }}>
      <button onClick={clickLike}>like</button>{" "}
      <span>{isLike ? "like" : ""}</span>
    </div>
  );
}

export default App;
