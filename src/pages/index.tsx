import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import type { NextPage } from "next";
import React from "react";
import CoffeePanel from "../components/Panels/CoffeePanel";
import ComputerPanel from "../components/Panels/ComputerPanel";
import RestaurantPanel from "../components/Panels/RestaurantPanel";

const Home: NextPage = () => {
  return (
    <Box backgroundColor="gray.100" p={4} rounded="md">
      <Tabs variant="solid-rounded" colorScheme="purple">
        <TabList pb={4} borderBottom="2px" borderColor="gray.400">
          <Tab>Overview</Tab>
          <Tab>Coffee</Tab>
          <Tab>Computer</Tab>
          <Tab>Restaurant</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Overview</p>
          </TabPanel>
          <TabPanel>
            <CoffeePanel />
          </TabPanel>
          <TabPanel>
            <ComputerPanel />
          </TabPanel>
          <TabPanel>
            <RestaurantPanel />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Home;
