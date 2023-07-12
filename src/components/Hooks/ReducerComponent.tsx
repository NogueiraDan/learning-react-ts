/**
 * É uma alternativa para mantermos nosso estado quando o mesmo é mais complexo. 
 * Se você conhece a sintaxe do redux, a mesma é utilizada no useReducer. 
 * Algo que deve ser mencionado é que aqui não temos a propagação do estado 
 * por toda a aplicação como o redux proporciona.
 */

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
      <p>Contador: {state.count}</p>
      <p>Está Ativo: {state.isActive ? 'true' : 'false'}</p><br/>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button><br/>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button><br/>
      <button onClick={() => dispatch({ type: 'toggle' })}>Toggle</button>
    </div>
  );
};

export default ReducerComponent;
