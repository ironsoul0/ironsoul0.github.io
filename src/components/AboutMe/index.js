import React, { Component } from 'react';
import Header from '../Header/Header';
import AboutFirstScreen from './AboutFirstScreen/AboutFirstScreen';
import AboutSecondScreen from './AboutSecondScreen/AboutSecondScreen';
import Footer from '../Footer/Footer';
import ScrollToTopOnMount from '../ScollToTopOnMount/ScrollToTopOnMount';

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <ScrollToTopOnMount />
        <Header about />
        <AboutFirstScreen />
        <AboutSecondScreen />
        <Footer />
      </React.Fragment>
    );
  }
}

export default About;
