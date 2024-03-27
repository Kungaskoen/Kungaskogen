import React from 'react';
import { Image } from 'react-bootstrap';

import './Nyheter.css';

const nyheter = props => (
  <div className="row-container nyheter">
    <div className="nyheter-image">
      <Image src="images/Ovrigt/nyheter.jpg" responsive></Image>
    </div>

    <div className="nyheter-info">
      <h3>Nyheter</h3>

      <div className="compact">
        <h4>Nya sagor om ”Vännerna i Kungaskogen”</h4>
        <p>Tre nya högläsningssagor har lagts in i accessen; <b>1. ”Vi är kompisar, sa Snack och Snack”</b> (hur man blir kompisar från allra första början och kan man ha kompisar i andra länder), <b>2. ”Vännerna i Kungaskogen firar jul”</b> (vad är viktigt på julen och hur hjälper man andra) och <b>3. ”Vännerna i Kungaskogen träffar nytt kompisgäng i Blåbärsskogen”</b>  (Nya kompisar, andra kompisgäng, skryta, ljuga, tävla,välja lag, tävla i lag, fuska, regler, samarbeta, hjälpas åt, vänskap, inkludering, natur, hållbart).</p>

        <h4>Mer material i accessen</h4>
        <p>Förutom nya sagor om Kungaskogen har två större avdelningar LJUDDEL och VIKTIGT LÄRANDE (grunder läsa, skriva och räkna och en helt ny sångbok) lagts in. Det finns också andra intressanta högläsningssagor i accessen och en mängd lärmaterial, I accessen finns i princip allt som läroplanen för förskolan föreskriver.</p>

        <h4>Ny film och musik</h4>
        <p>Nya sånger spelas in och nya videor läggs in på YouTube och Instagram.</p>

        <h4>Socialt engagemang</h4>
        <p>Förlaget skänker lek – och sysselsättningsmaterial till ideellt arbetande secondhandbutiker som med sina intjänande pengar hjälper andra.</p>
      </div>
    </div>
  </div>

);

export default nyheter;
