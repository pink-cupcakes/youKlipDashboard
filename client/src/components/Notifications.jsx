import React, { Component } from 'react';
import '../assets/stylesheets/notification.css';

import { Link } from 'react-router-dom';

class Notification extends Component {
  render() {
    return (
      <div className="notification">
        <Link to="/">
          <div className="header-name">Notification Bar On Top</div>
        </Link>
      </div>
    );
  }
}

export default Notification;
