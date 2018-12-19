import React from 'react';
import styles from './Footer.css';

const Footer = (props) => {
  return (
    <div className={styles.container}>
      <p className={styles.creator}>
        © ironsoul 2019
      </p>
    </div>
  );
}

export default Footer;