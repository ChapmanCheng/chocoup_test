import React, { useMemo } from "react";
import Coffee from "../../type/Coffee";
import AbstractCard, { Detail } from "./AbstractCard";

interface Props {
  data: Coffee;
}

const CoffeeCard = ({ data }: Props) => {
  const details = useMemo<Detail>(() => {
    const { blend_name, id, uid, ...rest } = data;
    return { ...rest };
  }, [data]);
  return (
    <AbstractCard
      header={data.blend_name}
      category="Coffee"
      details={details}
    />
  );
};

export default CoffeeCard;
