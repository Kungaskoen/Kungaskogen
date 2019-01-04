import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

import './Links.css';

const links = props => (
  <div className="links-container">
    <div className="links-image">
      <Image src="images/Ovrigt/lankar.jpg" responsive></Image>
    </div>

    <div className="links-info">
      <h3>Länkar</h3>
      <a href="">Kungaskogen på YouTube (Länk till Media YouTube)</a>
      <a href="">Kungaskogen E-katalog Petra gör en ny aktuell</a>
      <a href="">Kungaskogen Access E-katalog</a>
      <a href="">E-katalog Access Kungaskogen handledning. Klicka här och läs!</a>
      <a href="">Kungaskogen Teater E-katalog Ska vi göra en ny?</a>
      <a href="">Kungaskogen Raffe Räv hälsar på E-katalog</a>
      <a href="">Länk Raffe Räv hälsar på</a>
    </div>
  </div>

);

export default links;
