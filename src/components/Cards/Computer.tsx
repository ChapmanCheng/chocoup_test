import React, { useMemo } from "react";
import AbstractCard, { Detail } from "./AbstractCard";

export type ComputerDetail = {
  id: number;
  uid: string;
  platform: string;
  type: string;
  os: string;
  stack: string;
};

interface Props {
  data: ComputerDetail;
}

const Computer = ({ data }: Props) => {
  const details = useMemo<Detail>(() => {
    const { id, uid, ...rest } = data;
    return { ...rest };
  }, [data]);
  return (
    <AbstractCard header={data.os} category={"Computer"} details={details} />
  );
};

export default Computer;
