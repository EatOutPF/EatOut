import React from "react";
import style from "./RestaurantCard.module.css";
import axios from "axios";

const RestaurantCard = ({ restaurant }) => {
  /* -------MERCADOPAGO--------- */
  const handlerClick = () => {
    axios
      .post("http://localhost:3001/payment", restaurant)
      .then((res) => (window.location.href = res.data.response.init_point));
  };

  return (
    <div className={style.containerCard}>
      <h1>{restaurant.name}</h1>
      <p>{restaurant.kindFood}</p>
      <p>advance: {restaurant.advance}</p>
      {restaurant.advance > 1 && (
        <button onClick={handlerClick}> Pagar Reserva </button>
      )}

      <br />
    </div>
  );
};

export default RestaurantCard;
