import { useState } from "react";
import { useEffect } from "react";

export default function useScroll() {
  const [isBottom, setIsBottom] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      //   console.log("scrolling...");
      //   console.log(document.documentElement.scrollTop); // 얼마나 스크롤이 되었는지
      setIsBottom(
        document.documentElement.offsetHeight <=
          document.documentElement.scrollTop + window.innerHeight
      );
    });
    // console.log(document.documentElement.offsetHeight);
    // console.log(window.innerHeight);
  }, []);
  return isBottom;
}
