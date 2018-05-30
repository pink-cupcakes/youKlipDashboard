import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../assets/stylesheets/home.css';


class Home extends Component {
  render() {
    return (
      <div className="Home">
        <iframe width="560" height="315"
          src="https://www.youtube.com/embed/V62pGsjKNKQ"
          frameborder="0"
          allow="autoplay; encrypted-media" allowfullscreen>
        </iframe>
        

      </div>
    );
  }
}

export default Home;
