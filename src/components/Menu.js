import React, { useState } from "react";
import ResMenuCards from "./ResMenuCards";

function Menu({ filterCategory }) {
  const [showIndex, setShowIndex] = useState(null);
  return (
    <div>
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
        {filterCategory?.map((resMenuItem, index) => {
          return (
            <ResMenuCards
              resMenuData={resMenuItem}
              key={index}
              show={showIndex === index ? true : false}
              showItem={() => setShowIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
