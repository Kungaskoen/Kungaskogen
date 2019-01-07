import React from 'react';
import { Image } from 'react-bootstrap';

import './Newbook.css';

const newbook = props => (

  <div className="column-container">
    <div className="newbook-image">
      <Image src="images/Ovrigt/nasta_bok_bild1.jpg" className="image-full"/>
    </div>

    <div className="newbook-info">

      <h3>Hur ser nästa bok om kungaskogen ut om barnen får bestämma?</h3>

      <h4>Vilka nya berättelser vill barnen höra om Snick och Snack och Vännerna i Kungaskogen?</h4>

      <div className="compact">
        <p>Vilka händelser kan vara viktiga? Vad tycker pedagoger?</p>
        <p>Mejla era önskemål till idea@ilka.se och påverka med just era synpunkter.</p>
        <p>Med barnens önskningar och pedagogers erfarenheter så blir det mera Kungaskogen!</p>
      </div>

    </div>

    <div className="newbook-image">
      <Image src="images/Ovrigt/nasta_bok_bild2.jpg" className="image-full"/>
    </div>
  </div>

);

export default newbook;
