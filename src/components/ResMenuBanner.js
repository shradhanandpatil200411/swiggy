import React from "react";
import star from "../img/icon/icons8-army-star-30.png";

function ResMenuBanner({
  areaName,
  avgRatingString,
  costForTwoMessage,
  cuisines,
  totalRatingsString,
  sla,
  feeDetails,
}) {
  return (
    <div className="restaurant-menu-card">
      <div className="rating">
        <div className="starImg">
          <span>
            <img src={star} alt="star" />
          </span>
          <span>
            <h3 className="menu-rating">
              {avgRatingString}({totalRatingsString})
            </h3>
          </span>
        </div>
        <div className="const-for-two">
          <h2>{costForTwoMessage}</h2>
        </div>
      </div>
      <div className="res-category">
        <h3>{cuisines?.join(", ")}</h3>
      </div>
      <div className="delivery-time">
        <div className="delivery-loc-logo">
          <div className="start-point"></div>
          <div className="middle-point"></div>
          <div className="end-point"></div>
        </div>
        <div>
          <div className="rest-loc">
            <span className="outlet">
              <h2>Outlet</h2>
            </span>
            <span className="loc">{areaName}</span>
          </div>
          <h2 className="time">{sla?.slaString}</h2>
        </div>
      </div>
      <div className="delivery-charges">
        <div className="delivery-logo">
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/" +
              feeDetails?.icon
            }
            alt="delivery-logo"
          />
        </div>
        <h3 className="charges">
          {sla?.lastMileTravelString} | {feeDetails?.totalFee / 100} Rs Delivery
          fee will apply
        </h3>
      </div>
    </div>
  );
}

export default ResMenuBanner;
