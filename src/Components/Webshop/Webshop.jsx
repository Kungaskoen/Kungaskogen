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
      <p>Du kan beställa Kungaskogen hos två distributörer:
        <a href="http://wasaplay.se/"> wasaplay.se </a>
        (förlagets hemsida) eller
        <a href="http://www.ilka.se/"> ilka.se </a>.
      </p>
      <p><a href="http://wasaplay.se/" className="extra">Wasaplay nätbutik</a>
        , här hittar du det mesta av Kungaskogens material.
      </p>
      <a href="http://www.ilka.se/" className="extra">ILKA nätbutik</a>
    </div>
  </div>

);

export default webshop;
