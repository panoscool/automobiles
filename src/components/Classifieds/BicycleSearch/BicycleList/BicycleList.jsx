import React from "react";
import BicycleListItem from "./BicycleListItem";
import BicycleGridItem from "./BicycleGridItem";

const ClassifiedList = ({ view, bicycles }) => {
  if (!view) {
    return (
      <div className="grid-view">
        {bicycles.map(bicycle => (
          <BicycleGridItem
            key={bicycle.id}
            id={bicycle.id}
            title={bicycle.manufacturer}
            price={bicycle.price}
            color={bicycle.color}
            category={bicycle.category}
            purchased={bicycle.purchased}
            gears={bicycle.gears}
            img={bicycle.img}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        {bicycles.map(bicycle => (
          <BicycleListItem
            key={bicycle.id}
            id={bicycle.id}
            title={bicycle.manufacturer}
            price={bicycle.price}
            color={bicycle.color}
            category={bicycle.category}
            purchased={bicycle.purchased}
            gears={bicycle.gears}
            img={bicycle.img}
          />
        ))}
      </div>
    );
  }
};

export default ClassifiedList;
