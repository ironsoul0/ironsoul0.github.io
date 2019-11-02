import React from "react";
import "./Work.css";

interface WorkProps {
  src: string;
  desc: string;
  name: string;
  link: string;
}

const Work: React.FC<WorkProps> = props => (
  <div className="work">
    <a className="wrapper" target="_blank" rel="noopener noreferrer" href={props.link}>
      <div className="work__image" style={{ backgroundImage: `url(${props.src})` }} />
    </a>
    <h3 className="work__name">{props.name}</h3>
    <p className="work__desc">{props.desc}</p>
  </div>
);

export default Work;
