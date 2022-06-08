import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { ColorProps, Link as ViewLink } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export type Detail = Record<any, string | number>;

interface Props {
  header: string;
  category: string;
  details: Detail;
}

const TEXT_COLOR: ColorProps["color"] = "gray.600";

export default function AbstractCard({ category, header, details }: Props) {
  return (
    <Box backgroundColor="white" p={4} minWidth="400">
      <Flex justifyContent="space-between">
        <Heading>{header}</Heading>
        <Link href="#" style={{ cursor: "pointer" }}>
          <ViewLink fontWeight="bold" color="orange.600">
            View
          </ViewLink>
        </Link>
      </Flex>
      <Box pt={2} pb={4}>
        <Text color={TEXT_COLOR}>{category}</Text>
      </Box>
      <Box color={TEXT_COLOR}>
        {Object.entries(details).map(([key, value], i) => (
          <Flex justifyContent="space-between" pb={2} key={i}>
            <Text>{key}</Text>
            <Text>{value}</Text>
          </Flex>
        ))}
      </Box>
    </Box>
  );
}
