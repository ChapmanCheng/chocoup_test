import { SimpleGrid } from "@chakra-ui/layout";
import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren<unknown> {}

export default function HorizPanel({ children }: Props) {
  return (
    <SimpleGrid columns={[1, 1, 2, 3]} spacing={4}>
      {children}
    </SimpleGrid>
  );
}
