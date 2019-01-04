import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Medverkande.css'

export default class Medverkande extends Component {

  render() {
    return (
      <div className="medverkande-container">
        <div className="medverkande-image">
          <Image src="images/medverkande.jpg" responsive/>
        </div>
        <h2>Medverkande i dialoger och musik "Vännerna i Kungaskogen"</h2>

        <div className="medverkande-info-container">
          <div className="medverkande-info">
            <h3>”Vännerna i Kungaskogen bygger en koja”</h3>

            <p>Medverkande på dubbelalbum (art nr VIKS 7390, NCB)</p>
            <p>Musik, sång och dialoger.</p>
            <p>Berättare: Börje Ahlstedt</p>
            <p>Text till dialoger: Lisa Grane</p>
            <p>Kompositörer: Joc Lind, Lisa Grane, Vilhelm Ersmark</p>

            <h4>Musik/Musiker</h4>

            <p>Arrangemang: Vilhelm Ersmark</p>
            <p>Trummor, akustisk gitarr, elgitarr, synt,</p>
            <p>ukulele, rytminstrument: Vilhelm Ersmark</p>
            <p>Dragspel: Rolf Alm</p>
            <p>Flöjt, saxofon och klarinett: Olle Schnipper</p>
            <p>Piano: P O Nilsson, Vilhelm Ersmark</p>
            <p>Bas: Jonas Reingold, Ulf Rådelius</p>

            <br/>
            <p>Inspelning gjord i Big Street studio och Jinglebeat studio.</p>
            <p>Mixning: Henrik Larsson</p>
            <p>Sångproducent: Daniel Zangger Borch</p>
            <p>Noter: Ulf Rådelius</p>
            <p>Sång: Lisa & Ville</p>
            <p>Sångtexter: Lisa Grane</p>
            <p>Musik: Vilhelm Ersmark, Joc Lind</p>

            <h4>Roller</h4>
            <p>Snick: Magnus Ödén</p>
            <p>Snack: Joakim Narin</p>
            <p>Raffe: Joakim Narin</p>
            <p>Bitis: Maria Norgren</p>
            <p>Hotta: Karin Mannerström</p>
            <p>Maraca: Elin Abelin</p>
            <p>Älgvis: Magnus Ödén</p>

            <h4>Låtar</h4>
            <p>1. Vännervisan Text: Lisa Grane Musik: Lisa Grane & Joc Lind</p>
            <p>2. Egenskapsrapp Text: Lisa Grane Musik: Vilhelm Ersmark</p>
            <p>3. Vicka vicka Text: Lisa Grane Musik: Joc Lind</p>
            <p>4. Ingen vill leka med mig) Text: Lisa Grane Musik: Joc Lind</p>
            <p>5. Älgvis sång Text: Lisa Grane Musik: Joc Lind</p>
            <p>6. Gyllene regeln Text: Lisa Grane Musik: Joc Lind</p>
            <p>7. Var rädd om naturen Text: Lisa Grane & Anna Lagberg Musik: Joc Lind</p>
            <p>8. Kärlekslåt Text: Lisa Grane Musik: Vilhelm Ersmark & Joc Lind</p>
            <p>9. Lekvisan Text: Lisa Grane Musik: Joc Lind</p>
            <p>10. Maracas sång Text: Lisa Grane Musik: Vilhelm Ersmark & Joc Lind</p>
            <p>11. Vännerorkestern Musik: Joc Lind</p>
            <p>12. Hipp hurra födelsedag Text: Lisa Grane Musik: Vilhelm Ersmark & Joc Lind</p>

          </div>
          <div className="medverkande-info">
            <h3>”Vännerna i Kungaskogen går på utflykt”</h3>

            <p>Medverkande tripplralbum (art nr VIKS 7370, NCB)</p>
            <p>Musik, sång och dialoger.</p>
            <p>Text till dialoger: Lisa dos Santos</p>
            <p>Kompositörer: Joc Lind, Lisa dos Santos, Vilhelm Ersmark</p>
            <br/>

            <p>Sång: Ville och Vännerorkestern</p>

            <h4>Musik/Musiker</h4>

            <p>Paul Bocciolone Strandberg: Klarinett, kornett, barytonhorn, banjo och tuba</p>
            <p>Vilhelm Ersmark: Trummor, piano, akustisk gitarr, elgitarr, synt, rytminstrument</p>
            <p>Gunilla Ibérer: Piano ragtime</p>
            <p>Joc Lind: Synt</p>
            <p>Samuel Lundström: Elbas, gitarr, piano</p>
            <p>Markus Nilsson: Trummor ragtime</p>
            <p>P O Nilsson: Piano, percussion, elbas, orgel, gitarr, dragspel, synt</p>
            <p>Johan Pihleke: Elgitarr Filip Runesson: Fiol</p>
            <p>Peter Lundblad: Instrument och arr. Mumsfillibabba</p>
            <p>Ulf Rådelius: Bas</p>
            <p>Walle Wahlgren: Trummor</p>
            <p>Sång: Vilhelm Ersmark, Lisa dos Santos, Sara Lehmann, Elin Malmgren, Andreas Gustafsson Winkle, Sophie Binder, Klara Öhman</p>
            <p>Skratt: Magnus Ödéhn, Elin Abelin, Andreas Gustafsson Winkle, Sophie Binder, Klara Öhman</p>

            <br/>

            <p>Arrangemang: Vilhelm Ersmark, Joc Lind, PO Nilsson</p>
            <p>Mixning: Samuel Lundström, PO Nilsson</p>
            <p>Sångproducent: Daniel Zangger Borch</p>
            <p>Noter: Ulf Rådelius</p>

            <br/>

            <p>Mastring: Cutting Room</p>
            <p>Inspelningen gjord i Big Street Studio/Studio PO Nilsson</p>

            <h4>Roller</h4>
            <p>Snick: Magnus Ödéhn</p>
            <p>Snack: Magnus Ödéhn</p>
            <p>Raffe: Joakim Narin</p>
            <p>Bitis: Maria Norgren</p>
            <p>Hotta: Karin Mannerström</p>
            <p>Maraca: Elin Abelin</p>
            <p>Älgvis: Magnus Ödéhn</p>
            <p>Gronilla: Anneli Heed</p>
            <p>Silke: Mala Kyndel</p>
            <p>Berättare: Magnus Ödéhn</p>

            <h4>Låtar</h4>
            <p>1. Kojanskoj Text: Lisa dos Santos Musik: Joc Lind</p>
            <p>2. Räknemagirock Text: Lisa dos Santos Musik: Joc Lind</p>
            <p>3. Ramseliramstrams Text: Lisa dos Santos Musik: Joc Lind</p>
            <p>4. Packa packa väskan Text: Lisa dos Santos Musik: Joc Lind, Lisa dos Santos</p>
            <p>5. Väderklädervisan Text: Lisa dos Santos Musik: Joc Lind</p>
            <p>6. Powerwalk Text: Lisa dos Santos Musik: Joc Lind, Vilhelm Ersmark, Lisa dos Santos</p>
            <p>7. Dela med dig Text: Lisa dos Santos Musik: Joc Lind</p>
            <p>8. Upptäckarswing Text: Lisa dos Santos Musik: Joc Lind</p>
            <p>9. Silkes sång Text: Lisa dos Santos Musik: Joc Lind</p>
            <p>10. Vilsevisan Text: Lisa dos Santos Musik: Joc Lind</p>
            <p>11. Leendevisan Text: Lisa dos Santos Musik: Joc Lind</p>
            <p>12. Alla utom jag Text: Lisa dos Santos Musik: Joc Lind</p>
            <p>13. Gronillasången Text: Lisa dos Santos Musik: Joc Lind</p>
            <p>14. Vännerdixie Text: Lisa dos Santos Musik: Joc Lind</p>
            <p>15. Mumsfillibabbasoppa Text: Lisa dos Santos Musik: Joc Lind</p>
            <p>16. Multimiljömaskinen Text: Lisa dos Santos Musik: Vilhelm Ersmark, Joc Lind</p>
            <p>17. Spökvisan Text: Lisa dos Santos Musik: Joc Lind</p>
            <p>18. Kojan piano Musik: Vilhelm Ersmark</p>
            <p>19 Alla djuren sover. Text: Lisa dos Santos Musik: Joc Lind	</p>
          </div>
        </div>
      </div>

    )
  }
}
