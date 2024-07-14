import React from "react";
import OffersCards from "./OffersCards";
import Carousel from "react-multi-carousel";

function ResMenuOfferCard({ filterOffer }) {
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
  return (
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
        {filterOffer[0]?.card?.card?.gridElements?.infoWithStyle?.offers.map(
          (offer) => {
            return (
              <OffersCards
                key={offer?.info?.restId}
                offerHeading={offer?.info?.header}
                coupon={offer?.info?.couponCode}
                offerLogo={offer?.info?.offerLogo}
              />
            );
          }
        )}
      </Carousel>
    </div>
  );
}

export default ResMenuOfferCard;
