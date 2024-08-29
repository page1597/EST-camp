import React from "react";
import { FourSquare } from "react-loading-indicators";
export default function Loading() {
  return (
    <div
      style={{
        position: "fixed",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <FourSquare color="black" size="small" text="loading" textColor="" />
    </div>
  );
}
