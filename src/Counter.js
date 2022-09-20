import React, { useState } from "react";
import OddEvenResult from "./OddEvenResult";

// 특정 컴포넌트의 state 값이 변경되면 무조건 리렌더 된다.
// props의 값은 기본 Object로 전달된다.
const Counter = (props) => {
  const [number, setNumber] = useState(props.initialValue);
  const onIncrease = () => {
    setNumber(number + 1);
  };
  const onDecrease = () => {
    setNumber(number - 1);
  };
  return (
    <div>
      <h2>{number}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <br />
      <hr />
      <OddEvenResult count={number} />
    </div>
  );
};

// props가 전달되지 않으면 다음 값을 활용한다.
Counter.defaultProps = {
  initialValue: 1,
};

export default Counter;
