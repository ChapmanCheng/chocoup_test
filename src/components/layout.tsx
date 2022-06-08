import { Box, Flex, Heading } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <Box mx={[2, 8, 16]} my={[4, 8]} w={"auto"}>
      <Flex minHeight="100vh" direction="column">
        <Box py={[4, 8]}>
          <Heading>Products</Heading>
        </Box>
        <Box>{children}</Box>
      </Flex>
    </Box>
  );
}
