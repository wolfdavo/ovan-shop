import React, {Component} from 'react';
import './home.css';
import '../global/global.css'
import Logo from './ovan-highres-vertical.png';
import Footer from '../footer/footer.js'

class Homepage extends Component {
  render() {
    return (<div className="homepage">
      <div className="header">
        <img src={Logo} className="header-logo" alt="Ovan Logo"/>
      </div>
      <div className="dark-section">
        <div className="textbody">
          <h1 className="thinner">Unprecidented exclusivity.</h1>
          <p>Every garment outside of the Myriad collection is one of a kind. <br/> Ovan collaborates with gifted artists from around the globe to design jaw-dropping, world class collections with distinct inspiration from each artist. Collections go to auction, where each garment is bid on individually. <br/> Only one of each design is ever made. <br/>  Ovan is distinctly recognisable, yet entirely unique.</p>
        </div>
        <button className="round-btn">Get notified on new collections</button>
      </div>
      <Footer/>
    </div>)
  }
}

export default Homepage;
