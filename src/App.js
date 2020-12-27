import React from 'react';
import './App.scss';
// import { dashboard as Dashboard } from './views/dashboard';
// import { coronaTracker as CoronaTracker } from './components/coronaTracker';
import { spaceX as SpaceX } from './components/spaceX';

function App() {
  return (
    <div className="App">
      <div className = 'ui-content'>
        <SpaceX/>
      </div>
    </div>
  );
}

export default App;
