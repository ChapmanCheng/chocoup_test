import React, { useEffect, useState } from "react";
import axiosInstance from "../../resources/randomDataApiResources";
import type Coffee from "../../types/Coffee";
import extractAxiosData from "../../utilities/extracAxiosData";
import CoffeeCard from "../Cards/Coffee";
import GridPanelLayout from "./HorizPanel";

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
    <GridPanelLayout>
      {coffees.map((coffee) => (
        <CoffeeCard data={coffee} key={coffee.uid} />
      ))}
    </GridPanelLayout>
  );
}
