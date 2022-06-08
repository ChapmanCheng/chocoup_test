import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <Box backgroundColor="gray.100" p={8} rounded="md">
      <Tabs variant="solid-rounded" colorScheme="purple">
        <TabList pb={4} borderBottom="2px" borderColor="gray.400">
          <Tab>Overview</Tab>
          <Tab>Industrial &#38; Home</Tab>
          <Tab>Jewelry</Tab>
          <Tab>Sports</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Overview</p>
          </TabPanel>
          <TabPanel>
            <p>Industrial &#38; Home</p>
          </TabPanel>
          <TabPanel>
            <p>3</p>
          </TabPanel>
          <TabPanel>
            <p>4</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Home;
