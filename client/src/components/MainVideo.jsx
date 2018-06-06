import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../assets/stylesheets/mainvideo.css';


class MainVideo extends Component {
  render() {
    return (
        <div className="main-video-holder">
          <div className="main-video-title">LoL Daily Funny Moments #5 | Support is Shjjjtttt</div>
          <div className="main-video-description">
            <div className="main-video-userimg"></div>
            <div>
              <h2>Username</h2>
              <h3>playing League of Legends</h3>
            </div>
          </div>
          <iframe
            className="main-video"
            src="https://www.youtube.com/embed/V62pGsjKNKQ?&autoplay=1&mute=1"
            allow="autoplay; encrypted-media; fullscreen">
          </iframe>
        </div>
    );
  }
}

export default MainVideo;
