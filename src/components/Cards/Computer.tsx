import React from "react";
import useExtractByKeys from "../../hooks/useExtractByKeys";
import type Computer from "../../type/Computer";
import AbstractCard from "./AbstractCard";

interface Props {
  data: Computer;
}

const ComputerCard = ({ data }: Props) => {
  const details = useExtractByKeys(data, "platform", "os", "stack", "type");

  return (
    <AbstractCard header={data.os} category={"Computer"} details={details} />
  );
};

export default ComputerCard;
