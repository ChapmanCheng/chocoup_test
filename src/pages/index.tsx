import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import type { NextPage } from "next";
import React from "react";
import CoffeePanel from "../components/Panels/CoffeePanel";
import ComputerPanel from "../components/Panels/ComputerPanel";
import OverviewPanel from "../components/Panels/OverviewPanel";
import RestaurantPanel from "../components/Panels/RestaurantPanel";
import tabProps from "../utilities/tabProps";

const Home: NextPage = () => {
  return (
    <Box backgroundColor="gray.100" p={4} rounded="md">
      <Tabs variant="solid-rounded" colorScheme="purple">
        <TabList
          pb={4}
          borderBottom="2px"
          borderColor="gray.400"
          gap={2}
          flexWrap={["wrap", "nowrap"]}
        >
          <Tab {...tabProps}>Overview</Tab>
          <Tab {...tabProps}>Coffee</Tab>
          <Tab {...tabProps}>Computer</Tab>
          <Tab {...tabProps}>Restaurant</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <OverviewPanel />
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
