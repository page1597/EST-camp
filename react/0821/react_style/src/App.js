import React from "react";
import styled from "styled-components";
import { Button, ButtonStyle2, ButtonStyle3 } from "./components/Buttons";
import StyledPropsButton from "./components/StyledPropsButton";
const ContentDiv = styled.div`
  margin: 40px;
`;

const ContentH2 = styled.h2`
  color: ${(props) => (props.name === "hello" ? "red" : "black")};
  width: 200px;
  margin: 0 auto;
  text-align: center;
`;

const App = () => {
  return (
    <ContentDiv>
      <ContentH2 name="hello">Q&A</ContentH2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
        corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
        aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
        Nemo, ullam.
      </p>
      <Button>버튼</Button>
      <ButtonStyle2>버튼2</ButtonStyle2>
      <ButtonStyle3>버튼3</ButtonStyle3>
      {/* <StyledPropsButton color="danger" size="large" fullWidth>
        hello
      </StyledPropsButton> */}
      <StyledPropsButton />
    </ContentDiv>
  );
};

export default App;
