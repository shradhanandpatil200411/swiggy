import React, { useEffect, useState } from "react";
import OffersCards from "../components/OffersCards";
import ResMenuCards from "../components/ResMenuCards";
import { NavLink, useParams } from "react-router-dom";
import star from "../img/icon/icons8-army-star-30.png";
import Carousel from "react-multi-carousel";
import Shimmer from "./Shimmer";

function RestaurantMenu() {
  const [resMenu, setResMenu] = useState(null);
  const [menuOffer, setMenuOffer] = useState([]);
  const [filterCroutonMenu, setFilterCroutonMenu] = useState([]);

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

    // .................... Filter Offer ............................

    const filterOffer = jsonData.data.cards.filter((f) => {
      return f.card?.card?.id === "offerCollectionWidget_UX4";
    });

    // .......................Filter crouton Data...........................

    const filterCroutonMenu = jsonData.data.cards.filter((f) => {
      return f?.card?.relevance?.sectionId === "POP_UP_CROUTON_MENU";
    });

    // ..................................................................

    setResMenu(
      jsonData.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
    setMenuOffer(
      filterOffer[0]?.card?.card?.gridElements?.infoWithStyle?.offers
    );
    setFilterCroutonMenu(filterCroutonMenu[0]?.card?.card?.info);
  };
  if (resMenu == null) {
    return <Shimmer />;
  }
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

  const {
    name,
    areaName,
    avgRatingString,
    costForTwoMessage,
    cuisines,
    totalRatingsString,
    sla,
    feeDetails,
  } = filterCroutonMenu;
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
            {sla?.lastMileTravelString} | {feeDetails?.totalFee / 100} Rs
            Delivery fee will apply
          </h3>
        </div>
      </div>
      <div className="deals-offers">
        <div className="offer-heading">
          <h1>Deals for you</h1>
        </div>
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
          containerclassName="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListclassName="custom-dot-list-style"
          itemclassName="carousel-item-padding-40-px"
        >
          {menuOffer.map((offer) => {
            return (
              <OffersCards
                key={offer?.info?.restId}
                offerHeading={offer?.info?.header}
                coupon={offer?.info?.couponCode}
                offerLogo={offer?.info?.offerLogo}
              />
            );
          })}
        </Carousel>
      </div>
      <div className="menu-heading">
        <h2>~MENU~</h2>
      </div>
      <div className="menu-search-bar">
        <input type="text" placeholder="Search for dishes" />
      </div>
      <div className="menu-filter">
        <div className="filter">
          <span>Veg</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
        <div className="filter">
          <span>Non-Veg</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider non-veg"></span>
          </label>
        </div>
        <div className="bestseller filter">
          <span>Bestseller</span>
        </div>
      </div>
      <div className="menu-cards">
        {resMenu.map((resMenuItem, index) => {
          return <ResMenuCards resMenuData={resMenuItem} key={index} />;
        })}
      </div>
    </div>
  );
}

export default RestaurantMenu;
