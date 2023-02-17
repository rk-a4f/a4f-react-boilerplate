import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainNav from '@/components/MainNav';
import logo from './logo.svg';
import './App.css';
import AppRouter from '@/routers/AppRouter';

const App: React.FC = () => {
  return (
    <div className="App">
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
