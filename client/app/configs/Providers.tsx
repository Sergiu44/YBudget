"use client";
import { Provider } from "@/components/ui/provider";
import { SessionProvider } from "next-auth/react";
import React, { PropsWithChildren } from "react";

export default function Providers(props: PropsWithChildren) {
  return (
    <Provider>
      <SessionProvider>{props.children}</SessionProvider>
    </Provider>
  );
}
