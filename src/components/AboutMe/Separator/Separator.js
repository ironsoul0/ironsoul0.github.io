import React from 'react';
import styles from './Separator.css';

const Separator = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.circle} />
      <div className={styles.circle} />
      <div className={styles.circle} />
    </div>
  );
}

export default Separator;