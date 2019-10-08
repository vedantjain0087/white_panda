import React from 'react';
import Drawer from './components/Drawer';
import MainScreen from './components/MainScreen'

function App() {
  return (
    <div className="row">
      <Drawer />
      <MainScreen />
    </div>
  );
}

export default App;
