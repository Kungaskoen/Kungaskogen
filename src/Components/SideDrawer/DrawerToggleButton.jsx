import React from 'react';

import './DrawerToggleButton.css';

const drawerToggleButton = props => (

  <button className="toogle-button" onClick={props.click}>

    <div className="toogle-button_line"></div>
    <div className="toogle-button_line"></div>
    <div className="toogle-button_line"></div>

  </button>

);

export default drawerToggleButton;
