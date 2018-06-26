import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../assets/stylesheets/splash/splash.css';
import splash1 from '../../assets/images/splash1.jpeg';

class Splash extends Component {
  render() {
    return (
      <div className="splash">
        <div className="splash-s1">
          <h1 className="splash-title"> SkillShot </h1>
          <h2 className="splash-subtitle"> A community made by and for gamers </h2>
          <img className="splash-img1" alt="img1" src={splash1} />
        </div>
        <div>
          <h2> Upload and share videos with your friends </h2>
          <h2> Follow your friends and favorite gamers </h2>
        </div>
        <div>
          <h2> Pass judgement on other players </h2>
          <h2> Decide if they're troll or not </h2>
        </div>

      </div>
    );
  }
}

export default Splash;
