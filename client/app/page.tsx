import { auth, signOut } from "@/app/configs/auth";
import React from "react";

export default async function page() {
  const user = await auth();
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <div>{JSON.stringify(user)}</div>
      <button type="submit">Sign out</button>
    </form>
  );
}
