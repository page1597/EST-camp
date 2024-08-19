import { useState } from "react";
import Homepage from "./components/Homepage";
import Login from "./components/Login";

function App() {
  const [isRightUser, setIsRightUser] = useState(false);

  return (
    <div>
      {!isRightUser ? <Login setIsRightUser={setIsRightUser} /> : <Homepage />}
    </div>
  );
}

export default App;
