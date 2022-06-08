import RandomDataApiObject from "./RandomDataApiObject";

type Commerce = RandomDataApiObject & {
  color: string;
  department: string;
  material: string;
  product_name: string;
  price: number;
  pring_string: string;
  promo_code: string;
};

export default Commerce;
