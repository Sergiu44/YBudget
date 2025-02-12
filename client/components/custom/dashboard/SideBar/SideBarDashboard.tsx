"use client";

import {
  Box,
  Button,
  GridItem,
  IconButton,
  Link as Anchor,
  VStack,
  Spinner,
} from "@chakra-ui/react";
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
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { IoIosLogOut } from "react-icons/io";
import Link from "next/link";

export default function SideBarDashboard() {
  const { status } = useSession();
  const [isExtended, setIsExtended] = useState<boolean>(true);

  const location = usePathname();

  return (
    <>
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
          height="100%"
        >
          <VStack alignItems="flex-start" gap={2} height="100%">
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

            <Anchor
              px={3}
              py={1}
              fontSize="14px"
              width="100%"
              fontWeight="bold"
              display="flex"
              placeItems="center"
              textDecor="none"
              gap={2}
              color="primary.400"
              _hover={{
                color: "primary.600",
              }}
              _focusVisible={{
                border: "none",
                outline: "none",
              }}
              _active={{
                border: "none",
                outline: "none",
              }}
              _focusWithin={{
                border: "none",
                outline: "none",
              }}
              mt="auto"
              as={Link}
              href={`${SideBarDashboardEnum.Premium}`}
            >
              Go Premium
            </Anchor>

            <Button
              fontWeight="bold"
              variant="plain"
              px={3}
              py={1}
              _hover={{ color: "primary.600" }}
              onClick={() => signOut()}
            >
              Sign Out <IoIosLogOut strokeWidth="12px" />
            </Button>
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
      {status === "loading" && (
        <Box
          zIndex={9999999}
          position="absolute"
          inset={0}
          bg={"bg/40"}
          display="grid"
          placeItems="center"
        >
          <Spinner />
        </Box>
      )}
    </>
  );
}
