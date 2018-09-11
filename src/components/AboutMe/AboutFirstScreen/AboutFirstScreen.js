import React, { Component } from 'react';
import styles from './AboutFirstScreen.css';
import Typist from 'react-typist';

const HEADER_HEIGHT = 120;

class AboutFirstScreen extends Component {
  state = {
    height: 0
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ height: window.innerHeight });
  }

  render() {
    const containerStyle = {
      height: this.state.height - HEADER_HEIGHT
    };

    return (
      <div className={styles.container} style={containerStyle}>
        <div className={styles.mainPart}>
          <Typist avgTypingDelay={110} className={styles.typist_name} cursor={{ element: '_', blink: true, show: true }}>
            <h1 className={styles.name} style={{ color: '#552FED' }}>
              i'm&nbsp;
          </h1>
            <h1 className={styles.name}>
              motivated
          </h1>
            <Typist.Backspace count={9} delay={300} />
            <h1 className={styles.name}>
              ambitious
          </h1>
            <Typist.Backspace count={9} delay={300} />
            <h1 className={styles.name}>
              energetic
          </h1>
            <Typist.Backspace count={9} delay={300} />
            <h1 className={styles.name}>
              ironsoul
          </h1>
          </Typist>
        </div>
      </div>
    );
  }
}

export default AboutFirstScreen;