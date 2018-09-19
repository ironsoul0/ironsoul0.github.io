import React from 'react';
import BlogTemplate from '../BlogTemplate/BlogTemplate';
import styles from './Blog_NU.css';

const Blog_NU = (props) => {
  const disqusConfig = {
    url: 'https://ironsoul.me/blog/NU',
    identifier: 'NU',
    title: 'NU'
  };

  return (
    <BlogTemplate
      src={require('./Blog_NU.png')}
      alt="NU"
      heading="Поступление в Назарбаев Университет"
      disqusShortname="ironsoul-me"
      disqusConfig={disqusConfig}
    >
      <div className={styles.content}>
        <p style={{ marginTop: '0px' }}>
          Nurik i erzhik piska
        </p>
      </div>
    </BlogTemplate>
  );
}

export default Blog_NU;