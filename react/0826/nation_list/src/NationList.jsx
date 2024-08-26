import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const nations = [];

export default function NationList() {
  const [selectedLoc, setSelectedLoc] = useState("");
  const [nationList, setNationList] = useState(nations);
  console.log(`http://localhost:3000/nations?loc=${selectedLoc}`);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/nations?loc=${selectedLoc}`
      );

      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      console.log(data);
      setNationList(data);
    } catch (error) {
      console.error(error);
    }
    // fetch("http://localhost:3000/nations")
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("네트워크 통신에 문제가 있습니다.");
    //     }
    //     return response.json();
    //   })
    //   .then((json) => {
    //     console.log(json);
    //     setNationList(json);
    //   })
    //   .catch((error) =>
    //     console.error("데이터를 가져오는데 문제가 발생했습니다.", error)
    //   );
  };

  useEffect(() => {
    fetchData();
  }, [selectedLoc]);

  const handleButtonClick = (e) => {
    const { value } = e.target;
    setSelectedLoc(value);
  };

  return (
    <Item>
      <h2>나라 목록</h2>
      <ul>
        {nationList.map((nation) => (
          <li key={nation.id}>
            <h3>{nation.title}</h3>
            <span>{nation.population}</span>
          </li>
        ))}
      </ul>
      <Button value="" onClick={handleButtonClick}>
        전체 목록
      </Button>
      <Button value="europe" onClick={handleButtonClick}>
        유럽 목록
      </Button>
    </Item>
  );
}

const Item = styled.div`
  margin: 60px auto;
  max-width: 300px;
  h3 {
    margin: 0 0 20px 0;
  }
  ul {
    list-style: none;
    padding: 10px;
  }

  li {
    border: 1px solid lightgray;
    padding: 10px;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    margin: 20px 0;
  }
`;
const Button = styled.button`
  background: none;
  border-radius: 4px;
  padding: 10px;
  margin-left: 10px;
  cursor: pointer;
`;
