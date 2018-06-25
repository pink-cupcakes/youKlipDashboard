import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../assets/stylesheets/navigation/notification.css';


class Notification extends Component {
  render() {
    return (
      <div className="notification-all">
        <div className="notification">
          <Link to="/login">
            <div className="notification-content">
              Notification: Login or Sign Up to Use the Site Fully
            </div>
          </Link>
        </div>
        <div className="notification-displacer" />
      </div>
    );
  }
}

export default Notification;
