import React from "react";
import veg from "../img/icon/icons8-veg-48.png";
import nonVeg from "../img/icon/icons8-non-veg-48.png";
import { CARD_IMG } from "../utils/link";

function CategoryItemCard({ itemData }) {
  return (
    <div>
      {itemData.map((c) => {
        const { name, imageId, description, price, id } = c?.card?.info;
        const { vegClassifier } = c?.card?.info?.itemAttribute;
        return (
          <div
            className="flex justify-between border-b-[1px] border-gray-400 px-4 py-8"
            key={id}
          >
            <div className="w-8/12">
              {vegClassifier === "VEG" ? (
                <img src={veg} alt="veg-logo" />
              ) : (
                <img src={nonVeg} alt="non-veg-logo" />
              )}

              <h3 className="font-bold">{name}</h3>
              <h4>{price / 100}</h4>
              <p className="text-gray-500 overflow-y-hidden">{description}</p>
            </div>
            <div className="w-3/12 ">
              <div className="relative">
                <img
                  className="rounded-lg"
                  src={CARD_IMG + imageId}
                  alt="card-img"
                />

                <div className="absolute top-28 left-9">
                  <button className="shadow-lg px-8 py-2 text-green-400 font-bold rounded-lg bg-white">
                    ADD
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryItemCard;
