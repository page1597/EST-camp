import React from "react";
import { useParams } from "react-router-dom";
export default function Notice() {
  const { id } = useParams();

  return <div>Notice {id}</div>;
}
