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
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import FAQ from './Components/FAQ';

function App() {
  return (
    <div className="App">
      <Router>
      <Nav/>
     <Switch><Route path="/Home" component={Home}/></Switch>
     <Switch><Route path="/Story" component={Story}/></Switch>
     <Switch><Route path="/About" component={About}/></Switch>
     <Switch><Route path="/Overview" component={Overview}/></Switch>
     <Switch><Route path="/Contact" component={Contact}/></Switch>
     <Switch><Route path="/FAQ" component={FAQ}/></Switch>
    <Footer/>
     </Router>
    </div>
  );
}

export default App;
