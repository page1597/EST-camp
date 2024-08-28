import { useEffect } from "react";
import useScroll from "./Hook/useScroll";
import InputComponent from "./inputComponent";
import SomethingComponent from "./SomethingComponent";
function App() {
  const isBottom = useScroll();
  console.log(isBottom);
  useEffect(() => {
    console.log("abcde1abc12abb".split(""));
    const a = "abcde1abc12abb".split("");
    const result = a.reduce((sum, el) => sum + (parseInt(el) || 0), 0);
    console.log(result);
  }, []);

  return (
    <div style={{ height: "200vh" }}>
      <InputComponent />
      <SomethingComponent />
    </div>
  );
}
export default App;
