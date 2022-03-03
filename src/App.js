import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { decrease, increase } from "./redux/action";
import { increment, decrement, incrementByAmount } from "./toolkit/reducer";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>React Toolkit</h1>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
