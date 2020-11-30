import React from 'react';
import './App.scss';
import { dashboard as Dashboard } from './views/dashboard';
import { coronaTracker as CoronaTracker } from './components/coronaTracker';

function App() {
  return (
    <div className="App">
      <div className = 'ui-content'>
        <CoronaTracker/>
      </div>
    </div>
  );
}

export default App;
