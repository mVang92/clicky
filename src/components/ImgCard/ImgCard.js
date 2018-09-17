import React from "react";
import "./ImgCard.css";

const ImgCard = props => (
  <div className="card">
    <div className="img-container hvr-underline-from-center">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default ImgCard;
