import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import SingleMovie from './pages/SingleMovie';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Movie/:id' element={<SingleMovie />}/>
      </Routes>
    </Router>
  );
}

