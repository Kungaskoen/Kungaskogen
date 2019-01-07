import React from 'react';
import {Image} from 'react-bootstrap';

import './Bioteater.css';


const bioteater = props => (
  <div className="column-container">
    <div className="bioteater-image">
      <Image src="images/Teater/bioteater_ny.jpg" responsive/>
    </div>

    <div className="bioteater-info">
      <h3>Bioteater</h3>
      <h4>Tema: Mot utanförskap och mobbning – Vänskap och att vara schysst och en bra kompis!</h4>

      <p>Bioföreställningen ”Vännerna i Kungaskogen” är hämtad ur bok- och musiksagan
        ”Snick och Snack Vännerna i Kungaskogen bygger en koja” som gjort succé på
        förskola och skola i hela Sverige med tema ”att vara schysst och en bra
        kompis” och som tar ställning mot mobbning och utanförskap. Över 20 000
        barn såg föreställningen förra året.</p>

      <p>I TV får barnen se hur man röstar ut varandra men i Kungaskogen får man
        vara med. Tusentals barn har hört, sjungit och tagit sagan till sitt hjärta
        på förskolor i hela Sverige. Barnen relaterar till sina förebilder Snick &
        Snack och hur de gjorde när de löste konflikter. Barnen får vara med när
        Snick och Snack ska bygga en koja och träffar nya vänner. De lär sig att
        samarbeta och att man ska vara goda vänner. Mycket sång och musik. Vuxna
        gillar också sagan. Alla sjunger med i de härliga vännersångerna.</p>

      <p>Föreställningen är producerad av Wasa Barnteater i Malmö och är Sveriges
        första digitala barnteater (avfilmad teater). Lämplig ålder: 3,5–8 år.
        (Förskola, förskoleklass och skolans första och andra klass.) Lågt biljettpris!</p>

      <p>Trailer på YouTube:</p>
      <a href="https://www.youtube.com/watch?v=5HDUwImaUkU&t=13s" target="_blank" rel="noopener noreferrer">Bioteater "Vännerna i Kungaskogen"</a>

      <h4>Bokning</h4>
      <div className="compact">
        <p>Bokning av bioteater görs på 040-12 00 12 eller idea@ilka.se</p>
        <a href="http://wasaplay.se/teater/" target="_blank" rel="noopener noreferrer">Bioteater</a>
        <p>I länken finns all info om Bioteater Kungaskogen, aktuell turnéplan och pris.</p>
        <p>Innan bokning läs ”Frågor och Svar” på Turnéplan vår 2019 på Bioteater.</p>
      </div>

      <h4>Biografer</h4>
      <p>Vi samarbetar med så gott som alla Sveriges biografer; Filmstaden,
        Svenska Bio, Folkets Hus och Parker, Eurostar, privata och kommunala
        biografägare. Biografer som ska visa ”Bioteater Kungaskogen” kontakta oss
        på 040-12 00 12 eller idea@ilka.se.</p>

      <h4>Arrangörer</h4>

      <p>Externa arrangörer (kommunala och privata) är välkomna med förfrågan om
        bioteater eller fysiska uppträdanden från tema Kungaskogen: egen visning
        av ”Bioteater Vännerna i Kungaskogen” eller föreställningen ”Raffe räv
        hälsar på”. Ett flertal såval kommuner som andra arrangörer har genomfört
        egna arrangemang. Kontakta 040 120012 eller idea@ilka.se</p>

      <a href="http://iqpager.quid.eu/books/iqpager/4406/key1472638923" target="_blank" rel="noopener noreferrer">
        Länk info externa arrangörer Bioteater
      </a>

      <h4>Det är det bästa vi någonsin gjort på förskolan!</h4>
      <p><b>Förskola i Linköping</b>: <i>Det här är det bästa vi
        någonsin gjort på förskolan. Föräldrarnas kommentarer: Wow, att ni gör sånt
        här tillsammans med barnen. Det är så viktigt att de får med sig detta
        upp i skolan. Hälsningar från femåringarna NI ÄR
        BÄÄÄÄÄÄST!</i></p>

      <div className="bioteater-slut">
        <div className="bioteater-slut-image">
          <Image src="images/Teater/bioteater_barn.jpg" responsive/>
        </div>

        <div className="bioteater-slut-info">
          <h4>Så här tycker andra</h4>
          <p>Gensvaret från våra föreställningar är mycket positivt.</p>

          <p>Publiken tycker:</p>
          <p><i>”Jättebra föreställning. Barnen var hela
            tiden mycket engagerade i hela föreställningen och på slutet dansade
            vi i bioraden till den härliga musiken. Det hela var fantastiskt.
            Det kunde inte bli bättre. TACK!”</i></p>
          <p><i>”Föreställningen var mycket bra och
            budskapet var tydligt. 10 poäng!!!!! Barnen var väldigt intresserade
            hela tiden och de hade absolut inte svårt att återberätta teatern när
            vi kom hem. De var med och sjöng och dansade i slutet och tyckte
            det var roligt.”</i></p>
          <p><i>”Jag såg att alla barnen njöt och jag tyckte
            att det var som teater när djuren talade till oss. Härligt. Vi dansade
            med. Det kändes som om skådespelarna/djuren var inne i salongen
            tillsammans med oss, så verkligt.”</i></p>
        </div>
      </div>
    </div>
  </div>
);

export default bioteater;
