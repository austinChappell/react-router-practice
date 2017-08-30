import React, { Component } from 'react';

class Contact extends Component {
  render() {
    const API_KEY = 'AIzaSyDlw5HMU3XlR-OnKRnV7OgHtFJiV5bL76A';
    const url = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=100+E+Main+St,+Spartanburg,+SC+29306/@34.949985,-81.933369,17z`;

    return (
      <div className="Contact">
        <div className="map-div">
          <h2>Directions</h2>
          <iframe src={url}></iframe>
          <p>Majestic Thai 100 Main Street, Spartanburg, SC, 29302</p>
        </div>
        <div className="contact-form-div">
          <h2>Contact Us</h2>
          <hr />
          <h3><i className="fa fa-phone" aria-hidden="true"></i> 864-456-6789</h3>
          <h3><i className="fa fa-envelope-o" aria-hidden="true"></i></h3>
          <input placeholder="Email" />
          <h3><i className="fa fa-pencil-square-o" aria-hidden="true"></i></h3>
          <textarea rows="5"></textarea>
          <button>Submit</button>
        </div>
      </div>
    )
  }
}

export default Contact;
