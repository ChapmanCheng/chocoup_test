import { useMemo } from "react";
import { Detail } from "../components/Cards/AbstractCard";

export default function useExtractByKeys<T extends Detail>(
  detail: T,
  ...keys: (keyof T)[]
) {
  return useMemo(() => {
    return keys.reduce<Detail>((viewObj, key) => {
      return { ...viewObj, [key]: detail[key] };
    }, {});
  }, [detail, keys]);
}
