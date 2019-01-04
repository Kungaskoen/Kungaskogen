import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

import './Nyheter.css';

const nyheter = props => (
  <div className="nyheter-container">
    <div className="nyheter-image">
      <Image src="images/Ovrigt/nyheter.jpg" responsive></Image>
    </div>

    <div className="nyheter-info">
      <h3>Nyheter</h3>

      <div className="compact">
        <h4>Nya sagor om ”Vännerna i Kungaskogen”</h4>
        <p>Två nya högläsningssagor har lagts in i accessen; ”Vi är kompisar, sa Snack och Snack” (hur man blir kompisar från allra första början och kan man ha kompisar i andra länder) och ”Vännerna i Kungaskogen firar jul”
          (vad är viktigt på julen och hur hjälper man andra).</p>

        <h4>Mer material i accessen</h4>
        <p>ABC i Kungaskogen, mer anknytningsmaterial till sagorna, Två större avdelningar LJUDDEL och VIKTIGT
          LÄRANDE (grunder läsa, skriva och räkna och en helt ny sångbok)</p>

        <h4>Ny film och musik</h4>
        <p>Ny julsång och film finns på YouTube! Vännernas jul</p>

        <h4>Socialt engagemang</h4>
        <p>Förlaget skänker lek – och sysselsättningsmaterial till ideellt arbetande second hand butik som med sina
          intjänande pengar hjälper andra.</p>
      </div>
    </div>
  </div>

);

export default nyheter;
