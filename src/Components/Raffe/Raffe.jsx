import React, { Component } from 'react';
import {Image} from 'react-bootstrap';

import './Raffe.css';


const raffe = props => (
  <div className="raffe-container">
      <div className="raffe-image">
        <Image src="images/Teater/rafferavhalsarpa.jpg" responsive/>
      </div>
      <div className="raffe-info">
        <h3>Raffe Räv hälsar på</h3>

        <div className="compact">
          <p>Raffe Räv kommer själv till skolan/förskolan/event och hälsar på.</p>
          <p>Det här är en föreställning där barnen är direkt delaktiga i föreställningen. Raffe sjunger och berättar om kompisar, vänskap, miljö och teknik och vad som händer i Kungaskogen. Lågt pris – alla har råd.</p>
        </div>

        <p>Barnen är med i föreställningen med dialog, dans, sång och rörelser. Föreställningen är hämtad ur böckerna om ”Vännerna i Kungaskogen”.</p>

        <div className="compact">
          <a href="">Länk Raffe Räv hälsar på</a>
          <p>I länken finns all information om föreställningen, pris etc.</p>
        </div>

        <div className="compact">
          <h4>Bokning</h4>
          <p>Bokning av Raffe Räv görs på 040-12 00 12 eller idea@ilka.se</p>
        </div>

      </div>
  </div>
);

export default raffe;
