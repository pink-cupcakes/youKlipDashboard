import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../assets/stylesheets/navigation/search.css';


class Search extends Component {
  render() {
    return (
      <div className="search-all">
          <input className="search" placeholder="Search"></input>
          <button className="search-button"><i className="fas fa-search"></i></button>
      </div>
    );
  }
}

export default Search;
