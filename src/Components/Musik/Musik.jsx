import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

import './Musik.css';

const musik = props => (

  <div className="column-container">

    <div className="musik-image">
      <Image src="images/Musik/varmusik.jpg" responsive />
    </div>

    <div className="musik-info">
      <h3>Vår musik/media</h3>

      <h4>Musik i kungaskogen</h4>

      <p>Det finns 34 musikverk som anknyter till musiksagorna om ”Snick och
        Snack Vännerna i Kungaskogen”. All musik är nyskriven på 2000-talet med
        tydliga och lättsjungna melodier i olika musikstilar. Barnen
        identifierar sig i sångtexterna som de lätt lär sig utantill.</p>

      <p>Musiken kan spelas från QR koder, Spotify, YouTube och för de som använder CD-skivor. Alla verk finns som
        noter med text och ackordanalyser i böckerna om ”Vännerna i
        Kungaskogen”. Noterna finns också i Accessen. Texterna finns också exakt
        som de sjungs på inspelningarna som extra dokument i Accessen. Enskilda
         notsamlingar från musiken i Kungaskogen kan rekvireras från förlaget. Förlaget kommer att ge ut en komplett sångbok med sångerna från Kungaskogen.</p>

      <h4>YOUTUBE</h4>

      <div className="youtube-container">

        <a href="https://www.youtube.com/watch?v=09ERI0nDwY0" target="_blank" rel="noopener noreferrer">
          <div className="youtube-link vicka">
            <Image src="images/youtube-512.png" className="youtube-icon" />
          </div>
          <h4>Raffe Räv - Vicka Vicka</h4>
        </a>

        <a href="https://www.youtube.com/watch?v=zOtA5paf7cE" target="_blank" rel="noopener noreferrer">
          <div className="youtube-link raknemagi">
            <Image src="images/youtube-512.png" className="youtube-icon" />
          </div>
          <h4>Raffe Räv - Räknemagi</h4>
        </a>

        <a href="https://www.youtube.com/watch?v=Tbm9DHQ-izI&t=5s" target="_blank" rel="noopener noreferrer">
          <div className="youtube-link mumsfilibabbasoppa">
            <Image src="images/youtube-512.png" className="youtube-icon" />
          </div>
          <h4>Mumsfilibabbasoppa - Raffe Räv</h4>
        </a>

        <a href="https://www.youtube.com/watch?v=AChEHJdyYE0" target="_blank" rel="noopener noreferrer">
          <div className="youtube-link jul">
            <Image src="images/youtube-512.png" className="youtube-icon" />
          </div>
          <h4>God Jul - Vännerna i Kungaskogen</h4>
        </a>

        <a href="https://www.youtube.com/watch?v=5HDUwImaUkU" target="_blank" rel="noopener noreferrer">
          <div className="youtube-link bioteater">
            <Image src="images/youtube-512.png" className="youtube-icon" />
          </div>
          <h4>Bioteater Trailer</h4>
        </a>

        <a href="https://www.youtube.com/watch?v=LfrfYrt8C2c" target="_blank" rel="noopener noreferrer">
          <div className="youtube-link mote">
            <Image src="images/youtube-512.png" className="youtube-icon" />
          </div>
          <h4>Kungamöte i Kungaskogen</h4>
        </a>

        <a href="https://www.youtube.com/watch?v=0o5Rup3jaoA" target="_blank" rel="noopener noreferrer">
          <div className="youtube-link barn">
            <Image src="images/youtube-512.png" className="youtube-icon" />
          </div>
          <h4>Raffe Räv hälsar på - Barnföreställning</h4>
        </a>

        <a href="https://www.youtube.com/watch?v=CqnpETBQ4kY" target="_blank" rel="noopener noreferrer">
          <div className="youtube-link pres">
            <Image src="images/youtube-512.png" className="youtube-icon" />
          </div>
          <h4>Kungaskogen - Raffe Räv presenterar</h4>
        </a>
      </div>

      <h4>Musik QR koder (tidigare CD-skivor)</h4>
      <p>QR koder har i vår produktion ersatt CD skivan (men de finns fortfarande kvar).
      QR koderna finns för förskolor i accessen och man kan spela upp musiks och dialoger direkt från QR koderna precis som en CD skiva.
      Alla berättelser och musik finns även på Spotify. I nya beställningar av böcker och temapaket följer QR koder med leveransen.</p>

        <a href="https://soundcloud.com/wasamusic/medley-kungaskogen-visor" target="_blank" rel="noopener noreferrer">Medley Kungaskogenvisor</a>
        <br/>

      <h4>Här är alla sånger i Kungaskogen:</h4>

      <h4>Sånger Bok 1 Vännerna i Kungaskogen bygger en koja</h4>

      <p>Finns på QR koder, Spotify (14 sånger), YouTube (14 sånger) och på CD 1 och CD 2.</p>
      <p>1. Vännervisan – <i>Vänskap på alla vis</i></p>
      <p>2. Egenskapsrapp – <i>Hur är du, hur är jag, vi är olika men lika bra</i></p>
      <p>3. Vicka vicka – <i>Ha kul tillsammans med rörelser</i></p>
      <p>4. Ingen vill leka med mig – <i>Om att vara ensam och utanför</i></p>
      <p>5. Älgvis sång – <i>Livsbejakande, att ta vara på livet</i></p>
      <p>6. Gyllene regeln – <i>Var mot andra som Du vill att de ska vara mot Dig</i></p>
      <p>7. Var rädd om naturen – <i>Aktsamhet i naturen</i></p>
      <p>8. Kärlekslåt – <i>Kärlek</i></p>
      <p>9. Lekvisan – <i>Leka tillsammans och ha kul</i></p>
      <p>10. Maracas sång – <i>Flykting från Sydamerika</i></p>
      <p>11. Vännerorkestern – <i>Talinslag från vännerna på olika dialekter</i></p>
      <p>12. Hipp hurra födelsedag – <i>Födelsedagsfirande</i></p>

      <h4>Sånger Bok 2 Vännerna i Kungaskogen går på utflykt</h4>
      <p>Finns på QR koder, Spotify (19 sånger), YouTube (19 sånger) och på CD 1, CD 2 och CD 3.</p>
      <p>1. Kojanskoj – <i>Att vara kompisar och bygga en trädkoja</i></p>
      <p>2. Räknemagirock – <i>Vi räknar kompisar i Kungaskogen</i></p>
      <p>3. Ramseliramstrams – <i>Vi ramsar och tramsar</i></p>
      <p>4. Packa packa väskan – <i>Jag packar saker i min väska</i></p>
      <p>5. Väderklädervisan – <i>Väder, kläder och årstider</i></p>
      <p>6. Powerwalk – <i>Röra på hela kroppen</i></p>
      <p>7. Dela med dig – <i>Att dela med sig och inte ta allt själv</i></p>
      <p>8. Upptäckarswing – <i>Att upptäcka saker i naturen</i></p>
      <p>9. Silkes sång – <i>När jag blir stor</i></p>
      <p>10. Vilsevisan – <i>Att gå vilse</i></p>
      <p>11. Leendevisan – <i>Le, skratta och vara glad</i></p>
      <p>12. Alla utom jag – <i>Alla kan något bra</i></p>
      <p>13. Gronillasången – <i>En groda som har idéer och är påhittig</i></p>
      <p>14. Vännerdixie – <i>Grodorkestern spelar svängig musik</i></p>
      <p>15. Mumsfillibabbasoppa – <i>Laga och äta nyttig soppa tillsammans</i></p>
      <p>16. Multimiljömaskinen – <i>Sortera sopor och skräp. Teknik och miljö. Återanvändning</i></p>
      <p>17. Spökvisan – <i>Finns det spöken?</i></p>
      <p>18. Kojan piano – <i>Vinjettmusik med fågelsång </i></p>
      <p>19. Alla djuren sover – <i>Vaggvisa</i></p>

      <h4>Övriga sånger i Kungaskogen</h4>
      <p>1. Kinasången – <i>Kompisar i andra länder</i></p>
      <p>2. Hej Snick, hej Snack – <i>Kompisvisa</i></p>
      <p>3. Vännernas Jul – <i>Julvisa</i></p>
      <p>1. och 2. finns på 14 sånger. 3 ligger separat på fil i accessen, Spotify och på You Tube.</p>

      <h4>Sociala medier</h4>

      <div className="compact">
        <p>Facebook länk: Här finns allt om teatern och hur man streamar vår teaterföreställning, Vännerna i Kungaskogen bygger en koja.</p>
        <a href="https://sv-se.facebook.com/pages/category/Website/Kungaskogen-Bioteater-686254724801813/" target="_blank" rel="noopener noreferrer" className="social-link">Facebook Bioteater Vännerna i Kungaskogen</a>
      </div>

      <br/>

      <div className="compact">
        <p>Instagram: Här finns ett helt flöde om Kungaskogen och vi lägger ut ny info hela tiden.</p>
        <a href="https://www.instagram.com/kungaskogen/" target="_blank" rel="noopener noreferrer" className="social-link">@kungaskogen</a>
      </div>

      <br/>

      <div className="compact">
      <p>Det finns också en sluten Facebookgrupp som initierats och sköts av användarna fritt kopplat från förlaget.</p>
      <a href="https://www.facebook.com/groups/333199206880190/" target="_blank" rel="noopener noreferrer" className="social-link">Facebooksgrupp sluten Kungaskogen Tips och Idéer</a>
      </div>

      <h4>Upphovspersoner till musiken</h4>
      <div className="compact">
        <p>Text: Lisa dos Santos</p>
        <p>Musik: Joc Lind/Vilhelm Ersmark</p>
        <p>Upphovspersonerna är medlemmar i Skap och Stim.</p>
        <p>Mer om <Link to="/upphovspersoner" className="link-page">Upphovspersonerna</Link>.</p>
      </div>
    </div>
  </div>

);

export default musik;
