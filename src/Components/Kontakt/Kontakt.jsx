import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Kontakt.css'

const kontakt = props => (
  <div className="kontakt-container">
    <div className="kontakt-image">
      <Image src="images/kontakt.jpg" responsive/>
    </div>


    <div className="kontakt-info">
      <h4>Kontaktadress</h4>

      <div className="compact">
        <p>Förlagshuset Wasa/ILKA </p>
        <p>(ILKA Förlagsprodukter AB/ILKA Förskoleprodukter AB, Wasa Music AB, Wasa Barnteater)</p>
        <p>Box 4059</p>
        <p>203 11 Malmö</p>
        <p>Sweden</p>
        <p>Tel: 040 120012</p>
        <p>idea@ilka.se</p>
        <p>org nr 556309 3961</p>
      </div>

      <br/>

      <div className="compact">
        <p>Kundservice hjälper Dig med beställningar, förfrågningar, biljetter Bioteater, bokning av Raffe Räv, fakturor,   mm</p>
        <p>Öppettider : </p>
        <p>Vardagar 9.00 - 14.30 (fast vi brukar svara senare än så). </p>
        <p>Skulle vi inte svara så ser vi Ditt telefonnummer och vi ringer upp.</p>
      </div>

      <p>Välkommen till Förlagshuset Wasa/ILKA</p>
    </div>
  </div>
)

export default kontakt;
