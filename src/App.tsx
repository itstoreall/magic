// import React from 'react';
import './App.css';
import dataJson from './data.json';

function App() {
  const data = dataJson;

  console.log('data -->', data);

  return (
    <div className='App'>
      <header className='App-header'>{data.name}</header>
    </div>
  );
}

export default App;
