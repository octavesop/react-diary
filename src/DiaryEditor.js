import { useState } from "react";

const DiaryEditor = () => {
  const [state, setState] = useState({
    author: "사용자명",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    alert(JSON.stringify(state));
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          defaultValue={state.author}
          onChange={(event) =>
            setState({
              ...state,
              [event.target.name]: event.target.value,
            })
          }
        />
        <button type="submit" onClick={() => handleSubmit()}>
          제출
        </button>
        <button type="reset">지우기</button>
      </div>
      <div>
        <select
          name="emotion"
          value={state.emotion}
          onChange={(event) => handleChangeState(event)}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <br />
      <div>
        <textarea
          defaultValue={state.content}
          onChange={(event) => handleChangeState(event)}
        />
      </div>
    </div>
  );
};

export default DiaryEditor;
