import RandomDataApiObject from "./RandomDataApiObject";

type Computer = RandomDataApiObject & {
  platform: string;
  type: string;
  os: string;
  stack: string;
};

export default Computer;
