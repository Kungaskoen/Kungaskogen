import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import Home from './Components/Home/Home';
import CustomNavbar from './Components/CustomNavbar/CustomNavbar';
import Karaktarerna from './Components/Karaktarerna/Karaktarerna';
import Upphovspersoner from './Components/Upphovspersoner/Upphovspersoner';
import Bocker from './Components/Bocker/Bocker';
import Footer from './Components/Footer/Footer';
import Licens from './Components/Licens/Licens';
import Forlag from './Components/Forlag/Forlag';
import Historia from './Components/Historia/Historia';
import Aterforsaljare from './Components/Aterforsaljare/Aterforsaljare';
import Snabbfakta from './Components/Snabbfakta/Snabbfakta';
import Medverkande from './Components/Medverkande/Medverkande';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CustomNavbar />
          <Route exact path="/" component={Home} />
          <Route path="/karaktarerna" component={Karaktarerna} />
          <Route path="/upphovspersoner" component={Upphovspersoner} />
          <Route path="/bocker" component={Bocker} />
          <Route path="/licens" component={Licens} />
          <Route path="/forlag" component={Forlag} />
          <Route path="/historia" component={Historia} />
          <Route path="/aterforsaljare" component={Aterforsaljare} />
          <Route path="/snabbfakta" component={Snabbfakta} />
          <Route path="/medverkande" component={Medverkande} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
