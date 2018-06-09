import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../assets/stylesheets/upload.css';


class Upload extends Component {
  render() {
    return (
      <div className="upload">
        <form>
          <input type="url" placeholder="paste video link here" ></input>
          <input type="text" placeholder="Video Title" ></input>
          <input type="text" placeholder="Body" ></input>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Upload;
