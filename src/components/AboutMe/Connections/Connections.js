import React from 'react';
import styles from './Connections.css';

const Connections = (props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        Как меня можно найти?
      </h2>
      <div className={styles.images}>
        <div className={styles.imagesFirst}>
          <a href="https://t.me/roigold7" rel="noopener noreferrer" target="_blank" className={styles.telegram}>
            <img
              src={require('../../../assets/images/telegram.png')}
              className={styles.image}
              alt="Telegram"
            />
          </a>
          <a href="https://vk.com/magictima" rel="noopener noreferrer" target="_blank">
            <img
              src={require('../../../assets/images/vk.png')}
              className={styles.image}
              alt="VK"
            />
          </a>
        </div>
        <div className={styles.imagesSecond}>
          <a href="https://www.linkedin.com/in/temirzhan-yussupov-a3a050100/" rel="noopener noreferrer" target="_blank" className={styles.linkedin}>
            <img
              src={require('../../../assets/images/linkedin.png')}
              className={styles.image}
              alt="LinkedIn"
            />
          </a>
          <a href="https://www.instagram.com/yussupovtima/" rel="noopener noreferrer" target="_blank">
            <img
              style={{ marginRight: '0px' }}
              src={require('../../../assets/images/instagram.png')}
              className={styles.image}
              alt="Instagram"
            />
          </a>
        </div>
      </div>
    </div >
  );
}

export default Connections;