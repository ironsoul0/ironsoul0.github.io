import React from "react";
import logo from "./logo.svg";
import picture from "./assets/me.jpg";
import Work from "./components/Work";
import bot from "./assets/indigo.svg";
import hh from "./assets/headhunter.png";

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <img src={logo} className="header__logo" />
        <a rel="noopener noreferrer" target="_blank" href="https://blog.ironsoul.me" className="header__link">
          Blog
        </a>
      </header>
      <main>
        <div className="main__content">
          <div className="main__left">
            <p className="main__entry">Glad to meet you, {`I'm`}</p>
            <h1 className="main__name">Temirzhan</h1>
            <h1 className="main__name" id="surname">
              Yussupov
            </h1>
            <p>I am a programming enthuasist liking to create and code different things.</p>
            <p>Besides of programming, I am also interested in the magic art and travelling.</p>
            <a
              className="main__button workWithMe actionButton"
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/ironsoul0"
            >
              Contact me
            </a>
          </div>
          <div className="main__right">
            <img src={picture} className="main__picture" />
          </div>
        </div>
        <div className="main__works">
          <h2>Projects</h2>
          <p className="main__contribution">Something I have worked on or contributed to:</p>
          <div className="main__works-row">
            <Work
              src={bot}
              desc="Telegram bot that makes life in NU easier"
              name="Indigo"
              link="https://t.me/nuhelper_bot"
            />
            <Work src={hh} desc="A communicative background game" name="HeadHunter" link="https://trytohunt.me" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
