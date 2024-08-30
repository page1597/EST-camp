// 액션 생성 함수
export const sale = () => {
  return { type: "SALE" };
};

export const soldOut = () => {
  return { type: "SOLD_OUT" };
};

const initialState = {
  message: "판매중입니다.",
};

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SALE":
      return {
        ...state,
        message: "판매중입니다.",
      };
    case "SOLD_OUT":
      return {
        ...state,
        message: "품절되었습니다.",
      };

    default:
      return state;
  }
};
export default stockReducer;
