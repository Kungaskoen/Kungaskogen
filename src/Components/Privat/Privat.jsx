import React, {Component} from 'react';
import {Image} from 'react-bootstrap';

import './Privat.css'

const privat = props => (
  <div className="privat-container">
    <div className="privat-image">
      <Image src="images/User/privatahem.jpg" responsive></Image>
    </div>

    <div className="privat-info">
      <h3>Privata hem</h3>

      <p>Många föräldrar lär känna Snack och Snack och Kungaskogen genom förskolan och vill även kunna ha sagan och musiken för hemma-
        bruk. Utöver sagobok med musik finns spel, handdockor, t-shirts mm.</p>

      <p>Privata användare för hem kan beställa produkterna på www.wasaplay.se eller 040-12 00-12. <a href="">WASAPLAY nätbutik</a>.</p>
      <p>Välkomna till Kungaskogen!</p>
    </div>

  </div>
);

export default privat