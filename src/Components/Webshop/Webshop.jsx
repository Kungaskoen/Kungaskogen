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
        <a href="http://förskoleprodukter.se/"> förskoleprodukter.se </a> eller


      </p>
      <p><a href="http://wasaplay.se/" className="extra">wasaplay.se nätbutik</a>
        , här hittar du det mesta av Kungaskogens material.
      </p>

    </div>
  </div>

);

export default webshop;
