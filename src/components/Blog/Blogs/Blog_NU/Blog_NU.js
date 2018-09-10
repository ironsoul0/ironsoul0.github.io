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
          Многие думают, что поступлению сюда далось мне легко, благодаря призовым местам
          на олимпиадах. Однако, это далеко не так :D. 13 июля, вместо заветного
          оффера, мне пришло письмо, о том, что приемная комиссия решила включить меня
          в список ожидания. Это означает, что у человека будет возможность быть принятым,
          только если кто-то из уже поступивших откажется от места. Благо, все обошлось и 25
          июля оффер все-таки пришел.
        </p>
        <p>
          При поступлении, я проходил пару собеседований. Они прошли
        </p>
      </div>
    </BlogTemplate>
  );
}

export default Blog_NU;