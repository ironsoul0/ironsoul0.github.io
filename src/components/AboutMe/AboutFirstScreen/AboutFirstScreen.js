import React from 'react';
import styles from './AboutFirstScreen.css';
import Typist from 'react-typist';

const AboutFirstScreen = (props) => {
  return (
    <div className={styles.container}>
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

export default AboutFirstScreen;