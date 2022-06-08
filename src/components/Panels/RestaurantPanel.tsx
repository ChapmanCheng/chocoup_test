import React, { useEffect, useState } from "react";
import axiosInstance from "../../resources/randomDataApiResources";
import type Restaurant from "../../types/Restaurant";
import extractAxiosData from "../../utilities/extracAxiosData";
import RestaurantCard from "../Cards/Restaurant";
import GridPanelLayout from "./HorizPanel";

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
    <GridPanelLayout>
      {restaurants.map((restaurant) => (
        <RestaurantCard data={restaurant} key={restaurant.uid} />
      ))}
    </GridPanelLayout>
  );
}
