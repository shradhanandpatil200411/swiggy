import React, { useEffect, useState } from "react";
import Card, { isOpen } from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Shimmer from "../page/Shimmer";
import { NavLink } from "react-router-dom";

function TopRestaurant() {
  const [topRestaurant, setTopRestaurant] = useState([]);
  const [topResHeader, setTopResHeader] = useState("");
  useEffect(() => {
    fetchTopRestaurantsData();
  }, []);

  const fetchTopRestaurantsData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.24630&lng=73.13150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const topResData = await data.json();

    const filterTopData = topResData.data.cards.filter((f) => {
      return f.card.card.id === "top_brands_for_you";
    });
    console.log(filterTopData, "filterTopData");

    setTopRestaurant(
      filterTopData[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setTopResHeader(filterTopData[0]?.card?.card?.header?.title);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const IsOpenHigherOrderFun = isOpen(Card);
  // eslint-disable-next-line no-lone-blocks
  {
    return topRestaurant.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="top-res-container">
        <div className="card-res-heading">
          <h1>{topResHeader}</h1>
        </div>
        <div className="top-res-card-container">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {topRestaurant.map((topRes) => {
              const {
                name,
                cuisines,
                cloudinaryImageId,
                avgRating,
                areaName,
                id,
              } = topRes.info;
              const { deliveryTime } = topRes?.info?.sla;
              return (
                <NavLink to={"restaurant/" + id} key={id} className="nav-link">
                  {topRes?.info?.isOpen ? (
                    <IsOpenHigherOrderFun
                      resName={name}
                      cuisines={cuisines}
                      cardImg={cloudinaryImageId}
                      starRating={avgRating}
                      time={deliveryTime}
                      areaName={areaName}
                      DiscountHeader={
                        topRes?.info?.aggregatedDiscountInfoV3?.header
                      }
                      DiscountSubheader={
                        topRes?.info?.aggregatedDiscountInfoV3?.subHeader
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
                        topRes?.info?.aggregatedDiscountInfoV3?.header
                      }
                      DiscountSubheader={
                        topRes?.info?.aggregatedDiscountInfoV3?.subHeader
                      }
                    />
                  )}
                </NavLink>
              );
            })}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default TopRestaurant;
