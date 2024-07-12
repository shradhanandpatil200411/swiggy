import { useEffect, useState } from "react";
import Card, { isOpen } from "./Card";
import Shimmer from "../page/Shimmer";
import { NavLink } from "react-router-dom";

const CardContainer = () => {
  const [search, setSearch] = useState("");
  const [restaurantData, setRestaurantData] = useState([]);
  const [filterRestaurantData, setFilterRestaurantData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.24630&lng=73.13150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    const filterOnlineData = jsonData.data.cards.filter((f) => {
      return f.card.card.id === "restaurant_grid_listing";
    });

    setRestaurantData(
      filterOnlineData[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurantData(
      filterOnlineData[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const IsOpenHigherOrderFun = isOpen(Card);

  // eslint-disable-next-line no-lone-blocks
  {
    return restaurantData.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="online-res-container">
        <div className="card-res-heading">
          <h1>Restaurants with online food delivery in Mumbai</h1>
          <div className="search-box flex">
            <input
              type="text"
              className="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span>
              <button
                className="search-btn"
                onClick={() => {
                  const filterResData = restaurantData.filter((filterData) => {
                    return filterData?.info?.name
                      .toLowerCase()
                      .includes(search.toLowerCase());
                  });
                  setFilterRestaurantData(filterResData);
                }}
              >
                Search
              </button>
            </span>
          </div>
        </div>
        <div className="card-container">
          {filterRestaurantData === 0 ? (
            <h1 style={{ color: "#fa8427" }}>Sorry No Data Found</h1>
          ) : (
            filterRestaurantData.map((restaurant) => {
              const {
                name,
                cuisines,
                cloudinaryImageId,
                avgRating,
                areaName,
                id,
              } = restaurant?.info;
              const { deliveryTime } = restaurant?.info?.sla;

              return (
                <NavLink to={"restaurant/" + id} key={id} className="nav-link">
                  {restaurant?.info?.isOpen ? (
                    <IsOpenHigherOrderFun
                      resName={name}
                      cuisines={cuisines}
                      cardImg={cloudinaryImageId}
                      starRating={avgRating}
                      time={deliveryTime}
                      areaName={areaName}
                      DiscountHeader={
                        restaurant?.info?.aggregatedDiscountInfoV3?.header
                      }
                      DiscountSubheader={
                        restaurant?.info?.aggregatedDiscountInfoV3?.subHeader
                      }
                    />
                  ) : (
                    <Card
                      resName={name}
                      cuisines={cuisines}
                      cardImg={cloudinaryImageId}
                      starRating={avgRating}
                      time={deliveryTime}
                      areaName={areaName}
                      DiscountHeader={
                        restaurant?.info?.aggregatedDiscountInfoV3?.header
                      }
                      DiscountSubheader={
                        restaurant?.info?.aggregatedDiscountInfoV3?.subHeader
                      }
                    />
                  )}
                </NavLink>
              );
            })
          )}
        </div>
      </div>
    );
  }
};

export default CardContainer;
