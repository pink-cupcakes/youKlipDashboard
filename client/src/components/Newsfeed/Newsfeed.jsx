import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NewsfeedFeedBar from './NewsfeedFeedBar';
import NewsfeedVideo from './NewsfeedVideo';
import NewsfeedStories from './NewsfeedStories';
import NewsfeedCurrentlyPlaying from './NewsfeedCurrentlyPlaying';

import '../../assets/stylesheets/newsfeed/newsfeed.css';


class Newsfeed extends Component {
  render() {
    return (
      <div className="newsfeed">
        <NewsfeedFeedBar />
        <main>
          <NewsfeedVideo />
          <div className="newsfeed-side-right">
            <NewsfeedStories />
            <NewsfeedCurrentlyPlaying />
          </div>
        </main>

      </div>
    );
  }
}

export default Newsfeed;
