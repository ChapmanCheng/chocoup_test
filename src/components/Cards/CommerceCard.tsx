import { useMemo } from "react";
import useExtractByKeys from "../../hooks/useExtractByKeys";
import Commerce from "../../types/Commerce";
import AbstractCard from "./AbstractCard";

interface Props {
  data: Commerce;
}

export default function CommerceCard({ data }: Props) {
  const { category, header } = useMemo(() => {
    return {
      header: data.product_name,
      category: data.department,
    };
  }, [data]);
  const details = useExtractByKeys(
    data,
    "color",
    "material",
    "price",
    "promo_code"
  );

  return <AbstractCard header={header} category={category} details={details} />;
}
