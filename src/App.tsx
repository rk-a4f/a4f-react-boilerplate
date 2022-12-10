import React from 'react';
import logo from './logo.svg';
import './App.css';
import RecoilInput from '@/components/recoil-test/RecoilInput';
import RecoilValue from '@/components/recoil-test/RecoilValue';
import AxiosTest from '@/components/axios-test/AxiosTest';
// import Parent from '@/components/parent/Parent';

const App: React.FC = () => {
  console.log('REACT_APP_ENVIRONMENT', process.env, typeof process);
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
        <br />
        <p>axios 테스트!!!</p>
        <AxiosTest />
        <p>env 테스트!!!</p>
        <p>
          {process.env.NODE_ENV} , {process.env.REACT_APP_ENVIRONMENT}
        </p>
      </header>
    </div>
  );
};

export default App;
