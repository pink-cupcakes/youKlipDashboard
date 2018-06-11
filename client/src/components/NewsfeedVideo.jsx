import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../assets/stylesheets/newsfeedvideo.css';
import storiesImg1 from '../assets/images/stories-sample1.jpeg';


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
          <div  className="nf-item-userimg" ></div><i className="fas fa-user"></i></div>
          <h2 className="nf-item-username">Charm</h2>
          <h3 className="nf-item-playing">playing <span className="nf-item-game"> League of Legends </span></h3>
          <div className="nf-item-view"> 865 views </div>
          <div className="nf-item-tup"> <i className="fas fa-thumbs-up"></i> 780 </div>
          <div className="nf-item-tdown"> <i className="fas fa-thumbs-down"></i> 85 </div>
          <div className="nf-item-userimg" ></div>



        </div>

    );
  }
}

export default NewsfeedVideo;
