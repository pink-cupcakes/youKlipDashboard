import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../assets/stylesheets/video/videoitem.css';


class VideoItem extends Component {
  render() {
    return (
      <div className="video-grid-item">
          <div className="video-grid-notification"> <i className="fas fa-heart"></i> Doublelift and 95 others  </div>
          <img  className="video-grid-img" alt="" src="http://img.youtube.com/vi/tlKjC3r9yWw/maxresdefault.jpg" />
          <div className="video-grid-title">Sion + Lifeline ARAM LOL</div>
          <div className="video-grid-userimg" ></div>
          <h2 className="video-grid-username">Charm</h2>
          <h3 className="video-grid-playing">playing <span className="video-grid-game">League of Legends</span></h3>
      </div>
    );
  }
}

export default VideoItem;
