import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../assets/stylesheets/newsfeedvideo.css';


class NewsfeedVideo extends Component {
  render() {
    return (
      <div className="newsfeed-video-all">
        <div className="video-grid-item">
          <div className="video-grid-notification"> <i className="fas fa-heart"></i> Doublelift, Sneaky and 95 others  </div>
          <iframe
            className="main-video"
            src="https://www.youtube.com/embed/tlKjC3r9yWw"
            allow="autoplay; encrypted-media; fullscreen">
          </iframe>
          <div className="video-grid-title">Sion + Lifeline ARAM LOL</div>
          <div className="video-grid-notification"> 865 views </div>
          <div className="video-grid-notification"> <i className="fas fa-thumbs-up"></i> 780 </div>
          <div className="video-grid-notification"> <i className="fas fa-thumbs-down"></i> 85 </div>
          <div className="video-grid-userimg" ></div>
          <h2 className="video-grid-username">Charm</h2>
          <h3 className="video-grid-playing">playing <span className="video-grid-game">League of Legends</span></h3>
        </div>


      </div>
    );
  }
}

export default NewsfeedVideo;
