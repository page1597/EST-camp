import React from "react";
import { useState } from "react";

const user = {
  idUser: "jaehyun@weniv.com",
  pwUser: 1234,
};

export default function Login({ setIsRightUser }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    console.log(id, password);
    if (id === user.idUser && password === user.pwUser.toString()) {
      setIsRightUser(true);
      //   alert("가입된 유저");
    }
  };

  const handleLoginInput = (e) => {
    // console.log("id", e.target.value);
    setId(e.target.value);
  };

  const handlePasswordInput = (e) => {
    // console.log("pw", e.target.value);
    setPassword(e.target.value);
  };
  return (
    <form onSubmit={handleLoginSubmit}>
      <label>
        아이디 :
        <input type="text" onChange={handleLoginInput} value={id} />
      </label>
      <br />
      <label>
        비밀번호 :
        <input
          type="password"
          onChange={handlePasswordInput}
          value={password}
        />
      </label>
      <button type="submit">로그인</button>
    </form>
  );
}
