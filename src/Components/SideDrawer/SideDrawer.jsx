import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './SideDrawer.css'

function dropDownOm() {
  document.getElementById("om").classList.toggle("show");
}

function dropDownProducts() {
  document.getElementById("produkter").classList.toggle("show");
}

function dropDownMusik() {
  document.getElementById("musik").classList.toggle("show");
}

function dropDownTeater() {
  document.getElementById("teater").classList.toggle("show");
}

function dropDownUser() {
  document.getElementById("user").classList.toggle("show");
}

function dropDownOther() {
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
            <li><Link to="/">Länkar</Link></li>
            <li><Link to="/">Nyheter</Link></li>
            <li><Link to="/">Copyright</Link></li>
            <li><Link to="/">Nöjen Och Barnkultur</Link></li>
            <li><Link to="/">Arrangörer Barn</Link></li>
            <li><Link to="/">Utländsk Marknad</Link></li>
            <li><Link to="/">Vanliga Frågor</Link></li>
          </ul>
        </li>

        <li className="dropdown access"><Link to ="/access">ACCESS</Link></li>

      </ul>
    </nav>
  );
};

export default sideDrawer;
