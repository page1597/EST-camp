import React from "react";
import "./App.css";

function App() {
  const time = new Date();

  console.log(time);
  console.log(time.getFullYear());
  console.log(time.getMonth());
  console.log(time.getDate());
  console.log(time.getMonth());
  console.log(time.getDate());
  console.log(time.getHours());
  console.log(time.getMinutes());
  console.log(time.getSeconds());

  const list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
  ];

  function TrapList({ item }) {
    return (
      <li className={item.visited ? "active" : null} key={item.no}>
        {item.area}
      </li>
    );
  }

  const items = [
    { id: 1, name: "Apple", desc: "빨간건 사과" },
    { id: 2, name: "Banana", desc: "바나나는 길어" },
    { id: 3, name: "Cherry", desc: "체리는 비싸" },
  ];

  function Item() {
    return (
      <dl>
        {items.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <dt>{item.name}</dt>
              <dd>{item.desc}</dd>
            </React.Fragment>
          );
        })}
      </dl>
    );
  }

  return (
    <div>
      <div
        className="my-div"
        style={{ color: "white", backgroundColor: "black" }}
      >
        <div style={{ color: "red" }}>년: {time.getFullYear()}</div>
        <div>
          월/일: {time.getMonth() + 1}/{time.getDate()}
        </div>
        <div>
          시간: {time.getHours()}시 {time.getMinutes()}분 {time.getSeconds()}초
        </div>
      </div>
      <ul className="list-area">
        {list.map((item) => {
          return <TrapList item={item} />;
        })}
      </ul>
      <Item />
    </div>
  );
}
export default App;
