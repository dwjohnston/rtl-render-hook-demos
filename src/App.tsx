import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {  useData } from './myHook';
import {  decrement, increment } from './redux/slice';
import { useDispatch, useSelector } from 'react-redux';

export function Counter() {
  //@ts-ignore
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

function App() {

  const value = useData(); 


  return (
    <div className="App">
      <span>{JSON.stringify(value)}</span>
      <Counter/>
    </div>
  );
}

export default App;
