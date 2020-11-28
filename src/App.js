import React from 'react';
import './App.scss';
import { dashboard as Dashboard } from './views/dashboard';
import { MainPage } from './components/mainPage';

function App() {
  return (
    <div className="App">
      <div className = 'ui-content'>
        <Dashboard
        />
        {/* <MainPage
        /> */}
      </div>
    </div>
  );
}

export default App;
