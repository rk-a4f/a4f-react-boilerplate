import React from 'react';
import logo from './logo.svg';
import './App.css';
import RecoilInput from '@/components/recoil-test/RecoilInput';
import RecoilValue from '@/components/recoil-test/RecoilValue';
// import Parent from '@/components/parent/Parent';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <Parent title="제목" onTitleClick={() => console.log('titleClicked')} /> */}
        <p>리코일 테스트!!!</p>
        <RecoilInput />
        <RecoilValue />
      </header>
    </div>
  );
};

export default App;
