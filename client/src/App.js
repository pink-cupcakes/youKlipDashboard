import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './assets/stylesheets/reset.css';
import './assets/stylesheets/app.css';

import Notifications from './components/Notifications';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import HomeAlter from './components/HomeAlter';
import Footer from './components/Footer';
import Upload from './components/Upload';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Notifications />
          <Header />
          <Route exact path="/home" component={Home} />
          <Route exact path="/alter" component={HomeAlter} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/upload" component={Upload} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

// <Route path="/" component={Header} />
// <Route path="/" component={Footer} />
