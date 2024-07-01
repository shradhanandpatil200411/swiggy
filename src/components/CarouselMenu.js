import React, { useEffect, useState } from "react";
import HederMenuCard from "./HederMenuCard";
import Carousel from "react-multi-carousel";

function CarouselMenu() {
  const [menuData, setMenuData] = useState([]);
  const [menuHeader, setMenuHeader] = useState("");
  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.24630&lng=73.13150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();

    // ..... filter the data my swiggy api ...........
    const filterMenuData = jsonData.data.cards.filter((f) => {
      return f.card.card.id === "whats_on_your_mind";
    });
    console.log(filterMenuData, "filterMenuData");
    // ......................................................
    setMenuData(
      filterMenuData[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
    setMenuHeader(filterMenuData[0]?.card?.card?.header?.title);
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
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
  return (
    <div className="carousel-container">
      <div className="carousel-heading">
        <h1>{menuHeader}</h1>
      </div>
      <div className="menu-card-container">
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
          {menuData.map((item) => {
            return <HederMenuCard key={item.id} img={item.imageId} />;
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselMenu;
