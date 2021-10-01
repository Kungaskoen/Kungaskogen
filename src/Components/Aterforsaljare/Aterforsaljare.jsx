import React from 'react';
import { Image } from 'react-bootstrap';

import './Aterforsaljare.css'

const aterforsaljare = props => (
  <div className="row-big-container aterfor">

    <div className="aterforsaljare-image">
      <Image src="images/aterforsaljare.jpg" responsive />
    </div>

    <div className="aterforsaljare-info">
      <h3>Distributörer och återförsäljare</h3>

      <div className="compact">
        <h4>Återförsäljare Sverige Marknad förskola/skola/privata/konsumenter/övriga</h4>
        <p>Förlagshuset Wasa - Förskoleprodukter</p>
        <p>Box 4059</p>
        <p>203 11 Malmö</p>
        <p>Tel +46 40 120012</p>
        <p>idea@ilka.se</p>
        <p>org nr 556309 3961</p>
        <p>www.forskoleprodukter.se</p>
      </div>



      
    </div>

    <div className="spacer-ater" />
  </div>
);

export default aterforsaljare;
