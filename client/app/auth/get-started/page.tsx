import FormField from "@/businessComponents/Input/FormField";
import React from "react";

export default function GetStartedPage() {
  return (
    <div className="h-full bg-white/20 p-12 shadow-md">
      <FormField id="email" type="email" />

      <FormField id="password" type="password" />

      <FormField id="confirm-password" type="password" />

      <div className="my-4 flex justify-center text-white">OR</div>
    </div>
  );
}
