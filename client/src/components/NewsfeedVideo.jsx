import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../assets/stylesheets/newsfeedvideo.css';
import storiesImg1 from '../assets/images/stories-sample1.jpeg';
import storiesImg2 from '../assets/images/stories-sample2.jpg';

class NewsfeedVideo extends Component {
  render() {
    return (
      <div className="newsfeed-video-all">

        <div className="nf-item">
          <img  className="nf-item-notification-userimg" src={storiesImg1} />
          <div className="nf-item-notification"> <i className="fas fa-heart"></i> Doublelift, Sneaky and 95 others  </div>
          <h2 className="nf-item-date"> June 7, 2018 at 11:30pm</h2>
          <iframe
            className="nf-item-video"
            src="https://www.youtube.com/embed/tlKjC3r9yWw"
            allow="autoplay; encrypted-media; fullscreen">
          </iframe>
          <div className="nf-item-title">Sion + Lifeline ARAM LOL</div>
          <div className="nf-item-view"> 865 views </div>
          <div className="nf-item-tup"> <i className="fas fa-thumbs-up"></i> 280 </div>
          <div className="nf-item-tdown"> <i className="fas fa-thumbs-down"></i> 15 </div>
          <div className="nf-item-username-playing">
          <h2 className="nf-item-username">Charm </h2>
          <h3 className="nf-item-playing">playing </h3>
          <span className="nf-item-game"> League of Legends </span>
          </div>
          <div className="nf-comment-box"> Add a public comment ... </div>
        </div>

        <div className="nf-item">
          <img  className="nf-item-notification-userimg" src={storiesImg2} />
          <div className="nf-item-notification"> <i className="fas fa-heart"></i> Imaqtpie, Meteos and 920 others  </div>
          <h2 className="nf-item-date"> June 7, 2018 at 11:30pm</h2>
          <iframe
            className="nf-item-video"
            src="https://www.youtube.com/embed/BF4Od-e0P9g"
            allow="autoplay; encrypted-media; fullscreen">
          </iframe>
          <div className="nf-item-title">My current gold experience</div>
          <div className="nf-item-view"> 920 views </div>
          <div className="nf-item-tup"> <i className="fas fa-thumbs-up"></i> 74 </div>
          <div className="nf-item-tdown"> <i className="fas fa-thumbs-down"></i> 29 </div>
          <div className="nf-item-username-playing">
            <h2 className="nf-item-username">MILKMAN </h2>
            <h3 className="nf-item-playing">playing </h3>
            <span className="nf-item-game"> League of Legends </span>
          </div>
          <div className="nf-comment-box"> Add a public comment ... </div>
        </div>

      </div>

    );
  }
}

export default NewsfeedVideo;
