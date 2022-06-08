import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import type { NextPage } from "next";
import React, { useEffect, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";
import CommerceCard from "../components/Cards/CommerceCard";
import GridPanelLayout from "../components/Panels/HorizPanel";
import randomDataApiResources from "../resources/randomDataApiResources";
import Commerce from "../types/Commerce";
import tabProps from "../utilities/tabProps";

const END_POINT = "/commerce/random_commerce";

const Home: NextPage = () => {
  const [commerces, setCommerces] = useState<Commerce[]>([]);

  const departmentsTabs = useMemo(() => {
    const set = new Set<string>();
    commerces.forEach((com) => {
      if (com.department.includes("&"))
        com.department.split("&").forEach((word) => set.add(word.trim()));
      else set.add(com.department);
    });
    return Array.from(set.keys());
  }, [commerces]);

  const fetchCommerceData = async () => {
    try {
      const { data } = await randomDataApiResources.get<Commerce[]>(END_POINT);
      setCommerces((prev) => [...prev, ...data]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCommerceData();
  }, []);

  const { inView, ref } = useInView();

  useEffect(() => {
    if (inView) fetchCommerceData();
  }, [inView]);

  return (
    <Box backgroundColor="gray.100" p={4} rounded="md">
      <Tabs variant="solid-rounded" colorScheme="purple" isLazy>
        <TabList
          pb={4}
          borderBottom="2px"
          borderColor="gray.400"
          gap={2}
          flexWrap={["wrap", "nowrap"]}
          overflowX="scroll"
        >
          <Tab {...tabProps} whiteSpace="nowrap">
            Overview
          </Tab>
          {departmentsTabs.map((dept, i) => (
            <Tab {...tabProps} key={i} whiteSpace="nowrap">
              {dept}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel>
            <GridPanelLayout>
              {commerces.map((com, i) => (
                <CommerceCard data={com} key={com.uid} />
              ))}
            </GridPanelLayout>
          </TabPanel>
          {departmentsTabs.map((tabKey, i) => (
            <TabPanel key={i}>
              <GridPanelLayout>
                {commerces
                  .filter(({ department }) => department.includes(tabKey))
                  .map((com, i) => (
                    <CommerceCard data={com} key={i} />
                  ))}
              </GridPanelLayout>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
      <Box ref={ref} />
    </Box>
  );
};

export default Home;
