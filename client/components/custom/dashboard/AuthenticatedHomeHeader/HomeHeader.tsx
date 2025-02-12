"use client";
import { Heading, Skeleton } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React from "react";

export default function HomeHeader() {
  const { data, status } = useSession();
  return (
    <Heading size="4xl" className="font-montserrat">
      Welcome back,{" "}
      {status === "authenticated" && data ? data.user?.name : <Skeleton />}
    </Heading>
  );
}
