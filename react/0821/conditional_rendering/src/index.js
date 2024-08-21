import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App2"; // 먼저 적용
import "./index.css"; // 그 후 적용. 그래서 App2.css 스타일이 index.css로 덮어씌워짐

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
