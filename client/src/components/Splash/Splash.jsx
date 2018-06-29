import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../assets/stylesheets/splash/splash.css';
import splash1 from '../../assets/images/splash1.jpeg';

class Splash extends Component {
  render() {
    return (
      <div className="splash">
        <div className="splash-s1">
            <h1 className="splash-title st1"> SKILL </h1>
            <h1 className="splash-title st2"> SHOT </h1>
            <h2 className="splash-subtitle sst1"> A COMMUNITY MADE </h2>
            <h2 className="splash-subtitle sst2"> BY AND FOR GAMERS </h2>
            <i className="fas fa-location-arrow arrow1"></i>
            <i className="fas fa-bomb bomb1"></i>
            <h2 className="splash-header header1"> SHARE YOUR WORST </h2>
            <i className="fas fa-certificate cert1"></i>
            <h2 className="splash-header header2"> SHARE YOUR BEST </h2>
            <ul className="splash-links">
              <li className="splash-link"> CONNECT </li>
              <li className="splash-link"> JUDGE </li>
              <li className="splash-link"> SHOP </li>
            </ul>
        </div>
        <div>
          <div className="splash-sect s1">
            <h1 className="splash-sect-title"> CONNECT </h1>
            <h2 className="splash-sect-s1-b1"> Upload and share videos with your friends </h2>
            <h2 className="splash-sect-s1-b2"> Follow your friends and favorite gamers </h2>
          </div>

          <div className="splash-sect s2">
            <h1 className="splash-sect-title"> JUDGE </h1>
            <h2 className="splash-sect-s2-b1"> Vote on videos </h2>
            <h2 className="splash-sect-s2-b2"> Decide if they're troll or not </h2>
          </div>

          <div className="splash-sect s3">
            <h1 className="splash-sect-title"> SHOP </h1>
            <h2 className="splash-sect-s3-b1"> Make highlight reels </h2>
            <h2 className="splash-sect-s3-b2"> or Hire a professional editor to do it for you </h2>
            <i className="fas fa-money-bill-wave"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
