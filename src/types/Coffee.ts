import RandomDataApiObject from "./RandomDataApiObject";

export type Coffee = RandomDataApiObject & {
  blend_name: string;
  origin: string;
  variety: string;
  notes: string;
  intensifier: string;
};

export default Coffee;
