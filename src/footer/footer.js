import React, {Component} from 'react';
import HorizontalLogo from '../homepage/ovan-highres.png';
import './footer.css';

class Footer extends Component {
  render() {
    return (<div className="footer">

      <img src={HorizontalLogo} alt="Ovan Logo" className="footer-logo"/>

      <div className="center-buttons">

        <a href="#" className="contact-icon">
          <i class="fab fa-instagram fa-2x"></i>
        </a>
        <a href="#" className="contact-icon">
          <i class="fab fa-facebook-square fa-2x"></i>
        </a>
        <a href="#" className="contact-icon">
          <i class="fab fa-twitter-square fa-2x"></i>
        </a>

      </div>

      <small className="copyright">OVAN Ⓒ 2019 | Website by &nbsp;<a href="https://featherconsulting.net">Feather Consulting</a></small>
    </div>)
  }
}

export default Footer;
