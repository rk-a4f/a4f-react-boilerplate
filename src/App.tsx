import React from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from '@/components/parent/Parent';

function App(): any {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Parent title="제목" onTitleClick={() => console.log('titleClicked')} />
      </header>
    </div>
  );
}

export default App;
