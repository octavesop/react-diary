import { useContext } from "react";
import { DiaryStateContext } from "./App.js";
import DiaryItem from "./DiaryItem.js";

const DiaryList = ({ onEdit, onRemove }) => {
  const diaryList = useContext(DiaryStateContext);
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <p>일기 총 {diaryList.length}개 있습니다.</p>
      <hr />
      {diaryList.map((it) => {
        return (
          <DiaryItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit} />
        );
      })}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
