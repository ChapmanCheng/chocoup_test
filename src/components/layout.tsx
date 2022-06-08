import { Box, Flex, Heading } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <Box mx={16} my={8}>
      <Flex minHeight="100vh" direction="column">
        <Box py={8}>
          <Heading>Products</Heading>
        </Box>
        <Box>{children}</Box>
      </Flex>
    </Box>
  );
}
