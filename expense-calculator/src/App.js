import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './componets/Home';
import Budget from './componets/Budget';

function App() {
  return (
    <div>
      <Home />
      <Routes>
        <Route path='budget' element ={<Budget />}/>
      </Routes>
    </div>
  )
    
}

export default App;
