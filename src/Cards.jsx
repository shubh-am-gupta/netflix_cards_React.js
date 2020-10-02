import React from "react";
import "./index.css";

class Card extends React.Component {
  render(){
  return (
    <div className="card" >
      <img src={props.imgsrc} alt="mypic" className="card-img" style=" width:100%; height:auto; " />
      <div className="card-body">
        <span className="card_category">{props.title}</span>
        <h4 className="card-title">{props.sname}</h4>
        <a
          href={props.link}
          target="_blank"
          className="btn btn-outline-success"
          style="text-decoration:none; color:black; "
        >
          Watch Now
        </a>
      </div>
    </div>
  );
  }
}

export default Card;
