import React from 'react';
import { Image } from 'react-bootstrap';

import './Home.css'

const home = props => (

  <div className="home-image">
    <Image src="images/Framsida/wwwkungaskogen_2000_snicksnack_emblem_2.jpg" className="intro-normal"/>
    <Image src="images/Framsida/wwwkungaskogen_sid1_mobil_mindre.jpg"  className="intro-mobile"/>
  </div>

)

export default home;
