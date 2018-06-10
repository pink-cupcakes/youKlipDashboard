import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Search from './Search';

import '../assets/stylesheets/header.css';
import logoShort from '../assets/vector/SkillShotLogo-Short-Transparent.png';

class Header extends Component {
  render() {
    return (
      <div className="header-all">

        <div className="header">
          <div className="header-inner-wrapper">
            <div className="header-left">
              <Link to="/">
                <img className="header-logo" src={logoShort} alt="header-logo" />
              </Link>
              <Link to="/"> Browse </Link>
              <Link to="/"> Front Page </Link>
              <Link to="/"> Store </Link>
              <Link to="/"> <i className="fas fa-ellipsis-h"></i> </Link>
            </div>
            <Search />
            <div className="header-right">
              <div className="header-video-icon">
                <i className="fas fa-video">
                  <div className="plus-absolute">
                    <i className="fas fa-plus plus-overlap"></i>
                  </div>
                </i>
              </div>
              <i className="fas fa-bell"></i>
              <a href="http://localhost:5000/auth/twitch"><button className="header-button">Log in</button></a>
              <a href="http://localhost:5000/auth/twitch"><button className="header-button">Sign up</button></a>
            </div>

          </div>
        </div>

      <div className="header-displacer"></div>

    </div>
    );
  }
}

export default Header;
