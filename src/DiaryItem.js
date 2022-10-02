import React, { useContext, useRef, useState } from "react";
import { DiaryDispatchContext } from "./App";

const DiaryItem = ({ id, author, content, emotion, createdTime }) => {
  const localContentInput = useRef();

  const { onEdit, onRemove } = useContext(DiaryDispatchContext);

  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const [localContent, setLocalContent] = useState("");

  const handleEdit = () => {
    if (localContent.length < 5) {
      alert("내용은 5글자 이상 삽입하세요.");
      localContentInput.current.focus();
      return;
    }
    onEdit(id, localContent);
    toggleIsEdit();
    return;
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
  };

  return (
    <div className="DiaryItem" key={id}>
      <span>작성자 : {author} | </span>

      <span>감정 : {emotion} | </span>

      <span>날짜 : {createdTime}</span>
      <br />
      <span className="content">
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </span>
      <br />
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정취소</button>
          <button onClick={handleEdit}>저장하기</button>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
                onRemove(id);
              }
            }}
          >
            삭제하기
          </button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default React.memo(DiaryItem);
