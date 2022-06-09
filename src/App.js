import React from 'react';
import "./App.css"
import { Route, Routes, BrowserRouter as Router, } from "react-router-dom";
import HomeLogin from '../src/components/home'
import Wall from './components/wall'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={< HomeLogin />} />
        <Route path='' element={< HomeLogin />} />
      </Routes>
    </Router>
  )
};

export default App;