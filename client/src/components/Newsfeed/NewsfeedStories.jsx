import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../assets/stylesheets/newsfeed/newsfeedstories.css';
import storiesImg1 from '../../assets/images/stories-sample1.jpeg';

class NewsfeedStories extends Component {
  render() {
    return (
      <div className="newsfeedstories">
        <div className="stories-title"> Stories </div>

        <div className="stories-item">
          <div className="stories-item-userimg add-stories-img" >
            <i className="fas fa-plus"></i>
          </div>
          <div className="stories-item-username" > Add to Your Story </div>
          <div className="stories-item-time" > Upload a video of a play you made today </div>
        </div>

        <div className="stories-item">
          <img
            className="stories-item-userimg"
            src={storiesImg1} />
          <div className="stories-item-username" > Doublelift </div>
          <div className="stories-item-time" > 7 hours ago </div>

        </div>

      </div>
    );
  }
}

export default NewsfeedStories;
