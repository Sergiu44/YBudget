"use client";

import { Link as Anchor, IconProps } from "@chakra-ui/react";
import Link from "next/link";
import React, { PropsWithChildren, ReactElement } from "react";

interface ISideBarItemProps {
  isActive: boolean;
  href: string;
  icon?: ReactElement<IconProps>;
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
      fontSize="16px"
      width="100%"
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
        color: "primary",
        textDecoration: "none",
      }}
      {...(props.isActive && {
        color: "primary",
      })}
    >
      {props.icon} {props.children}
    </Anchor>
  );
}
