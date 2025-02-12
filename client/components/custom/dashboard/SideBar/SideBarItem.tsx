"use client";

import { Link as Anchor, IconProps, LinkProps } from "@chakra-ui/react";
import Link from "next/link";
import React, { PropsWithChildren, ReactElement } from "react";

interface ISideBarItemProps {
  isActive: boolean;
  href: string;
  icon?: ReactElement<IconProps>;
  customStyles?: LinkProps;
}

export default function SideBarItem(
  props: PropsWithChildren<ISideBarItemProps>,
) {
  return (
    <Anchor
      as={Link}
      href={props.href}
      px={3}
      py={1}
      fontSize="14px"
      width="100%"
      fontWeight="bold"
      display="flex"
      placeItems="center"
      textDecor="none"
      gap={2}
      color="text"
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
      _hover={{
        color: "primary.500",
        textDecoration: "none",
      }}
      {...(props.isActive && {
        color: "primary.500",
      })}
      {...props.customStyles}
    >
      {props.icon} {props.children}
    </Anchor>
  );
}
