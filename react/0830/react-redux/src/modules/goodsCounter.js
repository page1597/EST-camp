// 액션 생성 함수
export const addNumber = () => {
  return { type: "PLUS" };
};

export const minusNumber = () => {
  return { type: "MINUS" };
};

const initialState = {
  stock: 5,
  goods: 0,
};

const goodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLUS":
      return {
        ...state,
        stock: state.stock - 1,
        goods: state.goods + 1,
      };
    case "MINUS":
      return {
        ...state,
        stock: state.stock + 1,
        goods: state.goods - 1,
      };

    default:
      return state;
  }
};
export default goodsReducer;
