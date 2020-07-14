import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About';
import Overview from './Components/Overview';

function App() {
  return (
    <div className="App">
      <Nav/>
     <Home/>
     <About/>
     <Overview/>

    </div>
  );
}

export default App;
