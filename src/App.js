import React, { useRef } from 'react';

import './App.scss';


import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main';
import Completed from './pages/Completed';
import NotFound from './pages/NotFound';

function App() {
  
  return (
    <div className="App">
      <div className="block-wrapper">
        <Routes>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/' element={<Main/>}/>
          <Route path='/completed' element={<Completed/>}/>
        </Routes>
      </div> 

    </div>
  );
}

export default App;
