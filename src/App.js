import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home, Dashboard, LoginAs} from './pages/index'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LoginAs/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
