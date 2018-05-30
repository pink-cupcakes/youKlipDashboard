import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../assets/stylesheets/home.css';


class Home extends Component {
  render() {
    return (
      <div className="Home">

        <div className="home-sort-bar">
          <div className="sort-chosen">Hot</div>
          <div className="">Fresh</div>
          <div className="">Troll</div>
          <div className="">Controversial</div>
          <div className="sort-bar-leftover"></div>
        </div>

        <div className="main-video-holder">
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
            frameborder="0"
            allow="autoplay; encrypted-media" allowfullscreen>
          </iframe>
        </div>


      </div>
    );
  }
}

export default Home;
