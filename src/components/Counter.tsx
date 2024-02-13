import { useSelector, useDispatch } from "react-redux";
import { AppState, AppDispatch } from "../state/store";

import {
  increment,
  decrement,
  incrementWithPayload,
  incrementAsync,
} from "../state/slices/counterSlice";

const Counter = () => {
  const count = useSelector((state: AppState) => state.counter.counterValue);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <button onClick={() => dispatch(incrementWithPayload(10))}>
        Increment by 10
      </button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementAsync(2))}>
        Increment Async by 2
      </button>
      <h2>{count}</h2>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
