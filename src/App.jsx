import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import Home from './components/Home/Home';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';
import Karaktarerna from './components/Karaktarerna/Karaktarerna';
import Upphovspersoner from './components/Upphovspersoner/Upphovspersoner';
import Bocker from './components/Bocker/Bocker';
import Footer from './components/Footer/Footer';
import Licens from './components/Licens/Licens';
import Forlag from './components/Forlag/Forlag';
import Historia from './components/Historia/Historia';
import Aterforsaljare from './components/Aterforsaljare/Aterforsaljare';
import Snabbfakta from './components/Snabbfakta/Snabbfakta';
import Medverkande from './components/Medverkande/Medverkande';
import AltNavbar from './components/AltNavbar/AltNavbar';
import Kontakt from './components/Kontakt/Kontakt';
import Integritet from './components/Integritet/Integritet';
import Youtube from './components/Youtube/Youtube';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Produkter from './components/Produkter/Produkter';
import Access from './components/Access/Access';
import Webshop from './components/Webshop/Webshop';
import Bioteater from './components/Bioteater/Bioteater';
import Raffe from './components/Raffe/Raffe';
import Play from './components/Play/Play';
import Skola from './components/Skola/Skola';
import Privat from './components/Privat/Privat';
import Ovriga from './components/Ovriga/Ovriga';
import Musikforlag from './components/Musikforlag/Musikforlag';
import Radio from './components/Radio/Radio';
import Musik from './components/Musik/Musik';
import Nyheter from './components/Nyheter/Nyheter';
import Links from './components/Links/Links';
import Fragor from './components/Fragor/Fragor';
import Mera from './components/Mera/Mera';
import Press from './components/Press/Press';
import Language from './components/Language/Language';
import Miljo from './components/Miljo/Miljo';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false
    };
    this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
    this.backdropClickHandler = this.backdropClickHandler.bind(this);
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {

    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }

    return (
      <Router>
        <div className="app">
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {backdrop}
          <div className="main">
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
            <Route path="/kontakt" component={Kontakt} />
            <Route path="/integritet" component={Integritet} />
            <Route path="/youtube" component={Youtube} />
            <Route path="/produkter" component={Produkter} />
            <Route path="/access" component={Access} />
            <Route path="/webshop" component={Webshop} />
            <Route path="/bioteater" component={Bioteater} />
            <Route path="/raffe" component={Raffe} />
            <Route path="/play" component={Play} />
            <Route path="/skola" component={Skola} />
            <Route path="/privat" component={Privat} />
            <Route path="/ovriga" component={Ovriga} />
            <Route path="/musikforlag" component={Musikforlag} />
            <Route path="/radio" component={Radio} />
            <Route path="/musik" component={Musik} />
            <Route path="/nyheter" component={Nyheter} />
            <Route path="/links" component={Links} />
            <Route path="/fragor" component={Fragor} />
            <Route path="/mera" component={Mera} />
            <Route path="/press" component={Press} />
            <Route path="/language" component={Language} />
            <Route path="/miljo" component={Miljo} />


          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
