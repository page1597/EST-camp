import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { useFireStore } from "../../hooks/useFireStore";

export default function DiaryForm({ uid }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addDocument, response } = useFireStore("diary");

  const handleData = (event) => {
    if (event.target.type === "text") {
      setTitle(event.target.value);
    } else {
      setContent(event.target.value);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title, content);
    addDocument({ uid, title, content });
  };
  useEffect(() => {
    if (response.isSuccess) {
      setTitle("");
      setContent("");
    }
  }, [response.isSuccess]);
  return (
    <form onSubmit={handleSubmit}>
      <label className="a11y-hidden" for="diary-title">
        일기 제목
      </label>
      <input
        className="input-style"
        id="diary-title"
        type="text"
        placeholder="제목"
        required
        value={title}
        onChange={handleData}
      />

      <label className="a11y-hidden" for="diary-content">
        일기 내용
      </label>
      <textarea
        className={styles["diary-textarea"]}
        id="diary-content"
        placeholder="오늘의 비밀은 무엇인가요?"
        value={content}
        onChange={handleData}
      ></textarea>
      <button className="black-btn" type="submit">
        작성하기
      </button>
    </form>
  );
}
