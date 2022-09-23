const DiaryItem = ({ id, author, content, emotion, createdTime }) => {
  return (
    <div className="DiaryItem" key={id}>
      <span>작성자 : {author} | </span>

      <span>감정 : {emotion} | </span>

      <span>날짜 : {createdTime}</span>
      <br />
      <span>내용 : {content}</span>
    </div>
  );
};

export default DiaryItem;
