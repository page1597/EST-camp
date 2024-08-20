import React from "react";
import { useState } from "react";
import "./user.css";
export default function User({ user }) {
  const [isActive, setIsActive] = useState(false);

  // toggle
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
      <dt>
        <button onClick={handleClick}>{user.name}</button>
      </dt>

      <dd className={isActive ? "active" : "null"}>
        <p>Email: {user.email}</p>
        <p>Job: {user.job}</p>
      </dd>
    </div>
  );
}
