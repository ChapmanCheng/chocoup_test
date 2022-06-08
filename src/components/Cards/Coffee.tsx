import React, { useMemo } from "react";
import AbstractCard, { Detail } from "./AbstractCard";

export type CoffeeDetail = {
  id: number;
  uid: string;
  blend_name: string;
  origin: string;
  variety: string;
  notes: string;
  intensifier: string;
};

interface Props {
  data: CoffeeDetail;
}

const Coffee = ({ data }: Props) => {
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

export default Coffee;
