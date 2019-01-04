import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Aterforsaljare.css'

export default class Aterforsaljare extends Component {

  render() {
    return (
      <div className="aterforsaljare-container">
        <div className="aterforsaljare-image">
          <Image src="images/aterforsaljare.jpg" responsive />
        </div>
        <div className="aterforsaljare-info">
          <h3>Distributörer och återförsäljare</h3>

          <h4>Återförsäljare Sverige Marknad förskola/skola/Privata konsumenter/Övriga</h4>
          <p>Förlagshuset Wasa - Wasaplay</p>
          <p>Box 4059</p>
          <p>203 11 Malmö</p>
          <p>Tel +46 40 120012</p>
          <p>idea@ilka.se</p>
          <p>org nr 556309 3961</p>
          <p>www.wasaplay.se</p>

          <h4>Återförsäljare Sverige Marknad förskola/skola</h4>
          <p>Trigonor Sverige AB</p>
          <p>Box 102</p>
          <p>452 23 Strömstad</p>
          <p>Tel: 0526 - 108 80</p>
          <p>ilka@trigonor.se</p>
          <p>www.ilka.se</p>

          <h4>Norge </h4>
          <p>Norskt musikforlag</p>
          <p>Postboks 1499 Vika, 0116 Oslo, </p>
          <p>Norway </p>
          <p>Tel 0047 23 00 20 10 </p>
          <p>post@musikkforlagene.no</p>
          <p>www.musikkforlagene.no</p>
        </div>
      </div>











    )
  }
}
