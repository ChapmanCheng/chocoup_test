import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios";
import type Coffee from "../../type/Coffee";
import extractAxiosData from "../../utilities/extracAxiosData";
import CoffeeCard from "../Cards/Coffee";
import HorizPanel from "./HorizPanel";

export default function CoffeePanel() {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  useEffect(() => {
    axiosInstance
      .get("/coffee/random_coffee")
      .then(extractAxiosData)
      .then(setCoffees)
      .catch(console.error);
  }, []);
  return (
    <HorizPanel>
      {coffees.map((coffee) => (
        <CoffeeCard data={coffee} key={coffee.uid} />
      ))}
    </HorizPanel>
  );
}
