import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import CardContainer from "./components/HomeCardContainer";
import "./CSS/style.css";
import TopRestaurant from "./components/TopRestaurant";
import CarouselMenu from "./components/CarouselMenu";

const AppData = () => {
  return (
    <div>
      <Navbar />
      <CarouselMenu />
      <TopRestaurant />
      <CardContainer />
    </div>
  );
};

export default AppData;
