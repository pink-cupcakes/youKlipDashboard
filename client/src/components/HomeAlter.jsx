import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FeedBar from './FeedBar';
import MainVideo from './MainVideo';

import VideoGrid from './VideoGrid';
import '../assets/stylesheets/home.css';


class HomeAlter extends Component {
  render() {
    return (
      <div className="home">
        <h1 className="home-feed-title"> FRONT PAGE </h1>
        <FeedBar />


      </div>
    );
  }
}

export default HomeAlter;