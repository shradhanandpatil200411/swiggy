import { CARD_IMG } from "../utils/link";
import star from "../img/icon/icons8-army-star-30.png";

const Card = ({
  resName,
  cuisines,
  cardImg,
  starRating,
  time,
  areaName,
  DiscountHeader,
  DiscountSubheader,
}) => {
  return (
    <div className="card">
      <div className="card-img">
        <div className="img">
          <div className="discount">
            <span>{DiscountHeader}</span> <span>{DiscountSubheader}</span>
            {/* {console.log(Discount, "discount")} */}
          </div>
          <img src={CARD_IMG + cardImg} alt="card-img" />
        </div>
      </div>

      <div className="card-text">
        <div className="card-heading">
          <h2>{resName}</h2>
        </div>

        <div className="resInfo">
          <div className="starImg">
            <img src={star} alt="star" />
          </div>
          <div className="starRating">
            <h2>{starRating}/</h2>
          </div>
          <div className="deliveryTime">
            <h2>{time}</h2>
          </div>
        </div>
        <div className="cousine">
          <p>{cuisines.join(",")}</p>
        </div>
        <div className="areaName">
          <p>{areaName}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
