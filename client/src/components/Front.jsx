import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FeedBar from './FeedBar';

import VideoGrid from './Video/VideoGrid';
import '../assets/stylesheets/home.css';


class Front extends Component {
  render() {
    return (
      <div className="home">
        <h1 className="home-feed-title"> FRONT PAGE </h1>
        <FeedBar />
        <VideoGrid />

      </div>
    );
  }
}

export default Front;
