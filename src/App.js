import React, { Component } from 'react';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Intro />
        <AboutMe />
        <Footer />
      </React.Fragment >
    );
  }
}

export default App;
