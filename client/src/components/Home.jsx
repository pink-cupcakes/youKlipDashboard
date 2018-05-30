import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../assets/stylesheets/home.css';


class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1 className="home-feed-title"> FRONT PAGE </h1>

        <div className="home-sort-bar">
          <div className="sort-chosen">Hot</div>
          <div className="">Fresh</div>
          <div className="">Troll</div>
          <div className="">Controversial</div>
          <div className="sort-bar-leftover"></div>
        </div>

        <div className="home-feed-games">
          <div className=""> League of Legends </div>
          <div className=""> Overwatch </div>
          <div className=""> Fortnite </div>
          <div className=""> Hearthstone </div>
          <div className=""> PUBG </div>
          <div className=""> Rocket League </div>
          <div className=""> Dota 2 </div>
          <div className=""> CS:GO </div>
          <div className=""> Dark Souls </div>
          <div className=""> Skyrim </div>
          <div className=""> Witcher </div>
          <div className=""> Etc </div>



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
            allow="autoplay; encrypted-media; fullscreen">
          </iframe>
        </div>


      </div>
    );
  }
}

export default Home;
