import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FeedBar from './FeedBar';
import Video from './Video';

import '../assets/stylesheets/newsfeed.css';


class Newsfeed extends Component {
  render() {
    return (
      <div className="newsfeed">
        <div> Adjust Newsfeed as needed </div>
        <FeedBar />
        <Video />

      </div>
    );
  }
}

export default Newsfeed;
