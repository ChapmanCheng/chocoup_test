import React, { useEffect, useState } from "react";
import axiosInstance from "../../resources/randomDataApiResources";
import type Coffee from "../../types/Coffee";
import type Computer from "../../types/Computer";
import Restaurant from "../../types/Restaurant";
import extractAxiosData from "../../utilities/extracAxiosData";
import CoffeeCard from "../Cards/Coffee";
import ComputerCard from "../Cards/Computer";
import RestaurantCard from "../Cards/Restaurant";
import HorizPanel from "./HorizPanel";

const params = { size: 7 };
export default function OverviewPanel() {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [computers, setComputers] = useState<Computer[]>([]);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  useEffect(() => {
    axiosInstance
      .get("/computer/random_computer", { params })
      .then(extractAxiosData)
      .then(setComputers)
      .catch(console.error);
    axiosInstance
      .get("/coffee/random_coffee", { params })
      .then(extractAxiosData)
      .then(setCoffees)
      .catch(console.error);
    axiosInstance
      .get("/restaurant/random_restaurant", { params })
      .then(extractAxiosData)
      .then(setRestaurants)
      .catch(console.error);
  }, []);

  return (
    <HorizPanel>
      {coffees.map((coffee) => (
        <CoffeeCard data={coffee} key={coffee.uid} />
      ))}
      {computers.map((computer) => (
        <ComputerCard data={computer} key={computer.uid} />
      ))}
      {restaurants.map((restaurant) => (
        <RestaurantCard data={restaurant} key={restaurant.uid} />
      ))}
    </HorizPanel>
  );
}
