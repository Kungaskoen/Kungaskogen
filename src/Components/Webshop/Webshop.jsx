import React, { Component } from 'react';
import {Image} from 'react-bootstrap';

import './Webshop.css';


const webshop = props => (
  <div className="webshop-container">
      <div className="webshop-image">
        <Image src="images/webshop.jpg" responsive/>
      </div>
      <div className="webshop-info">
        <h3>Webshop</h3>
        <p>Du kan beställa Kungaskogen hos två distributörer:
          <a href="http://wasaplay.se/"> wasaplay.se</a> (förlagets hemsida) eller <a href="http://www.ilka.se/">ilka.se</a></p>
        <p className="big-text"><a href="http://wasaplay.se/" className="extra">Wasaplay nätbutik</a>, här finns allt Kungaskogens material.</p>
        <a href="http://www.ilka.se/" className="extra">ILKA nätbutik</a>
      </div>
  </div>
);

export default webshop;
