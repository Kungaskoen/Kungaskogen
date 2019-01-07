import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import './Footer.css'

export default class Footer extends Component {

  render() {
    return (
      <div className="footer-container">
        <div className="footer-info">
          <ul>
            <li>
              <h4> Kundservice </h4>
              <p> idea@ilka.se </p>
              <p> 040 - 120012 </p>
            </li>
            <li>
              <Link to="/kontakt" className="footer-link">
                <h4> Kontakt </h4>
              </Link>
            </li>
            <li>
              <Link to="/press" className="footer-link">
                <h4> Press </h4>
              </Link>
            </li>
            <li>
              <Link to="/language" className="footer-link">
                <h4>Language</h4>
              </Link>
            </li>
          </ul>
        </div>

        <div className="spacer"></div>

        <div className="footer-images">
          <Image src="images/forlagshusetwasa_krona.png"  className="loga-wasa"/>
          <Image src="images/ilkaloggavit.png"  className="loga-ilka"/>
        </div>

      </div>
    )
  }
}
