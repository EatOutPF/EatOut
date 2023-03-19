import React from "react";
import RestaurantCard from "../Card/RestaurantCard";
import style from "./RestaurantCards.module.css";

const RestaurantCards = () => {
  const restaurants = [
    {
      id: 1,
      name: "la Dorita del Botánico",
      kindFood: "Churrasqueria",
      advance: 0,
    },
    {
      id: 2,
      name: "Cucina D'Onore",
      kindFood: "italiana",
      advance: 100,
    },
    {
      id: 3,
      name: "RonConCon",
      kindFood: "Caribeña",
      advance: 150,
    },
  ];

  return (
    <div className={style.containerCard}>
      {restaurants.map((r) => (
        <RestaurantCard key={r.id} restaurant={r} />
      ))}
    </div>
  );
};

export default RestaurantCards;
