import { useState, useEffect, useCallback } from "react";

export default function useScroll() {
  const [isBottom, setIsBottom] = useState(false);

  const handleScroll = useCallback(() => {
    // 문서의 전체 높이와 스크롤 위치를 계산하여 페이지 바닥에 도달했는지 확인
    setIsBottom(
      document.documentElement.scrollHeight <=
        document.documentElement.scrollTop + window.innerHeight
    );
  }, []);

  useEffect(() => {
    // 스크롤 이벤트 리스너를 추가
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 정리
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return isBottom;
}
