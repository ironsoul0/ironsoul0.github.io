import React from 'react';
import Header from '../../../Header/Header';
import Footer from '../../../Footer/Footer';
import { DiscussionEmbed } from "disqus-react";
import styles from './BlogTemplate.css';
import ScrollToTopOnMount from '../../../ScollToTopOnMount/ScrollToTopOnMount';

const BlogTemplate = (props) => {
  return (
    <React.Fragment>
      <ScrollToTopOnMount />
      <Header />
      <div className={styles.intro}>
        <img
          src={props.src}
          alt={props.alt}
          className={styles.image}
        />
        <h2 className={styles.heading}>
          {props.heading}
        </h2>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {props.children}
        </div>
      </div>
      <div className={styles.commentsWrapper}>
        <div className={styles.comments}>
          <DiscussionEmbed shortname={props.disqusShortname} config={props.disqusConfig} />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default BlogTemplate;