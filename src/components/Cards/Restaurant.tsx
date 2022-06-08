import React, { useMemo } from "react";
import type Restaurant from "../../type/Restaurant";
import AbstractCard, { Detail } from "./AbstractCard";

interface Props {
  data: Restaurant;
}

const RestaurantCard = ({ data }: Props) => {
  const details = useMemo<Detail>(() => {
    const { hours, id, uid, logo, name, ...rest } = data;
    return { ...rest };
  }, [data]);
  return (
    <AbstractCard header={data.name} category="Restaurant" details={details} />
  );
};

export default RestaurantCard;
