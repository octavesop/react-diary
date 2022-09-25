import { useState, useRef } from "react";

const DiaryEditor = ({onCreate}) => {
  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
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
    console.log(state.author.length);
    console.log(state.content.length);
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }
    onCreate(state.author, state.content, state.emotion)
    alert("저장 성공");
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          defaultValue={state.author}
          name="author"
          ref={authorInput}
          onChange={handleChangeState}
        />
        <button type="submit" onClick={() => handleSubmit()}>
          제출
        </button>
        <button
          type="reset"
          onClick={() => setState({ author: "", content: "", emotion: 1 })}
        >
          지우기
        </button>
      </div>
      <div>
        <textarea
          defaultValue={state.content}
          name="content"
          ref={contentInput}
          onChange={(event) =>
            setState({
              ...state,
              [event.target.name]: event.target.value,
            })
          }
        />
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
    </div>
  );
};

export default DiaryEditor;
