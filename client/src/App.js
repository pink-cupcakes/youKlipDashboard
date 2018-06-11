import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './assets/stylesheets/reset.css';
import './assets/stylesheets/app.css';

import Notifications from './components/Notifications';
import Header from './components/Header';
import Login from './components/Login';
import Login2 from './components/Login2';
import Newsfeed from './components/Newsfeed';
import Home from './components/Home';
import Footer from './components/Footer';
import Upload from './components/Upload';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Notifications />
          <Header />

          <Route exact path="/login" component={Login2} />
          <Route exact path="/newsfeed" component={Newsfeed} />
          <Route exact path="/home" component={Home} />
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
