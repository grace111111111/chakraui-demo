import React from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Box,
} from "@chakra-ui/core";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

export default function Form({props}) {
  return (
    <Box backgroundColor="gray.200" p={3} w="100%" boxShadow="lg" borderRadius="lg" p="80px 30px">
      <Tabs isFitted>
        <TabList>
          <Tab _focus={{ boxShadow: "none" }}>登录</Tab>
          <Tab _focus={{ boxShadow: "none" }}>注册</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SignIn />
          </TabPanel>
          <TabPanel>
            <SignUp />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
