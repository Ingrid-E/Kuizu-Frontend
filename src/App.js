import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home, Dashboard, LoginAs} from './pages/index'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login-as' element={<LoginAs navigate="/dashboard"/>}></Route>
          <Route path="/dashboard/*" element={<Dashboard window='home'/>}></Route>
          <Route path="/dashboard-course" element={<Dashboard window='course' />}></Route>
          <Route path="/dashboard-exam" element={<Dashboard window='exam' />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;