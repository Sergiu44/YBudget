"use client";
import { Provider } from "@/components/ui/provider";
import React, { PropsWithChildren } from "react";

export default function Providers(props: PropsWithChildren) {
  return <Provider>{props.children}</Provider>;
}
