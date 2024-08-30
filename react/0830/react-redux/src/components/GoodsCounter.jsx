import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { addNumber, minusNumber } from "../modules/goodsCounter";
import { sale, soldOut } from "../modules/stockCounter";

export default function GoodsCounter() {
  const { stock, goods } = useSelector((state) => {
    return {
      stock: state.goodsReducer.stock,
      goods: state.goodsReducer.goods,
    };
  }, shallowEqual);

  const { message } = useSelector((state) => {
    return {
      message: state.stockReducer.message,
    };
  }, shallowEqual);
  const dispatch = useDispatch();

  const onAddNumber = () => {
    if (stock < 1) {
      dispatch(soldOut());
      return;
    }
    sale();
    dispatch(addNumber());
  };
  const onSubstractNumber = () => {
    if (goods < 1) {
      return;
    }
    dispatch(sale());
    dispatch(minusNumber());
  };

  return (
    <div>
      <h2>딥러닝 개발자 무릎 담요</h2>
      <span>
        <strong>17,500</strong>원
      </span>
      <div>
        <button disabled={goods <= 0} type="button" onClick={onSubstractNumber}>
          MINUS
        </button>
        <span>{goods}</span>
        <button disabled={stock <= 0} onClick={onAddNumber}>
          PLUS
        </button>
      </div>
      <div>
        총 수량 <strong>{goods}</strong>
      </div>
      <div>
        <strong>{goods * 17500}</strong>원
      </div>
      <div>
        재고 <strong>{stock}</strong>
      </div>
      <p>{message}</p>
    </div>
  );
}
