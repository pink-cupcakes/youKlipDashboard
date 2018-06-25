import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../assets/stylesheets/login-signup/login2.css';
import logoShort from '../../assets/vector/SkillShotLogo-Short-Transparent.png';

class Login2 extends Component {
  render() {
    return (
      <div className="login">
        <div className="login-card">
          <div className="login-left">
            <img className="login-logo" src={logoShort} alt="header-logo" />
            <h1 className="login-com-name"> SKILLSHOT </h1>
            <h2 className="login-slogan"> Join and share your moments with your friends </h2>
          </div>

          <div className="login-right">
            <div className="login-title">
              <Link to="/signup">
                <div className="login-sign-up"> Sign up/ </div>
              </Link>
              <div className=""> Login </div>
            </div>

            <div className="login-inputs">
              <div className="login-inputs-left">
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button className="login-button email-button">Log in</button>
              </div>

              <div className="login-inputs-right">
                <button className="login-button google">
                  <i className="fab fa-google"></i>
                  <div className="login-button-text">
                    Log in with Google
                  </div>
                </button>

                <button className="login-button facebook">
                  <i className="fab fa-facebook-f"></i>
                  <div className="login-button-text">
                    Log in with Facebook
                  </div>
                </button>

                <button className="login-button discord">
                  <i className="fab fa-discord"></i>
                  <div className="login-button-text">
                    Log in with Discord
                  </div>
                </button>
            </div>
            </div>
        </div>


        </div>
      </div>
    );
  }
}

export default Login2;
