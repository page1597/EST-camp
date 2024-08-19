import React from "react";
import "../style/button.css";

export default function Button({ value, isSelected, onClick }) {
  return (
    <button
      value={value}
      onClick={onClick}
      className={isSelected ? "active" : null}
    >
      기분이: {value}
    </button>
  );
}
