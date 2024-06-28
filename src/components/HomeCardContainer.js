import { useEffect, useState } from "react";
// import restaurantData from "../utils/dameData";
import Card from "./Card";
import Shimmer from "../page/Shimmer";

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
      return f.card.card.id == "restaurant_grid_listing";
    });
    console.log(filterOnlineData, "filterOnlineData");
    setRestaurantData(
      filterOnlineData[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurantData(
      filterOnlineData[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  {
    return restaurantData.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="online-res-container">
        <div className="card-res-heading">
          <h1>Restaurants with online food delivery in Mumbai</h1>
          <div className="search-box">
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
          {filterRestaurantData == 0 ? (
            <h1 style={{ color: "#fa8427" }}>Sorry No Data Found</h1>
          ) : (
            filterRestaurantData.map((restaurant) => {
              return (
                <Card
                  key={restaurant?.info?.id}
                  resName={restaurant?.info?.name}
                  cuisines={restaurant?.info?.cuisines}
                  cardImg={restaurant?.info?.cloudinaryImageId}
                  starRating={restaurant?.info?.avgRating}
                  time={restaurant?.info?.sla?.deliveryTime}
                  areaName={restaurant?.info?.areaName}
                  DiscountHeader={
                    restaurant?.info?.aggregatedDiscountInfoV3?.header
                  }
                  DiscountSubheader={
                    restaurant?.info?.aggregatedDiscountInfoV3?.subHeader
                  }
                />
              );
            })
          )}
        </div>
      </div>
    );
  }
};

export default CardContainer;
