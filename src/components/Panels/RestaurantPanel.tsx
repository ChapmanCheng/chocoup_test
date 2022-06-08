import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios";
import type Restaurant from "../../type/Restaurant";
import extractAxiosData from "../../utilities/extracAxiosData";
import RestaurantCard from "../Cards/Restaurant";
import HorizPanel from "./HorizPanel";

export default function RestaurantPanel() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  useEffect(() => {
    axiosInstance
      .get("/restaurant/random_restaurant")
      .then(extractAxiosData)
      .then(setRestaurants)
      .catch(console.error);
  }, []);

  return (
    <HorizPanel>
      {restaurants.map((restaurant) => (
        <RestaurantCard data={restaurant} key={restaurant.uid} />
      ))}
    </HorizPanel>
  );
}