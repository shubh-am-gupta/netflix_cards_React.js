import React from "react";
import "./index.css";

function Card(props) {
  return (
    <div className="card" >
      <img src={props.imgsrc} alt="mypic" className="card-img" />
      <div className="card-body">
        <span className="card_category">{props.title}</span>
        <h4 className="card-title">{props.sname}</h4>
        <a
          href={props.link}
          target="_blank"
          className="btn btn-outline-success"
        >
          Watch Now
        </a>
      </div>
    </div>
  );
}

export default Card;
