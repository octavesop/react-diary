import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
function App() {
  const dummyList = [
    {
      id: 1,
      author: "정민아",
      content: "재밌었다",
      emotion: 5,
      createdTime: new Date().toISOString(),
    },
    {
      id: 2,
      author: "정민아",
      content: "졸려",
      createdTime: new Date().toISOString(),
    },
    {
      id: 3,
      author: "정민아",
      content: "신난다~",
      emotion: 3,
      createdTime: new Date().toISOString(),
    },
    {
      id: 4,
      author: "정민아",
      content: "슬프다",
      emotion: 5,
      createdTime: new Date().toISOString(),
    },
    {
      id: 5,
      author: "정민아",
      content: "좋다",
      emotion: 5,
      createdTime: new Date().toISOString(),
    },
    {
      id: 6,
      author: "정민아",
      emotion: 5,
      content: "재밌었다",
      createdTime: new Date().toISOString(),
    },
  ];
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
