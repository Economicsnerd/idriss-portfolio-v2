import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Card = (props) => {
  return (
    <div className="card">
      <img
        src={props.image}
        className="card-img-top"
        alt="project screenshot"
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-text">{props.category}</p>
      </div>
    </div>
  );
};

export default Card;
