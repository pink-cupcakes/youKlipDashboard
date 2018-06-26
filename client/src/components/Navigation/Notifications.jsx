import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../assets/stylesheets/navigation/notification.css';


class Notification extends Component {
  render() {
    return (
      <div className="notification-all">
        <div className="notification">
            <div className="notification-content">
              <Link to="/login">
                <p className="notification-message"> Login or Sign Up to Use the Site Fully </p>
              </Link>
              <i className="fas fa-times not-x"></i>
            </div>
        </div>
        <div className="notification-displacer" />
      </div>
    );
  }
}

export default Notification;
