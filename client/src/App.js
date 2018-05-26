import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './assets/stylesheets/reset.css';
import './assets/stylesheets/app.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
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
