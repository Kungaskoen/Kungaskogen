import React from 'react';
import { Image } from 'react-bootstrap';

import './Access.css'

const access = props => (

  <div className="access-container">
    <div className="access-image-container">

      <div className="access-image">
        <Image src="images/access/accesslogga.jpg" responsive />
      </div>

      <div className="access-info">
        <h3>Access Kungaskogen</h3>
        <a href="http://wasaplay.se/access/logform.php" target="_blank" rel="noopener noreferrer">Logga in på accessen</a>
        <p>Använd Ditt användarnamn och lösenord som Du fått med leveransen av Temapaket Kungaskogen.</p>

        <div className="compact">
          <p>Support och förfrågningar Kungaskogen Access</p>
          <p>idea@ilka.se</p>
          <p>040-12 00 12</p>
        </div>
      </div>

    </div>

    <div className="access-image-container">
      <div className="access-image">
        <div className="access-image-katalog">
          <Image src="images/access/framsida_ekatalog.jpg" responsive/>
        </div>
      </div>
      <div className="access-info">
        <p>
          Här finns en E-katalog om materialet i accessen. Ger en bra bild över det stora utbudet av pedagogiskt nedladdningsmaterial som kan
          användas för samtal, övningar och undervisning. Det mesta i läroplanens mål finns med. Även förberedd för nya läroplanen.
        </p>
        <a href="https://iqpager.quid.eu//books/iqpager/6744XKjNOE0y4c7TYF0G6744vuAMRCm0nG" target="_blank" rel="noopener noreferrer">E-katalog Access Kungaskogen handledning. Klicka här och läs!</a>
      </div>
  </div>

  </div>

);

export default access;
