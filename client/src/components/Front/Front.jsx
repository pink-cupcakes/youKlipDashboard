import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FeedBar from '../Navigation/FeedBar';
import VideoGrid from '../Video/VideoGrid';

import '../../assets/stylesheets/front/front.css';


class Front extends Component {
  render() {
    return (
      <div className="front">
        <h1 className="front-feed-title"> FRONT PAGE </h1>
        <FeedBar />
        <VideoGrid />
      </div>
    );
  }
}

export default Front;
