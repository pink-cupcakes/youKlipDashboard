import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../assets/stylesheets/video.css';


class Video extends Component {
  render() {
    return (
      <div className="side-video-holder">
          <div className="side-video-description-holder">
            <div className="side-video-title">Trolling in Overwatch</div>
            <div className="side-video-description">
              <div className="side-video-userimg"></div>
              <div>
                <h2>Username</h2>
                <h3>playing Overwatch</h3>
              </div>
            </div>
          </div>
          <img
            className="side-video"
            src="http://img.youtube.com/vi/j1u_uvCwv5g/0.jpg" />
          <iframe
            className="side-video"
            src="https://www.youtube.com/embed/j1u_uvCwv5g"
            allow="autoplay; encrypted-media; fullscreen">
          </iframe>
      </div>
    );
  }
}

export default Video;
