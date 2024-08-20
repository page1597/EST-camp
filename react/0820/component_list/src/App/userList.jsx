import React from "react";
import User from "./user";

export default function UserList({ users }) {
  return (
    <dl>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </dl>
  );
}
