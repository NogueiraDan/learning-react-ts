import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/types";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "../../store/counterSlice";

const Counter: React.FC = () => {
  // O tipo Root State agrega os tipos de cada estado.
  const counter = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleIncrementAmount = (amount: any) => {
    dispatch(incrementByAmount(amount));
    setAmount(0)
  };
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button style={{height:"30px", cursor:"pointer"}} onClick={handleIncrement}>Increment</button>
      <button style={{height:"30px", cursor:"pointer"}} onClick={handleDecrement}>Decrement</button>
      <button style={{height:"30px", cursor:"pointer"}} onClick={handleReset}>Reset</button>
      <br />
      <br />
      <input
        style={{border: "1px solid #000", height:"30px"}}
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <button style={{height:"30px", cursor:"pointer"}} onClick={() => handleIncrementAmount(amount)}>
        Increment Amount
      </button>
    </div>
  );
};

export default Counter;
