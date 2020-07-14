import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom"
// import Switch from 'react-materialize/lib/Switch';

import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About';
import Overview from './Components/Overview';
import Story from './Components/Story';

function App() {
  return (
    <div className="App">
      <Router>
      <Nav/>
     <Switch><Route path="/Home" component={Home}/></Switch>
     <Switch><Route path="/Story" component={Story}/></Switch>
     <Switch><Route path="/About" component={About}/></Switch>
     <Switch><Route path="/Overview" component={Overview}/></Switch>
     </Router>
    </div>
  );
}

export default App;
