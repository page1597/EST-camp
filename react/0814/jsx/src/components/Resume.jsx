import React from "react";

export default function Resume({ name, hello, hobby, food, color }) {
  return (
    <section>
      <h2>{name} 자기소개서</h2>
      <h3>{hello}</h3>
      <ul>
        <li>취미: {hobby}</li>
        <li>좋아하는 음식: {food}</li>
        <li>좋아하는 색: {color}</li>
      </ul>
    </section>
  );
}
