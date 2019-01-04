import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './Karaktarerna.css'

export default class Karaktarerna extends Component {

  render() {
    return (
      <div className="caracters-container">
        <div className="caracter-row">
          <div className="caracter">
            <Image src="images/caracters/raffe_bubbla.jpg" className="profile-pic" />
            <h3>Raffe Räv</h3>
          </div>
          <div className="caracter">
            <Image src="images/caracters/snack_bubbla.jpg" className="profile-pic" />
            <h3>Snack</h3>
          </div>
          <div className="caracter">
            <Image src="images/caracters/snick_bubbla.jpg" className="profile-pic" />
            <h3>Snick</h3>
          </div>
        </div>

        <div className="caracter-row">
          <div className="caracter">
            <Image src="images/caracters/algvis_bubbla.jpg" className="profile-pic" />
            <h3>Älgvis</h3>
          </div>
          <div className="caracter">
            <Image src="images/caracters/bitis_bubbla.jpg" className="profile-pic" />
            <h3>Bitis</h3>
          </div>
          <div className="caracter">
            <Image src="images/caracters/gronilla_bubbla.jpg" className="profile-pic" />
            <h3>Gronilla</h3>
          </div>
        </div>

        <div className="caracter-row">
          <div className="caracter">
            <Image src="images/caracters/hotta_bubbla.jpg" className="profile-pic" />
            <h3>Hotta</h3>
          </div>
          <div className="caracter">
            <Image src="images/caracters/maraca_bubbla.jpg" className="profile-pic" />
            <h3>Maraca</h3>
          </div>
          <div className="caracter">
            <Image src="images/caracters/silke_bubbla.jpg" className="profile-pic" />
            <h3>Silke</h3>
          </div>
        </div>
      </div>
    )
  }
}
