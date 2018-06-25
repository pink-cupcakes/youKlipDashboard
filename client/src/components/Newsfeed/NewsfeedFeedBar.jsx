import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import GameBar from '../Navigation/GameBar';

import '../../assets/stylesheets/navigation/feedbar.css';
import '../../assets/stylesheets/newsfeed/newsfeedfeedbar.css';


class NewsfeedFeedBar extends Component {
  render() {
    return (
      <div className="feedbar">

        <div className="sort-bar">
          <div className="sort-chosen">All</div>
          <div className="">Likes</div>
          <div className="">Comments</div>
          <div className="">Judgements</div>
          <div className="sort-bar-leftover"></div>
        </div>
        <GameBar />

      </div>
    );
  }
}

export default NewsfeedFeedBar;
