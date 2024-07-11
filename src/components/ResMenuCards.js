import React from "react";

function ResMenuCards({ resMenuData }) {
  // console.log(resMenuData, "resMenuData");
  const { title } = resMenuData?.card?.card;
  // const type = _.get(resMenuData.card.card, "@type");

  return (
    <div className="res-menu-card">
      <div className="res-menu-heading">
        <span>{title}</span>
      </div>
      {/* <div className="card-left">
        <div className="veg-non-logo">
          <img src="" alt="veg-non-logo" />
          <div className="bestseller-tag">Bestseller</div>
        </div>
        <div className="dish-name">
          <h1>Upma</h1>
        </div>
        <div className="price">
          <h2>92Rs</h2>
        </div>
        <div className="menu-card-rating">
          <h2>4.7</h2>
        </div>
      </div>
      <div className="card-right">
        <div className="dish-img">
          <img src="" alt="dish-img" />
          <button>ADD</button>
        </div>
      </div> */}
    </div>
  );
}

export default ResMenuCards;
