import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './assets/stylesheets/reset.css';
import './assets/stylesheets/app.css';

import Notifications from './components/Navigation/Notifications';
import Header from './components/Navigation/Header';
import Splash from './components/Splash/Splash';
import Login2 from './components/LoginSignup/Login2';
import Newsfeed from './components/Newsfeed/Newsfeed';
import Front from './components/Front/Front';
import Footer from './components/Navigation/Footer';
import Upload from './components/Upload/Upload';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Notifications />
          <Header />
          <Route exact path="/" component={Splash} />
          <Route exact path="/login" component={Login2} />
          <Route exact path="/newsfeed" component={Newsfeed} />
          <Route exact path="/front" component={Front} />
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
