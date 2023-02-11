import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// lazy 사용시 Suspense 필요함.
// const AxiosTest = lazy(() => import('@/pages/axios-test/AxiosTest'));
// const EnvTest = lazy(() => import('@/pages/env-test/EnvTest'));
// const RecoilTest = lazy(() => import('@/pages/recoil-test/RecoilTest'));

import AxiosTest from '@/pages/axios-test/AxiosTest';
import EnvTest from '@/pages/env-test/EnvTest';
import RecoilTest from '@/pages/recoil-test/RecoilTest';
import MainNav from '@/components/MainNav';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Suspense> */}
        <BrowserRouter>
          <MainNav />
          <Routes>
            <Route path="/axios-test" element={<AxiosTest />} />
            <Route path="/env-test" element={<EnvTest />} />
            <Route path="/recoil-test" element={<RecoilTest />} />
            <Route path="*" element={<Navigate replace to="/axios-test" />} />
          </Routes>
        </BrowserRouter>
        {/* </Suspense> */}
      </header>
    </div>
  );
};

export default App;
