"use client";
import { Box, Flex, Heading, Tabs } from "@chakra-ui/react";
import React from "react";
import { FaDAndDBeyond, FaKey } from "react-icons/fa6";

export default function AccountPage() {
  return (
    <Box>
      <Flex mb={8} justifyContent="space-between">
        <Box>
          <Heading size="4xl" className="font-montserrat">
            Account
          </Heading>
          {/* <Heading color="text" size="md">
            It&apos;s good to have you back
          </Heading> */}
        </Box>
      </Flex>

      <Tabs.Root>
        <Tabs.List>
          <Tabs.Trigger value="generalSettings">
            <FaKey />
            General Settings
          </Tabs.Trigger>
          <Tabs.Trigger value="security">Security</Tabs.Trigger>
          <Tabs.Indicator />
        </Tabs.List>
        <Tabs.Content mx={4} value="generalSettings">
          General SEttings
        </Tabs.Content>
        <Tabs.Content mx={4} value="security">
          Securtity
        </Tabs.Content>
      </Tabs.Root>
    </Box>
  );
}
