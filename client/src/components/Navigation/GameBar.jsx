import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../assets/stylesheets/navigation/gamebar.css';


class GameBar extends Component {
  render() {
    return (
      <div className="feedbar">
        <div className="feed-games">
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
      </div>
    );
  }
}

export default GameBar;
