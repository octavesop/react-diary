import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const getData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );

    const initData = data.slice(0, 20).map((it) => {
      return {
        id: dataId.current++,
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        createdDate: new Date().toISOString(),
      };
    });
    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []);

  const onCreate = useCallback((author, content, emotion) => {
    const newItem = {
      id: dataId.current,
      author,
      content,
      emotion,
      createdDate: new Date().toISOString(),
    };

    dataId.current += 1;
    setData((data) => [newItem, ...data]);
  }, []);

  const onEdit = useCallback((targetId, newContent) => {
    setData((data) => {
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      );
    });
  }, []);

  const onRemove = useCallback((targetId) => {
    setData((data) => data.filter((it) => it.id !== targetId));
  }, []);
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
