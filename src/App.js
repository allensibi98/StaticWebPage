import React from 'react';
import DashBoard from './Components/DashBoard';
import MainContent from './Components/MainContent';
import Product from './Components/Products';

function App() {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <DashBoard />
        <MainContent />
      </div>
    </>

  );
}

export default App;
