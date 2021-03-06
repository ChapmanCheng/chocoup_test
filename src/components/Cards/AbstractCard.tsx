import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Link as ViewLink, Spacer } from "@chakra-ui/react";
import { startCase, truncate } from "lodash";
import Link from "next/link";
import React from "react";

export type Detail = Record<string, any>;

interface Props {
  header: string;
  category: string;
  details: Detail;
}

export default function AbstractCard({ category, header, details }: Props) {
  return (
    <Box backgroundColor="white" p={4} minWidth={["100%", 300, 400]}>
      <Flex justifyContent="space-between">
        <Heading size={["md", "lg", "xl"]}>{header}</Heading>
        <Spacer />
        <Link href="#" style={{ cursor: "pointer" }}>
          <ViewLink fontSize="xl" fontWeight="bold" color="orange.600">
            View
          </ViewLink>
        </Link>
      </Flex>
      <Box pt={2} pb={4}>
        <Text>{category}</Text>
      </Box>
      <Box>
        {Object.entries(details).map(([key, value], i) => (
          <Flex justifyContent="space-between" pb={2} key={i}>
            <Text>{startCase(key)}</Text>
            <Spacer />
            <Text>
              {typeof value == "string"
                ? truncate(value, { length: 40 })
                : value}
            </Text>
          </Flex>
        ))}
      </Box>
    </Box>
  );
}
