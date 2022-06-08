import RandomDataApiObject from "./RandomDataApiObject";

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

type Restaurant = RandomDataApiObject & {
  name: string;
  type: string;
  description: string;
  review: string;
  logo: string;
  phone_number: string;
  address: string;
  hours: OpeningHours;
};

export default Restaurant;
