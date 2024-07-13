import React from "react";
import downArrow from "../img/icon/keyboard_arrow_down_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";
import CategoryItemCard from "./CategoryItemCard";

function ResMenuCards({ resMenuData, show, showItem }) {
  const { title, itemCards } = resMenuData?.card?.card;
  return (
    <div
      className="py-8 px-4 mt-5 cursor-pointer shadow-lg"
      onClick={() => {
        showItem();
      }}
    >
      <div className="res-menu-heading flex justify-between">
        <span className="font-bold">
          {title} ({itemCards.length})
        </span>
        <span>
          <img src={downArrow} alt="downArrow" />
        </span>
      </div>

      {show && <CategoryItemCard itemData={itemCards} />}
    </div>
  );
}

export default ResMenuCards;
