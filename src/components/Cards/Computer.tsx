import React, { useMemo } from "react";
import type Computer from "../../type/Computer";
import AbstractCard, { Detail } from "./AbstractCard";

interface Props {
  data: Computer;
}

const ComputerCard = ({ data }: Props) => {
  const details = useMemo<Detail>(() => {
    const { id, uid, ...rest } = data;
    return { ...rest };
  }, [data]);
  return (
    <AbstractCard header={data.os} category={"Computer"} details={details} />
  );
};

export default ComputerCard;
