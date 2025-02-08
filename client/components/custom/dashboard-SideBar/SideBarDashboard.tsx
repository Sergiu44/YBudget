"use client";

import { Box, GridItem, IconButton, VStack } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import SideBarItem from "./SideBarItem";
import { SideBarDashboardEnum } from "@/app/models/enums/SideBarDashboard";
import {
  FaUser,
  FaChartArea,
  FaHouse,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";

export default function SideBarDashboard() {
  const [isExtended, setIsExtended] = useState<boolean>(true);

  const location = usePathname();
  return (
    <GridItem
      position="relative"
      className={isExtended ? "siderbar-item-extended" : ""}
      boxShadow={isExtended ? "" : "xl"}
    >
      <Box
        overflow="hidden"
        fontWeight="600"
        py={{ base: 4, lg: 8 }}
        pl={{ base: 2, lg: 6 }}
        className="font-roboto"
      >
        <VStack alignItems="flex-start" gap={2}>
          <SideBarItem
            icon={<FaHouse />}
            isActive={location.split("/")[1] == SideBarDashboardEnum.Home}
            href={`/${SideBarDashboardEnum.Home}`}
          >
            Home
          </SideBarItem>
          <SideBarItem
            icon={<FaChartArea />}
            isActive={
              location.split("/")[1] == SideBarDashboardEnum.Transactions
            }
            href={`/${SideBarDashboardEnum.Transactions}`}
          >
            Transactions
          </SideBarItem>
          <SideBarItem
            icon={<FaUser />}
            isActive={location.split("/")[1] == SideBarDashboardEnum.Account}
            href={`/${SideBarDashboardEnum.Account}`}
          >
            Account
          </SideBarItem>
        </VStack>
      </Box>

      <IconButton
        position="absolute"
        bottom={0}
        right={0}
        style={{
          translate: "calc(50% + 2px) -40%",
        }}
        aria-label={
          isExtended ? "Shrink sidebar dashboard" : "Grow sidebar dashboard"
        }
        onClick={() => setIsExtended(!isExtended)}
      >
        {isExtended ? <FaChevronLeft /> : <FaChevronRight />}
      </IconButton>
    </GridItem>
  );
}
