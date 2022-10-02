import axios from "axios";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const createdDate = new Date().toISOString();
      const newItem = {
        ...action.data,
        createdDate,
      };
      return [newItem, ...state];
    }
    case "REMOVE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    case "EDIT":
    default:
      return state.map((it) =>
        it.id === action.targetId ? { ...it, content: action.newContent } : it
      );
  }
};

export const DiaryStateContext = React.createContext();

export const DiaryDispatchContext = React.createContext();

const App = () => {
  const [data, dispatch] = useReducer(reducer, []);
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
    dispatch({ type: "INIT", data: initData });
  };

  useEffect(() => {
    getData();
  }, []);

  const onCreate = useCallback((author, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: { author, content, emotion, id: dataId.current },
    });
    dataId.current += 1;
  }, []);

  const onEdit = useCallback((targetId, newContent) => {
    dispatch({ type: "EDIT", targetId, newContent });
  }, []);

  const onRemove = useCallback((targetId) => {
    dispatch({ type: "REMOVE", targetId });
  }, []);

  const memoizedDispatches = useMemo(() => {
    return { onCreate, onEdit, onRemove };
  }, []);

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={memoizedDispatches}>
        <div className="App">
          <DiaryEditor />
          <diaryList diaryList={data} />
        </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
};

export default App;
