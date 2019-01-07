import React from 'react';
import { Image } from 'react-bootstrap';

import './Miljo.css';

const mijo = props => (
  <div className="column-container miljo">

    <div className="miljo-image">
      <Image src="images/klimat_miljo.jpg" responsive />
    </div>

    <div className="mijo-info">

      <h3>Klimat och Miljö</h3>

      <p>Sagan och musiken om ”Vännerna i Kungaskogen” tar på flera ställen upp miljö och hållbarhet; t ex i sången ”Var rädd om naturen” och
        avsnittet om den påhittiga Grodans kretsloppscafé och hennes tekniska lösningar för återvinning i Multimiljömaskinen. Det finns också en
        hållbarhetssång som heter ”Multimiljömaskinen”. Avsnittet om Grodan Gronilla och hennes hållbarhetsarbete finns i boken ”Vännerna i
        Kungaskogen går på utflykt”. Raffe Räv ska också bygga en multimiljömaskin.</p>

      <p>Förlaget jobbar också internt med hållbarhet och arbetar aktivt för att sänka personalens och företagets negativa klimatpåverkan. Genom
        klimatkoll på nätet ligger personalens personliga klimatpåverkan under genomsnittet i Sverige. Förlaget tar hela tiden aktiv del i all info om
        hållbarhet och försöker ändra arbetet till vår allas bättre miljö.</p>

    </div>
  </div>

);

export default mijo;
