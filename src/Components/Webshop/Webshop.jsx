import React from 'react';
import {Image} from 'react-bootstrap';

import './Webshop.css';


const webshop = props => (

  <div className="row-container webshop">
    <div className="webshop-image">
      <Image src="images/webshop.jpg" responsive/>
    </div>
    <div className="webshop-info">
      <h3>Webshop</h3>
      <p>Du kan beställa Kungaskogen på:
        <a href="http://forskoleprodukter.se/"> www.forskoleprodukter.se </a>


      </p>
      <p>
        här hittar du det mesta av Kungaskogens material.
      </p>

    </div>
  </div>

);

export default webshop;
