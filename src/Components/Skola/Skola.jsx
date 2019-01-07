import React from 'react';
import {Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Skola.css';


const skola = props => (
  <div className="column-container">
      <div className="skola-image">
        <Image src="images/User/anvandare_forskola_skola.jpg" responsive/>
      </div>
      <div className="skola-info">

        <h3>Förskola/skola</h3>
        <a href="http://wasaplay.se/access/logform.php" target="_blank" rel="noopener noreferrer">Accessen</a>
        <div className="compact">
          <p><b>Support och förfrågningar Kungaskogen Access</b></p>
          <p>idea@ilka.se eller 040-12 00 12</p>
        </div>
        <a href="https://iqpager.quid.eu//books/iqpager/6744XKjNOE0y4c7TYF0G6744vuAMRCm0nG" target="_blank" rel="noopener noreferrer">E-katalog Access Kungaskogen handledning</a>


        <h4>Förskola/skola</h4>

        <p>Över 9000 förskolor/skolor arbetar med materialet ”Snick och Snack Vännerna i Kungaskogen”. Många använder materialet som genomgående tema år efter år och Snick och Snack genomsyrar hela verksamheten. Sagan bygger ju och stärker relationer. Berättelserna är
          händelser som barnen enkelt kan relatera till! Och det är viktigt med empati och att alla får en bra värdegrund. Konfliktlösnsing blir också

          enklare när man kan relatera till alla händelser i Kungaskogen och hur Snack och Snack gjorde. Sången och musiken stärker upp budskapen!

          Förskola/skola beställer materialet genom www.wasaplay.se tel 040-12 00 12 eller www.ilka.se eller tel 0526-108 80
          Webbshop </p>

        <h4>Så här jobbar andra förskolor </h4>
        <p>De allra flesta förskolor jobbar tematiskt med ”Vännerna i Kungaskogen” och använder access handledning. Det finns många teman i
          sagan: vänskap, kompisar, empati, värdegrunder, djur, natur, hållbart, språk, dans, musik, matte, teknik, miljö, livsstil, hälsa, olika kulturer,
          dialekter, årstider, högtider mm.
          Högläsning - samtal - sång - lek - aktiviteter ute och inne - pyssel - drama - teater. Googla gärna på några sökord: kungaskogen, snick och
          snack, älgvis, bitis, Raffe räv.</p>
        <h4>Sociala medier</h4>
        <p>Det finns en sluten Facebookgrupp som heter Kungaskogen som har uppkommit spontant genom användarna.
          På Facebook finns också Bioteater Vännerna i Kungaskogen, info och aktuell turnéplan.</p>

        <h4>Raffe Rävs brevlåda</h4>
        <p>Skriv och kommunicera med Raffe Räv.</p>

        <h4>Produkter</h4>
        <div className="compact">
          <a href="https://iqpager.quid.eu//books/iqpager/67903qUEQhSL7vEKn1RV6790bre0tPHUd1" target="_blank" rel="noopener noreferrer">Läs gärna i Kungaskogen E-katalog. Klicka här!</a>
          <p>Eller gå in på menyn <Link to="/produkter" className="link-page">Produkter</Link>.</p>
        </div>

        <h4>Så här tycker andra</h4>
        <p>Det som får arbetet med en barngrupp att fungera är just de grundläggande sociala bitarna som Kungaskogen handlar om till punkt och pricka. Kungaskogen
          har hjälpt oss enormt i arbetet runt likabehandling. Med hjälp av handdockorna händer det roliga saker på avdelningen då och då som barnen pratar mycket
          om. <b>Fyrens förskola</b></p>

        <p>Bra, kul och inspirerande material för både barn och pedagoger. Välgjord musik/text som barnen tagit till sig och gärna dansar och sjunger till. Vi har verkligen
          uppskattat tillgång till access-sidan där materialet har varit ett stort stöd i läroplanen för pedagogerna. Även materialet till de yngsta barnen har varit mycket
          användbart! Förskolan Vingåker
          Arbetet med Kungaskogen är väldigt uppskattat av pedagoger, barn och föräldrar. Barnen har lätt att ta till sig karaktärerna och vi pedagoger kan smidigt ta upp
          ett dilemma som hänt på avdelningen med hjälp av karaktärerna. Bra att det finns så mycket material på accessidan att välja på. <b>Jakobsbergsskogens</b> förskola</p>

        <p>Kungaskogen är ett komplett material där alla läroplanens mål är samlade. Det fångar barnen och de känner igen flera av situationerna. Barnen kan lätt iden-
          tifiera sig med djuren. Vi har ett projekt på vår förskola som sträcker sig över tre år. Det projektet handlar om kost och hälsa, lära barnen vikten av att äta
          rätt, rörelse, värna om sin hälsa och att det är viktigt med återhämtning och att värna om varandra. Det är lätt att väva in det i Kungaskogen. Känns som att
          det går hand i hand. <b>Förskolan Myrstacken</b></p>

        <p>Att huvudpersonerna är djur gör att barnen har lätt för att känna empati. Vi ser att det vi arbetar med ur boken är lätt att relatera till läroplanen. Detta har vi
          också påvisat för föräldrarna på föräldramöte. Kungaskogen har verkligen satt sin prägel på vår avdelning! <b>Förskolan Rävlyan</b></p>

        <h4>Synpunkter och feed back</h4>
        <p>Idéer, tankar, förslag mm gällande ”Vännerna i Kungaskogen” tas tacksamt emot av förlaget på idea@ilka.se eller tel 040-12 00 12.</p>

      </div>
  </div>
);

export default skola;
