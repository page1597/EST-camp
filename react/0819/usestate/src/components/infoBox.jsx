import React from "react";
import "../style/infoBox.css";

export default function InfoBox({ mood }) {
  return <p className="info-box">기분이 {mood}</p>;
}
