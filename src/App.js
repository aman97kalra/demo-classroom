import React from 'react';
import './App.scss';
import { dashboard as Dashboard } from './views/dashboard';

function App() {
  return (
    <div className="App">
      <div className = 'ui-content'>
        <Dashboard
        />
      </div>
    </div>
  );
}

export default App;
