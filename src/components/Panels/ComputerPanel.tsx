import React, { useEffect, useState } from "react";
import axiosInstance from "../../resources/randomDataApiResources";
import extractAxiosData from "../../utilities/extracAxiosData";
import ComputerCard from "../Cards/Computer";
import type ComputerType from "../../types/Computer";
import GridPanelLayout from "./HorizPanel";

export default function ComputerPanel() {
  const [computers, setComputers] = useState<ComputerType[]>([]);
  useEffect(() => {
    axiosInstance
      .get("/computer/random_computer")
      .then(extractAxiosData)
      .then(setComputers)
      .catch(console.error);
  }, []);

  return (
    <GridPanelLayout>
      {computers.map((computer) => (
        <ComputerCard data={computer} key={computer.uid} />
      ))}
    </GridPanelLayout>
  );
}
