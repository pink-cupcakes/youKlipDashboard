import React, { Component } from 'react';
import '../assets/stylesheets/home.css';

import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="login-background-img">
        <div className="login-background">
          <div className="login-title">
            <h1 className="login-title">SKILLSHOT</h1>
            <h2 className="login-subtitle">
              Join and share your moments with your friends
            </h2>
          </div>
          <div className="login-button-holder">
            <button className="login-button">
              <div className="login-icon google-icon">Icon</div>
              <div className="login-button-text google">Log in with Google</div>
            </button>
            <button className="login-button">
              <div className="login-icon facebook-icon">Icon</div>
              <div className="login-button-text facebook">
                Log in with Facebook
              </div>
            </button>
            <button className="login-button">
              <div className="login-icon email-icon">Icon</div>
              <div className="login-button-text email">Log in with email</div>
            </button>
          </div>
          <div className="register-holder">
            <Link to="/">
              <div className="register">Not registered?</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
