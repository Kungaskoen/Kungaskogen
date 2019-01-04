import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Image} from 'react-bootstrap';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';


const toolbar = props => (
  <div className="toolbar">
    <nav className="toolbar_nav">
      <div className="toolbar_logo">
        <Link to="/" >
          <Image src="images/Welcome/flagga_kungaskogen.png" responsive className="toolbar-logo"/>
        </Link>
      </div>

      <div className="spacer"></div>

      <div className="menubar-container">
        <ul className="menubar">
          <li className="dropdown">
            <a>OM</a>
            <ul className="dropdown-items">
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

          <li className="dropdown">
            <a>PRODUKTER</a>
            <ul className="dropdown-items">
              <li><Link to="/produkter">Produkter</Link></li>
              <li><Link to="/webshop">Webshop</Link></li>
            </ul>
          </li>

          <li className="dropdown">
            <a>MUSIK</a>
            <ul className="dropdown-items">
              <li><Link to="/musik">Musik/Media</Link></li>
              <li><Link to="/musikforlag">Musikförlag</Link></li>
              <li><Link to="/radio">Radio/TV</Link></li>
            </ul>
          </li>

          <li className="dropdown">
            <a>TEATER</a>
            <ul className="dropdown-items teater">
              <li><Link to="/bioteater">Bioteater</Link></li>
              <li><Link to="/raffe">Raffe Räv Hälsar På</Link></li>
              <li><Link to="/play">Spela Teater</Link></li>
            </ul>
          </li>

          <li className="dropdown">
            <a>ANVÄNDARE</a>
            <ul className="dropdown-items">
              <li><Link to="/skola">Förskola/Skola</Link></li>
              <li><Link to="/privat">Privata Hem</Link></li>
              <li><Link to="/ovriga">Övriga</Link></li>
            </ul>
          </li>

          <li className="dropdown">
            <a>ÖVRIGT</a>
            <ul className="dropdown-items ovrigt">
              <li><Link to="/nyheter">Nyheter</Link></li>
              <li><Link to="/fragor">Vanliga Frågor</Link></li>
              <li><Link to="/mera">Mera</Link></li>
              <li><Link to="/miljo">Klimat och Miljö</Link></li>
            </ul>
          </li>

          <Link to ="/access" className="access"><li className="dropdown">ACCESS</li></Link>
        </ul>
      </div>

      <div className="toolbar_toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
    </nav>
  </div>
);

export default toolbar;
