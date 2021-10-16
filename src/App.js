import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Testinomial from './components/Testinomial/Testinomial';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Signup from './components/Signup/Singup';
const App = () => {
  return (
    <div>
      <Router>
        <NavBar/>
        <main>
          <Switch>
          <Route path="/" exact component={Home}/> &nbsp;
          <Route path="/about" exact component={About}/>&nbsp;
          <Route path="/contact" exact component={Contact}/>&nbsp;
          <Route path="/services" exact component={Services}/> &nbsp;
          <Route path="/testinomial" exact component={Testinomial}/>&nbsp;
          <Route path="/signup" exact component={Signup}/>
          <Route path="/login" exace component={Login}/>&nbsp;          
          <Redirect to="/"/>
          </Switch>
        </main>
      </Router>
      <Footer/>
    </div>
  )
}

export default App;
