import { Flex } from "@chakra-ui/layout";
import React, { PropsWithChildren } from "react";

export default function HorizPanel({ children }: PropsWithChildren<unknown>) {
  return (
    <Flex gap={2} overflowX="auto" alignItems="flex-start">
      {children}
    </Flex>
  );
}
