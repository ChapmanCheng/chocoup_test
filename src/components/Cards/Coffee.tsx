import React from "react";
import useExtractByKeys from "../../hooks/useExtractByKeys";
import Coffee from "../../type/Coffee";
import AbstractCard from "./AbstractCard";

interface Props {
  data: Coffee;
}

const CoffeeCard = ({ data }: Props) => {
  const details = useExtractByKeys(
    data,
    "intensifier",
    "notes",
    "origin",
    "variety"
  );

  return (
    <AbstractCard
      header={data.blend_name}
      category="Coffee"
      details={details}
    />
  );
};

export default CoffeeCard;
