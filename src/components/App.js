import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Contact from './Contact';
import Footer from './Footer';
import HeroImage from './HeroImage';
import Home from './Home';
import MainSection from './MainSection';
import Menu from './Menu';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Navbar />
          <HeroImage />
          <MainSection>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/menu" component={Menu} />
              </Switch>
          </MainSection>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
