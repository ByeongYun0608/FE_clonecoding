import React from "react";
import "./Card.css";

const Card = ({ image, text }) => {
  return (
    <div className="card">
      <img src={image} alt="Card" className="card-img" />
      <div className="card-body">
        <p className="card-text">{text}</p>

        <div className="card-footer">
          <div className="btn-group">
            <button className="btn-half">View</button>
            <button className="btn-half border-left">Edit</button>
          </div>
          <small className="text-muted">9 mins</small>
        </div>
      </div>
    </div>
  );
};

export default Card;