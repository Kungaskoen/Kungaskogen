import React from 'react';
import { Image } from 'react-bootstrap';

import './Ovriga.css';

const ovriga = props => (
  <div className="column-container">
    <div className="ovriga-image">
      <Image src="images/User/ovrigaanvandare.jpg" responsive></Image>
    </div>

    <div className="ovriga-info">
      <h3>Övriga användare</h3>

      <h4>Musiker/artister</h4>

      <p>Sagan om Vännerna i Kungaskogen är ju en saga som låter med hela 34 sånger. Ta gärna kontakt med förlaget om ni vill framföra vår
        musik. Vi hjälper er med noter, texter, ackordanalyser och underlag.</p>

      <h4>Barngympa</h4>
      <p>Den moderna och medryckande musiken till Kungaskogen passar till rörelser och dans. Ta gärna kontakt med förlaget om ni vill använda
        Kungaskogens musik och dans i speciella rörelseaktiviteter utanför marknad förskola/skola.</p>

      <h4>Kulturskolor</h4>
      <p>Välkommen att kontakta förlaget om ni vill jobba med vår musik och manus. Vi har praktiska notsamlingar av musiken. Många vill använda
        musiken i familjeevents på t.ex. förskola/skola mm.</p>

      <h4>Licensiering/företag mm.</h4>
      <p>Förfrågningar om att tillverka merchandise eller på annat sätt använda materialet med tema Kungaskogen och Snick och Snack görs på
        tel 040-120012 eller idea@ilka.se</p>

      <p>Välkomna till Kungaskogen där alla får vara med!</p>

    </div>
  </div>

);

export default ovriga;
