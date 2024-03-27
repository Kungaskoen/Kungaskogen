import React from 'react';
import { Image } from 'react-bootstrap';

import './Musikforlag.css';

const musikforlag = props => (
  <div className="row-big-container musikforlag">
    <div className="musikforlag-image">
      <Image src="images/Musik/musik_label_allavannerna_800pixlar.jpg" responsive />
    </div>

    <div className="musikforlag-info">
      <h3>Musikförlag/Label</h3>

      <Image src="images/Musik/WasaMusic_logga.jpg" id="musik-logga"/>

      <div className="compact">
        <p>Wasa Music AB</p>
        <p>Box 4059</p>
        <p>203 11 Malmö</p>
      </div>

      <br/>

      <div className="compact padding-top">
        <p>040-12 00 12</p>
        <p>idea@ilka.se</p>
      </div>

      <p>Förlaget är medlem i Stim. Musiken är NCB registrerad. Text och kompositörer är också med i Skap.</p>

      <h4>Studio</h4>
      <p>Vi har egen inspelningsstudio och hjälper till med demos och musikinspelningar.
        Kontakt är samma som förlaget.</p>

    </div>
  </div>

);

export default musikforlag;
