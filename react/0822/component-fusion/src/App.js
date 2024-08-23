import styled from "styled-components";
import PriceFormatter from "./PriceFormatter";
const CardDiv = styled.article`
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 400px;
  justify-content: center;
  align-items: center;
`;

const CardImg = styled.img`
  width: 230px;
`;

const ContCard = (props) => {
  return <CardDiv>{props.children}</CardDiv>;
};
const ProductImage = (props) => {
  return <CardImg src={props.src} alt={props.alt}></CardImg>;
};
const ProductTitle = (props) => {
  return <h2>{props.children}</h2>;
};
const ProductSubTitle = (props) => {
  return <h3>{props.children}</h3>;
};
const ProductDescription = (props) => {
  return <p>{props.children}</p>;
};
const ProductPrice = ({ price, currencyCode }) => {
  // currencyCode: 화폐코드
  return <PriceFormatter price={price} currencyCode={currencyCode} />;
};

function App() {
  return (
    <>
      <ContCard>
        <ProductImage
          src={"https://picsum.photos/id/237/200/300"}
          alt={"검은 강아지"}
        />
        <ProductTitle>검은 강아지를 입양하세요</ProductTitle>
        <ProductSubTitle>
          엉청 얌전하답니다. 우리 개는 안물어요!
        </ProductSubTitle>
        <ProductDescription>
          lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
          lorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsumlorem ipsum
        </ProductDescription>
        <ProductPrice price={1000} currencyCode="GBP" />
      </ContCard>
    </>
  );
}

export default App;
