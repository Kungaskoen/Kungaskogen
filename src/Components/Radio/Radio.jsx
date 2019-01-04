import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

import './Radio.css';

const radio = props => (
  <div className="radio-container">
    <div className="radio-image">
      <Image src="images/Musik/radio_tv.jpg" responsive />
    </div>

    <div className="radio-info">
      <h3>Radio/TV</h3>

      <div className="compact">
        <p>Musiken till ”Snick och Snack Vännerna i Kungaskogen” finns upplagd på SR Musikportalen som Wav.</p>
        <p>Andra radiostationer kan begära musikfiler via WeTransfer som Wav-filer.</p>
        <p>Mejla till idea@ilka.se och begär vilka filer ni önskar.</p>
      </div>

      <p>TV-kanaler är välkomna med förfrågningar om program som vill använda ”Snick & Snack och Vännerna i Kungaskogen”.</p>

      <p>Pressreleaser om Kungaskogen finns under <a href="">Press</a> på hemsidan.</p>

      <div className="compact">
        <p>Vänligen kontakta förlaget för vidare info.</p>
        <p>040-120012</p>
        <p>idea@ilka.se</p>
      </div>
    </div>
  </div>

);

export default radio;
