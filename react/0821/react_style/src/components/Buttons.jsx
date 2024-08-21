import styled from "styled-components";

const Button = styled.button`
  padding: 10px;
  color: #fff;
  background-color: royalblue;
`;

// const StyledButton = styled.button`
//   background: ${(props) => (props.color === "danger" ? "red" : "black")};
//   width: ${(props) => (props.fullWidth ? "100%" : "50%")};
//   &:hover {
//     transform: scale(${(props) => (props.size === "large" ? "1.5" : "1")});
//   }
// `;

const ButtonStyle2 = styled(Button)`
  color: #000;
  border: 0;
  border-radius: 10px;
  font-weight: bold;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.3);
`;
const ButtonStyle3 = styled(Button)`
  background-color: lightgreen;
  font-weight: bold;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
`;
export { Button, ButtonStyle2, ButtonStyle3 };
