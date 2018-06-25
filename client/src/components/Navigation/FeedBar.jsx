import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../assets/stylesheets/navigation/feedbar.css';
import GameBar from './GameBar';

class FeedBar extends Component {
  render() {
    return (
      <div className="feedbar">

        <div className="sort-bar">
          <div className="sort-chosen">Hot</div>
          <div className="">Fresh</div>
          <div className="">Troll</div>
          <div className="">Controversial</div>
          <div className="sort-bar-leftover"></div>
        </div>
        <GameBar />
      </div>
    );
  }
}

export default FeedBar;
