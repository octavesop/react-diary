import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const newItem = {
      id: dataId.current,
      author,
      content,
      emotion,
      createdDate: new Date().toISOString(),
    }

    dataId.current += 1;
    setData([newItem, ...data]);
  }

  const onEdit = (targetId, newContent) => {
    console.log(targetId, newContent)
    setData(data.map((it)=> it.id === targetId ? {...it, content: newContent } : it))
  }

  const onRemove =(targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`)
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList)
  }
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}  />
      <DiaryList onEdit = {onEdit} onRemove = {onRemove} diaryList={data} />
    </div>
  );
}

export default App;
