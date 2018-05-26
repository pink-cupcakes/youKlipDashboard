import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './assets/stylesheets/reset.css';
import './assets/stylesheets/app.css';

import Notifications from './components/Notifications';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Notifications />
          <Header />
          <Route exact path="/" component={Home} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

// <Route path="/" component={Header} />
// <Route path="/" component={Footer} />
