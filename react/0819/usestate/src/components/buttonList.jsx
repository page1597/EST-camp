import React from "react";
import Button from "./button";
import "../style/buttonsList.css";

export default function ButtonList({ mood, setMood }) {
  const moods = [
    "좋아요! 😃",
    "정말 좋아요! 🤭",
    "최고예요! 😁",
    "미쳤어요!! 🤪",
  ];

  const onClick = (e) => {
    setMood(e.target.value);
  };

  return (
    <ul className="button-list">
      {moods.map((value) => (
        <li key={value}>
          <Button value={value} isSelected={mood === value} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
}
