import React, { useReducer } from 'react';

interface State {
  count: number;
  isActive: boolean;
}

type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'toggle' };

const initialState: State = {
  count: 0,
  isActive: false
};

const reducer = (state: State, action: Action) => {
  const actionHandlers = {
    increment: () => ({ ...state, count: state.count + 1 }),
    decrement: () => ({ ...state, count: state.count - 1 }),
    toggle: () => ({ ...state, isActive: !state.isActive })
  };

  return actionHandlers[action.type]?.() || state;
};


const ReducerComponent: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <p>isActive: {state.isActive ? 'true' : 'false'}</p><br/>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button><br/>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button><br/>
      <button onClick={() => dispatch({ type: 'toggle' })}>Toggle</button>
    </div>
  );
};

export default ReducerComponent;
