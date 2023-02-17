import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainNav from '@/components/MainNav';
import { useTranslation } from 'react-i18next';
import logo from './logo.svg';
import './App.css';
import AppRouter from '@/routers/AppRouter';

const App: React.FC = () => {
  console.log('REACT_APP_ENVIRONMENT', process.env, typeof process);
  const { t } = useTranslation();
  return (
    <div className="App">
      {/* <div>{t('Welcome to React')}</div> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
          <MainNav />
          <AppRouter />
        </BrowserRouter>
      </header>
    </div>
  );
};

export default App;
