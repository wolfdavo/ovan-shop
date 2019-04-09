import React, {Component} from 'react';
import './home.css';
import '../global/global.css'
import Logo from './ovan-highres-vertical.png';

class Homepage extends Component {
  render() {
    return (<div className="homepage">
      <div className="header">
        <img src={Logo} className="header-logo" alt="Ovan Logo"/>
      </div>
      <div className="dark-section">
        <div className="textbody">
          <h1 className="thinner">You haven't seen this before.</h1>
          <p>Every garment from an Ovan collection is one of a kind. Ovan collaborates with gifted artists from around the globe to design jaw-dropping, world class collections with distinct inspiration from each artist. Collections go to auction, where each garment is bid on individually. Only one of each design is ever made. Our garments are recognisable, yet entirely unique.</p>
        </div>
        <button className="round-btn">Get notified on new collections</button>
      </div>
    </div>)
  }
}

export default Homepage;
