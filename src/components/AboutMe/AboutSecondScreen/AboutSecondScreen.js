import React from 'react';
import HelloWords from '../HelloWords/HelloWords';
import styles from './AboutSecondScreen.css';
import Separator from '../Separator/Separator';
import Skills from '../Skills/Skills';
import Connections from '../Connections/Connections';

const AboutSecondScreen = (props) => {
  return (
    <div className={styles.container}>
      <HelloWords />
      <Separator />
      <Skills />
      <Separator />
      <Connections />
    </div>
  );
}

export default AboutSecondScreen;