import React from "react";
import CarouselMenu from "../components/CarouselMenu";
import TopRestaurant from "../components/TopRestaurant";
import CardContainer from "../components/HomeCardContainer";

function Home() {
  return (
    <div>
      <CarouselMenu />
      <TopRestaurant />
      <CardContainer />
    </div>
  );
}

export default Home;
