import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../assets/stylesheets/header.css';
import logoShort from '../assets/vector/SkillShotLogo-Short.png';

class Header extends Component {
  render() {
    return (
      <div className="header-all">
        <div className="header">
          <Link to="/">
            <img className="header-logo" src={logoShort} alt="header-logo" />
          </Link>
          <Link to="/"> Browse </Link>
          <div className="search">Search </div>
          <div>Notification</div>
          <button className="button">Log in</button>
          <button className="button"> Sign up</button>
        </div>
        <div className="header-displacer" />
      </div>
    );
  }
}

export default Header;
