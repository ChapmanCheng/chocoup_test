import React, { useMemo } from "react";
import useExtractByKeys from "../../hooks/useExtractByKeys";
import type Restaurant from "../../types/Restaurant";
import AbstractCard, { Detail } from "./AbstractCard";

interface Props {
  data: Restaurant;
}

const RestaurantCard = ({ data }: Props) => {
  const details = useExtractByKeys(
    data,
    "type",
    "description",
    "review",
    "phone_number",
    "address"
  );

  return (
    <AbstractCard header={data.name} category="Restaurant" details={details} />
  );
};

export default RestaurantCard;
