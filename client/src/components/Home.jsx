import React, { Component } from 'react';
import '../assets/stylesheets/header.css';

import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-name">Home Page</div>
      </div>
    );
  }
}

export default Home;
