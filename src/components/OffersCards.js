import React from "react";

function OffersCards({ offerHeading, coupon, offerLogo }) {
  return (
    <div className="offer-container">
      <div className="offer-card">
        <div className="offer-logo">
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/" +
              offerLogo
            }
            alt="offer-logo"
          />
        </div>
        <div className="offer-heading">
          <h1>{offerHeading}</h1>
          <p>{coupon}</p>
        </div>
      </div>
    </div>
  );
}

export default OffersCards;
