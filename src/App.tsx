import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useData } from './myHook';

function App() {

  const data = useData(); 
  return (
    <div className="App">
        {JSON.stringify(data)}
      
    </div>
  );
}

export default App;
