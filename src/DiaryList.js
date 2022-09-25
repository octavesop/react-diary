import DiaryItem from "./DiaryItem.js";

const DiaryList = ({ onEdit, onDelete, diaryList }) => {
  console.log(diaryList.length);
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <p>일기 총 {diaryList.length}개 있습니다.</p>
      <hr />
      {diaryList.map((it) => {
        return <DiaryItem key={it.id} {...it} onDelete= {onDelete} onEdit = {onEdit} />;
      })}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
