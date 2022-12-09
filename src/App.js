import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home, Dashboard, InProgress} from './pages/index'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<InProgress/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
