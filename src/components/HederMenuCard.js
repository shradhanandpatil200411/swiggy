import React from "react";
import { CARD_IMG } from "../utils/link";

function HederMenuCard({ img }) {
  return (
    <div className="menu-card">
      <div className="menu-card-img">
        <img src={CARD_IMG + img} alt="food-img" />
      </div>
    </div>
  );
}

export default HederMenuCard;
