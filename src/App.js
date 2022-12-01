import React from 'react'
import logo from './logo.svg';
import './App.css';
import GoogleLogin from './components/google-login/google-login';

function App() {
  return (
    <div className="App">
      <h1>Chismoso</h1>
      <GoogleLogin></GoogleLogin>
    </div>
  );
}

export default App;
