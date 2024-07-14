import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import ResMenuBanner from "../components/ResMenuBanner";
import ResMenuOfferCard from "../components/ResMenuOfferCard";
import Menu from "../components/Menu";

function RestaurantMenu() {
  const [resMenuData, setResMenuData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchMenuData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.24630&lng=73.13150&restaurantId=" +
        id
    );
    const jsonData = await data.json();
    setResMenuData(jsonData);
  };

  if (resMenuData == null) {
    return <Shimmer />;
  }

  // .................. Filter Category ..............................
  const filterCategory =
    resMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        return (
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  // .................... Filter Offer ............................

  const filterOffer = resMenuData?.data?.cards?.filter((f) => {
    return f.card?.card?.id === "offerCollectionWidget_UX4";
  });

  // .......................Filter crouton Data...........................

  const filterCrouton = resMenuData?.data?.cards?.filter((f) => {
    return f?.card?.relevance?.sectionId === "POP_UP_CROUTON_MENU";
  });

  const {
    name,
    areaName,
    avgRatingString,
    costForTwoMessage,
    cuisines,
    totalRatingsString,
    sla,
    feeDetails,
  } = filterCrouton[0]?.card?.card?.info;

  return (
    <div className="restaurant-container">
      <div className="small-navbar">
        <ul>
          <li>
            <NavLink className="small-nav" to="/">
              Home /
            </NavLink>
          </li>
          <li className="small-nav-name">{name}</li>
        </ul>
      </div>
      <div className="resHeading">
        <h1>{name}</h1>
      </div>
      <div>
        <ResMenuBanner
          areaName={areaName}
          avgRatingString={avgRatingString}
          costForTwoMessage={costForTwoMessage}
          cuisines={cuisines}
          totalRatingsString={totalRatingsString}
          sla={sla}
          feeDetails={feeDetails}
        />
      </div>
      <div>
        <ResMenuOfferCard filterOffer={filterOffer} />
      </div>
      <div>
        <Menu filterCategory={filterCategory} />
      </div>
    </div>
  );
}
export default RestaurantMenu;
