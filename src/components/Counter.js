import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  const decHandler = () => {
    dispatch({ type: "decrement" });
  };
  const incHandler = () => {
    dispatch({ type: "increment" });
  };
  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
