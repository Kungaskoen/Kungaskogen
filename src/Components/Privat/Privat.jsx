import React from 'react';
import {Image} from 'react-bootstrap';

import './Privat.css'

const privat = props => (
  <div className="column-container">

    <div className="privat-image">
      <Image src="images/User/privatahem.jpg" responsive />
    </div>

    <div className="privat-info">
      <h3>Privata hem</h3>

      <p>Många föräldrar lär känna Snack och Snack och Kungaskogen genom förskolan och vill även kunna ha sagan och musiken för hemmabruk. Utöver sagobok med musik finns spel, handdockor, t-shirts mm.</p>

      <p>Privata användare för hem kan beställa produkterna på <a href="http://forskoleprodukter.se/" target="_blank" rel="noopener noreferrer">www.förskoleprodukter.se</a> eller 040-12 00-12.
      <p>eller e-post: idea@ilka.se</p>
       </p>
      <p>Välkomna till Kungaskogen!</p>
    </div>

  </div>
);

export default privat
