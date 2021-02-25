import React from 'react';
import { Image } from 'react-bootstrap';

import './Produkter.css'

const produkter = props => (
  <div className="produkter-container">

    <div className="produkter-intro">
      <p><b>Det finns två baspaket om "Snick och Snack och Vännerna i Kungaskogen"</b></p>
      <p>En presentation av <a href="https://youtu.be/rYAB-VF_tsY"> <b>"Snick och Snack och Vännerna i Kungaskogen"</b> </a></p>
      <p>Läs om hela matrialet <a href="https://pub.mediapaper.se/8b997c35-a156-43d4-a50a-e1c1c27a2244" target="_blank" rel="noopener noreferrer"><b>Kungaskogen E-katalog</b></a></p>
    </div>

    <h2 className="produkter-header-normal">Produkter – Tema vänskap, djur och natur</h2>
    <h2 className="produkter-header-mobile">Produkter</h2>

    <div className="line"/>

    <div className="produkt-big">
      <Image src="images/produkter/kojan.jpg" responsive />
      <p><b>Art.nr 4671</b> Temapaket 1 Kojan – Bok+2 CD+noter+Access</p>
      <p>BOK med totalt 48 sidor. Stort liggande format (30 cm x 20 cm) med
        BILDBEREÄTTELSE om kompisarna Snick och Snack som bygger en koja och
        träffar nya vänner. 12 st SÅNGER och NOTER finns med i boken. Vidare
        ingår 2 CD SKIVOR med ungefärlig speltid på nära 2 timmar. På CD
        skivorna finns dialoger, berättare, sång och musik (finns också på
        APP som man kan spela från Ipad). Paketet innehåller också ACCESS
        Handledning (nedladdningsmaterial, över 600 sidor på nätet) med fakta,
        övningar, aktiviteter enligt läroplanens mål som anknyter till sagans
        teman. En Ljuddel och en stor avdelning Viktigt lärande finns också med
        i accessen. </p>
    </div>

    <div className="line"/>

    <div className="produkt-big">
      <Image src="images/produkter/utflykt.jpg" responsive />
      <p><b>Art.nr 4683</b> Temapaket Snick och Snack Vännerna i Kungaskogen går
        på utflykt. ( Vänskap, djur, natur, miljö, livsstil, hållbart, teknik,
          språk, matte mm)</p>
      <p>BOK med totalt 82 sidor, stort liggande format (30 cm x 20 cm) som är
        indelad i KOJAN (12 sidor), SKOGEN (26 sidor), HOS GRONILLA (18 sidor)
        och 19 st SÅNGER och NOTER. Vidare ingår 3 CD SKIVOR med ungefärlig
        speltid på nära 3 timmar. På CD skivorna finns dialoger, berättare,
        sång och musik (finns också på APP som man kan spela från Ipad). Paketet
        innehåller också ACCESS Handledning (nedladdningsmaterial, över 600 sidor
        på nätet) med fakta, övningar, aktiviteter enligt läroplanens mål som
        anknyter till sagans teman. En Ljuddel och en stor avdelning Viktigt
        lärande finns också med i accessen. ???Lyssna på Bitis som berättar
        om boken???</p>
    </div>

    <div className="line"/>


    <div className="produkt-dolls">
      <div className="doll">
        <Image src="images/produkter/7handdockor_gruppbild.jpg" responsive />
        <p><b>Art.nr 4669 Handdockor Vännerna i Kungaskogen Kojan </b></p>
        <p>Set om 7 st handdockor (ca 30 cm höga) med design och karaktärer till
          Vännerna i Kungskogen bygger en koja. Tillverkade i mjukt tygmaterial.
          CE-märkta enligt EN-71. Dramatisera och lek till sagan om Vännerna
          i Kungaskogen med handdockor.</p><p>Filma greenscreen med våra handdockor <a href="https://youtu.be/0jHTD7OcelY"> <b>"Klicka här"</b> </a></p>
      </div>
      <div className="doll">
        <Image src="images/produkter/handdockor_utflykt.jpg" responsive />
        <p><b>Art.nr 4684 Handdockor Utflykt</b></p>
        <p>Set om 3 st handdockor (groda, fjäril och larv). I boken boken om
          Utflykt tillkommer 2 nya karaktärer (larven Silke som blir en fjäril
          och grodan Gronilla). Dramatisera och lek till sagan om Vännerna i
          Kungaskogen med handdockor.</p>
      </div>

    </div>

    <div className="line"/>

    <div className="almanacka">
      <div className="almanacka-image">
        <Image src="images/produkter/270_almanackstavla_mindre.jpg" responsive/>
      </div>

      <div className="almanacka-info">
        <p><b>Art.nr 270 Barnens Almanackstavla Calendo</b></p>
        <p>Lärtavla med bilder från Kungaskogen och karaktärer. Markera med röda
träpluggar (markörer) och lär månader, veckodagar, årstider, kläder man
har på sig, datum 1-31, högtider, väderlek, termometer. Tavlan kan hela
tiden hållas aktuell. Bild tryckt direkt på träet. Närproducerat inom EU.
CE-märkt och testad enligt EN 71.</p>
        <p>Mått: 42x30 cm </p>
      </div>
    </div>

    <div className="line"/>

    <div className="produkt-rest">
      <div className="rest-item">
        <Image src="images/produkter/bioteater.jpg" responsive />
        <p><b>Art.nr 467010 </b>
        Bioteater Vännerna i Kungaskogen.</p>
      </div>
      <div className="rest-item">
        <Image src="images/produkter/rafferav.jpg" responsive />
        <p><b>Art.nr 467008 </b>
        Raffe Räv hälsar på – teater. Visas på förskolan.</p>
      </div>
      <div className="rest-item">
        <Image src="images/produkter/verktygslåda.jpg" responsive />
        <p><b>Art.nr 1109 </b>
        Raffes verktygslåda</p>
      </div>
      <div className="rest-item">
        <Image src="images/produkter/memo.jpg" responsive />
        <p><b>Art.nr 2374 </b>
        Kungaskogen Memo, 50 delar</p>
      </div>
    </div>

    <div className="produkt-rest">
      <div className="rest-item">
        <Image src="images/produkter/pussel_360.jpg" responsive />
        <p><b>Art.nr 360 </b></p>
        <p>Pussel Snick och Snack bygger koja</p>
      </div>
      <div className="rest-item">
        <Image src="images/produkter/pussel_362.jpg" responsive />
        <p><b>Art.nr 362 </b></p>
        <p>Pussel Snick och Snack kalas i skogen</p>
      </div>
      <div className="rest-item">
        <Image src="images/produkter/lagerpussel.jpg" responsive />
        <p><b>Art.nr 2256 </b></p>
        <p>Lagerpussel Kojan</p>
      </div>
      <div className="rest-item">
        <Image src="images/produkter/tshirt.jpg" responsive />
        <p><b>Art.nr 8561-8565 T-shirt, </b>3-4 år, 4-6 år, Small, Medium, Large</p>
      </div>
    </div>

    <div className="produkt-rest">
      <div className="rest-item">
        <Image src="images/produkter/parlplattor.jpg" responsive />
        <p><b>Art.nr 52126 </b></p>
        <p>Pärlplattor 6 st, Kungaskogen</p>
      </div>
      <div className="rest-item">
        <Image src="images/produkter/parlor.jpg" responsive />
        <p><b>Art.nr 52234 </b></p>
        <p>Pärlmix djur Kungaskogen, ca 3000 st</p>
      </div>
      <div className="rest-item">
        <Image src="images/produkter/klistermarken.jpg" responsive />
        <p><b>Art.nr 4603 </b></p>
        <p>Klistermärken Kungaskogen</p>
      </div>
      <div className="rest-item">
        <Image src="images/produkter/papper.jpg" responsive />
        <p><b>Art.nr 5645 </b></p>
        <p>Kartongpack Kungaskogen</p>
      </div>
    </div>

    <div className="produkt-rest">
      <div className="rest-item">
        <Image src="images/produkter/matteleken.jpg" responsive />
        <p><b>Art.nr 2371 </b></p>
        <p>Saker Kungaskogen Familjespel</p>
      </div>
      <div className="rest-item">
        <Image src="images/produkter/quartetto.jpg" responsive />
        <p><b>Art.nr 2372 </b></p>
        <p>Matteleken Kungaskogen Familjespel</p>
      </div>
      <div className="rest-item">
        <Image src="images/produkter/abc_app.jpg" responsive />
        <p><b>Art.nr 4658</b></p>
        <p>Kungaskogen ABC med Snick och Snack </p>
      </div>
      <div className="rest-item">
        <Image src="images/produkter/sangboken_app.jpg" responsive />
        <p><b>Art.nr 4660</b></p>
        <p>Kungaskogen sångbok</p>
      </div>
    </div>

    <div className="produkt-rest">
      <div className="rest-item">
        <Image src="images/produkter/kojan_app.jpg" responsive />
        <p><b>Art.nr 4663 </b> Snick och Snack </p>
        <p>Vännerna i Kungaskogen bygger en koja</p>
      </div>
      <div className="rest-item">
        <Image src="images/produkter/utflykt_app.jpg" responsive />
        <p><b>Art.nr 4664 </b> Snick och Snack </p>
        <p>Vännerna i Kungaskogen går på utflykt</p>
      </div>
      <div className="rest-item">
        <Image src="images/produkter/14sanger.jpg" responsive />
        <p><b>Art.nr 4665 </b></p>
        <p>14 sånger Kojan</p>
      </div>
      <div className="rest-item">
        <Image src="images/produkter/19sanger.jpg" responsive />
        <p><b>Art.nr 4666 </b></p>
        <p>19 sånger Utflyk</p>
      </div>

    </div>
  </div>
);

export default produkter;
