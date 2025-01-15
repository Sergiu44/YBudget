import React, { PropsWithChildren } from "react";

import "./styles.css";
import BrandSlogan from "./components/BrandSlogan";

export default function AuthenticationLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen w-full">
      <div className="get-started__container flex h-full flex-col py-40 md:grid md:grid-cols-12 md:gap-4">
        <div className="col-start-2 col-end-7">
          <h1 className="text-center font-josefinSans text-4xl font-bold md:text-left">
            YBudget
          </h1>
          <p className="font-montserrat text-sm">
            Better visualization for your budget by automatic calculations
          </p>

          <BrandSlogan />
        </div>
        <div className="col-start-8 col-end-11">{children}</div>
      </div>
    </div>
  );
}
