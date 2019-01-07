import React from 'react';
import { Link } from 'react-router-dom';

import './SideDrawer.css'

function dropDownOm() {
  document.getElementById("om").classList.toggle("show");
  document.getElementById("produkter").classList.remove("show");
  document.getElementById("musik").classList.remove("show");
  document.getElementById("teater").classList.remove("show");
  document.getElementById("user").classList.remove("show");
  document.getElementById("other").classList.remove("show");
}

function dropDownProducts() {
  document.getElementById("om").classList.remove("show");
  document.getElementById("produkter").classList.toggle("show");
  document.getElementById("musik").classList.remove("show");
  document.getElementById("teater").classList.remove("show");
  document.getElementById("user").classList.remove("show");
  document.getElementById("other").classList.remove("show");
}

function dropDownMusik() {
  document.getElementById("om").classList.remove("show");
  document.getElementById("produkter").classList.remove("show");
  document.getElementById("musik").classList.toggle("show");
  document.getElementById("teater").classList.remove("show");
  document.getElementById("user").classList.remove("show");
  document.getElementById("other").classList.remove("show");
}

function dropDownTeater() {
  document.getElementById("om").classList.remove("show");
  document.getElementById("produkter").classList.remove("show");
  document.getElementById("musik").classList.remove("show");
  document.getElementById("teater").classList.toggle("show");
  document.getElementById("user").classList.remove("show");
  document.getElementById("other").classList.remove("show");
}

function dropDownUser() {
  document.getElementById("om").classList.remove("show");
  document.getElementById("produkter").classList.remove("show");
  document.getElementById("musik").classList.remove("show");
  document.getElementById("teater").classList.remove("show");
  document.getElementById("user").classList.toggle("show");
  document.getElementById("other").classList.remove("show");
}

function dropDownOther() {
  document.getElementById("om").classList.remove("show");
  document.getElementById("produkter").classList.remove("show");
  document.getElementById("musik").classList.remove("show");
  document.getElementById("teater").classList.remove("show");
  document.getElementById("user").classList.remove("show");
  document.getElementById("other").classList.toggle("show");
}


const sideDrawer = props => {

  let sideDrawerClasses = "side-drawer";

  if (props.show) {
    sideDrawerClasses = "side-drawer open";
  }

  return (
    <nav className={sideDrawerClasses}>
      <ul className="side-main-menu">
        <li className="side-menu-item">
          <a onClick={dropDownOm}>OM</a>
          <ul className="side-dropdown-menu" id="om">
            <li><Link to="/historia">Vår Historia</Link></li>
            <li><Link to="/snabbfakta">Snabbfakta</Link></li>
            <li><Link to="/karaktarerna">Karaktärer</Link></li>
            <li><Link to="/bocker">Böcker</Link></li>
            <li><Link to="/forlag">Förlag</Link></li>
            <li><Link to="/aterforsaljare">Återförsäljare</Link></li>
            <li><Link to="/upphovspersoner">Upphovspersoner</Link></li>
            <li><Link to="/medverkande">Medverkande</Link></li>
            <li><Link to="/licens">Licenser</Link></li>
          </ul>
        </li>

        <li className="side-menu-item">
          <a onClick={dropDownProducts}>PRODUKTER</a>
          <ul className="side-dropdown-menu" id="produkter">
            <li><Link to="/produkter">Produkter</Link></li>
            <li><Link to="/webshop">Webshop</Link></li>
          </ul>
        </li>

        <li className="side-menu-item">
          <a onClick={dropDownMusik}>MUSIK</a>
          <ul className="side-dropdown-menu" id="musik">
            <li><Link to="/musik">Musik/Media</Link></li>
            <li><Link to="/musikforlag">Musikförlag</Link></li>
            <li><Link to="/radio">Radio/TV</Link></li>
          </ul>
        </li>

        <li className="side-menu-item">
          <a onClick={dropDownTeater}>TEATER</a>
          <ul className="side-dropdown-menu" id="teater">
            <li><Link to="/bioteater">Bioteater</Link></li>
            <li><Link to="/raffe">Raffe Räv Hälsar På</Link></li>
            <li><Link to="/play">Spela Teater</Link></li>
          </ul>
        </li>

        <li className="side-menu-item">
          <a onClick={dropDownUser}>ANVÄNDARE</a>
          <ul className="side-dropdown-menu" id="user">
            <li><Link to="/skola">Förskola/Skola</Link></li>
            <li><Link to="/privat">Privata Hem</Link></li>
            <li><Link to="/ovriga">Övriga</Link></li>
          </ul>
        </li>

        <li className="side-menu-item">
          <a onClick={dropDownOther}>ÖVRIGT</a>
          <ul className="side-dropdown-menu" id="other">
            <li><Link to="/nyheter">Nyheter</Link></li>
            <li><Link to="/fragor">Vanliga Frågor</Link></li>
            <li><Link to="/mera">Mera</Link></li>
            <li><Link to="/miljo">Klimat och Miljö</Link></li>
          </ul>
        </li>

        <li className="dropdown access"><Link to ="/access">ACCESS</Link></li>

      </ul>
    </nav>
  );
};

export default sideDrawer;
