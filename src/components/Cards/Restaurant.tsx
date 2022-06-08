import React, { useMemo } from "react";
import AbstractCard, { Detail } from "./AbstractCard";

type OpeningHourDay = {
  opens_at: string;
  closes_at: string;
  is_closed: boolean;
};

type OpeningHours = Record<
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday",
  OpeningHourDay
>;

export type RestaurantDetail = {
  id: number;
  uid: string;
  name: string;
  type: string;
  description: string;
  review: string;
  logo: string;
  phone_number: string;
  address: string;
  hours: OpeningHours;
};

interface Props {
  data: RestaurantDetail;
}

const Restaurant = ({ data }: Props) => {
  const details = useMemo<Detail>(() => {
    const { hours, id, uid, logo, name, ...rest } = data;
    return { ...rest };
  }, [data]);
  return (
    <AbstractCard header={data.name} category="Restaurant" details={details} />
  );
};

export default Restaurant;
