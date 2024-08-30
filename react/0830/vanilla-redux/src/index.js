import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number"); // 수량
const quantity = document.getElementById("quantity"); // 페이지 하단에 총 수량
const totalPrice = document.getElementById("total"); // 페이지 하단에 총 가격

const PRICE = 17500;

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case "PLUS":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(countReducer);

// let count = 0;

// UI Update - text
const updateResult = () => {
  number.innerText = store.getState();
  quantity.innerHTML = store.getState();
  totalPrice.innerHTML = store.getState() * PRICE;
};

// store의 상태가 변경될 때마다 updateResult 함수가 실행되도록 구독
store.subscribe(updateResult);

// State Change
const addNumber = () => {
  minus.disabled = false;
  store.dispatch({ type: "PLUS" });
};

// State Change
const substractNumber = () => {
  store.dispatch({ type: "MINUS" });
  if (store.getState() <= 0) {
    minus.disabled = true;
  }
};

// Init
// number.innerHTML = count;
// updateResult(count);

// Event
plus.addEventListener("click", addNumber);
minus.addEventListener("click", substractNumber);
