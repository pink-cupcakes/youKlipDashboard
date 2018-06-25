import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../assets/stylesheets/upload/upload.css';


class Upload extends Component {


  render() {
    return (
      <div className="upload">
        <h3 className="upload-title"> VIDEO UPLOAD </h3>
        <h4 className="upload-subtitle" > Upload a video to share with your friends </h4>
        <form className="upload-form" >
          <img  className="upload-img empty" alt="" src=""></img>
          <p className="upload-img-subtitle" >Paste a link below</p>
          <input className="upload-form-field" type="url" placeholder="Paste video link here" ></input>
          <input className="upload-form-field" type="text" placeholder="Title" ></input>
          <input className="upload-form-field" type="text" placeholder="Body" ></input>
          <input className="upload-form-submit" type="submit" value="SUBMIT" />
        </form>
      </div>
    );
  }
}

export default Upload;
